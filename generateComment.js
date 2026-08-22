/* Builds a report comment from selected traits.
   A seeded PRNG picks which phrasing to use for each piece, so the
   same trait selections produce different wording for different
   learners, and "Reword" produces a fresh combination on demand. */

function mulberry32(seed) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (Math.imul(31, hash) + str.charCodeAt(i)) | 0;
  }
  return hash;
}

function pick(rng, arr) {
  return arr[Math.floor(rng() * arr.length)];
}

function fillPlaceholders(template, name, pronounSet) {
  return template
    .replaceAll("{name}", name)
    .replaceAll("{subjCap}", pronounSet.subjCap)
    .replaceAll("{subj}", pronounSet.subj)
    .replaceAll("{obj}", pronounSet.obj)
    .replaceAll("{poss}", pronounSet.poss);
}

/**
 * @param {Object} opts
 * @param {string} opts.name
 * @param {"she"|"he"|"they"} opts.pronoun
 * @param {"warm"|"formal"} opts.tone
 * @param {string[]} opts.strengthIds - trait ids selected as strengths
 * @param {string[]} opts.developIds - trait ids selected as areas to develop
 * @param {number} [opts.seedExtra] - bump this (e.g. a click counter) to force new wording on reroll
 * @returns {string}
 */
function generateComment(opts) {
  const { TRAITS, TONES, SUBJECT_LEAD_INS, JOINERS, PRONOUNS } = window.TeacherToolkitData;
  const { name, pronoun, tone, strengthIds, developIds, seedExtra = 0 } = opts;

  const pronounSet = PRONOUNS[pronoun] || PRONOUNS.they;
  const seed = hashString(`${name}|${tone}|${strengthIds.join(",")}|${developIds.join(",")}|${seedExtra}`);
  const rng = mulberry32(seed);

  const toneData = TONES[tone] || TONES.warm;
  const traitsById = Object.fromEntries(TRAITS.map((t) => [t.id, t]));

  const sentences = [];
  sentences.push(fillPlaceholders(pick(rng, toneData.openers), name, pronounSet));

  const buildGroupSentences = (ids, field) => {
    return ids
      .map((id) => traitsById[id])
      .filter(Boolean)
      .map((trait, idx) => {
        const leadIns = SUBJECT_LEAD_INS[trait.subject] || SUBJECT_LEAD_INS.General;
        // Every trait phrasing starts with "{name}". For the first sentence
        // in a group we keep the name; for later ones we swap it for a
        // pronoun so the paragraph doesn't repeat the learner's name.
        const rawPhrasing = pick(rng, trait[field]);
        const phrasing = idx === 0 ? rawPhrasing : rawPhrasing.replace(/^\{name\}/, "{subj}");
        const body = fillPlaceholders(phrasing, name, pronounSet);
        if (idx === 0) {
          const leadIn = pick(rng, leadIns);
          return leadIn + body + ".";
        }
        const joiner = pick(rng, JOINERS);
        return joiner + body + ".";
      });
  };

  const strengthSentences = buildGroupSentences(strengthIds, "strength");
  const developSentences = buildGroupSentences(developIds, "develop");

  sentences.push(...strengthSentences);
  sentences.push(...developSentences);
  sentences.push(fillPlaceholders(pick(rng, toneData.closings), name, pronounSet));

  return sentences.join(" ");
}

window.TeacherToolkitGenerate = generateComment;
