(function () {
  const { TRAITS } = window.TeacherToolkitData;
  const MAX_STRENGTHS = 3;
  const MAX_DEVELOP = 2;

  const state = {
    strengths: [],
    develop: [],
    rerollCount: 0,
  };

  const strengthGrid = document.getElementById("strength-chips");
  const developGrid = document.getElementById("develop-chips");
  const nameInput = document.getElementById("learner-name");
  const pronounSelect = document.getElementById("pronoun");
  const toneSelect = document.getElementById("tone");
  const output = document.getElementById("comment-output");
  const generateBtn = document.getElementById("generate-btn");
  const rewordBtn = document.getElementById("reword-btn");
  const copyBtn = document.getElementById("copy-btn");
  const copyFeedback = document.getElementById("copy-feedback");

  function renderChips(container, list, selectedArr, max) {
    container.innerHTML = "";
    list.forEach((trait) => {
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "chip";
      chip.textContent = trait.label;
      chip.dataset.id = trait.id;
      if (selectedArr.includes(trait.id)) chip.classList.add("selected");
      chip.addEventListener("click", () => {
        const idx = selectedArr.indexOf(trait.id);
        if (idx > -1) {
          selectedArr.splice(idx, 1);
        } else {
          if (selectedArr.length >= max) {
            selectedArr.shift();
          }
          selectedArr.push(trait.id);
        }
        renderChips(container, list, selectedArr, max);
      });
      container.appendChild(chip);
    });
  }

  renderChips(strengthGrid, TRAITS, state.strengths, MAX_STRENGTHS);
  renderChips(developGrid, TRAITS, state.develop, MAX_DEVELOP);

  function currentName() {
    return nameInput.value.trim() || "This learner";
  }

  function runGenerate(bumpSeed) {
    if (state.strengths.length === 0 && state.develop.length === 0) {
      output.textContent = "Pick at least one strength or area to develop to generate a comment.";
      output.classList.add("empty");
      return;
    }
    if (bumpSeed) state.rerollCount += 1;
    const text = window.TeacherToolkitGenerate({
      name: currentName(),
      pronoun: pronounSelect.value,
      tone: toneSelect.value,
      strengthIds: state.strengths,
      developIds: state.develop,
      seedExtra: state.rerollCount,
    });
    output.textContent = text;
    output.classList.remove("empty");
  }

  generateBtn.addEventListener("click", () => runGenerate(false));
  rewordBtn.addEventListener("click", () => runGenerate(true));

  copyBtn.addEventListener("click", async () => {
    if (!output.textContent || output.classList.contains("empty")) return;
    try {
      await navigator.clipboard.writeText(output.textContent);
      copyFeedback.textContent = "Copied!";
      copyFeedback.classList.add("show");
      setTimeout(() => copyFeedback.classList.remove("show"), 1500);
    } catch (e) {
      copyFeedback.textContent = "Couldn't copy — select the text manually.";
      copyFeedback.classList.add("show");
    }
  });
})();
