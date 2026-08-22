/* Word bank for the Report Comment Builder.
   Every trait has several phrasings so two learners with the
   same selections don't get identical wording. {name} and
   {subj}/{obj}/{poss} placeholders are filled in at generation time.
   subj = he/she/they, obj = him/her/them, poss = his/her/their
*/

const TRAITS = [
  {
    id: "comprehension",
    label: "Comprehension",
    subject: "Home Language",
    strength: [
      "{name} reads a passage and can immediately explain what it was about",
      "{name} picks out the main idea of a story with ease",
      "{name} answers questions about a text thoughtfully and accurately",
      "{name} makes sensible predictions about what will happen next in a story",
    ],
    develop: [
      "{name} is working on retelling a story in {poss} own words",
      "{name} is building confidence answering questions about what {subj} has read",
      "{name} is learning to pick out the main idea of a passage",
      "{name} would benefit from more practice explaining a story after reading it",
    ],
  },
  {
    id: "phonics",
    label: "Reading & phonics",
    subject: "Home Language",
    strength: [
      "{name} sounds out unfamiliar words quickly and confidently",
      "{name} reads with good expression and pace for {poss} age",
      "{name} recognises {poss} sight words fluently",
      "{name} blends sounds together smoothly when reading new words",
    ],
    develop: [
      "{name} is still working on blending sounds to read unfamiliar words",
      "{name} is building up {poss} bank of sight words",
      "{name} benefits from extra practice sounding out longer words",
      "{name} is developing {poss} reading fluency with regular practice at home",
    ],
  },
  {
    id: "creative-writing",
    label: "Creative ideas",
    subject: "Home Language",
    strength: [
      "{name} comes up with imaginative, original ideas for stories",
      "{name} has a wonderful imagination that shows in {poss} writing and drawing",
      "{name} enjoys inventing {poss} own characters and story lines",
      "{name} approaches creative tasks with enthusiasm and original thinking",
    ],
    develop: [
      "{name} is encouraged to take more risks with {poss} own ideas in creative tasks",
      "{name} is gaining confidence coming up with original ideas independently",
      "{name} is learning to expand on {poss} ideas with more detail",
      "{name} would benefit from more opportunities to practise imaginative storytelling",
    ],
  },
  {
    id: "handwriting",
    label: "Handwriting & fine motor",
    subject: "Home Language",
    strength: [
      "{name} forms letters neatly and holds a pencil correctly",
      "{name} has lovely, well-formed handwriting for {poss} age",
      "{name} shows good control and pressure when writing and colouring in",
      "{name} completes fine motor tasks like cutting and threading with care",
    ],
    develop: [
      "{name} is still developing correct letter formation",
      "{name} is working on {poss} pencil grip and letter sizing",
      "{name} would benefit from extra fine motor practice such as cutting, threading and drawing",
      "{name} is building up hand strength and control for writing tasks",
    ],
  },
  {
    id: "mental-maths",
    label: "Mental maths",
    subject: "Mathematics",
    strength: [
      "{name} solves mental maths problems quickly and accurately",
      "{name} shows strong number sense and works things out in {poss} head with confidence",
      "{name} enjoys mental maths challenges and tackles them eagerly",
      "{name} calculates simple sums mentally without needing to count on fingers",
    ],
    develop: [
      "{name} is building speed and confidence with mental maths",
      "{name} still relies on counting aids for simple sums and is working towards doing this mentally",
      "{name} is developing {poss} mental maths strategies with regular practice",
      "{name} would benefit from daily mental maths practice at home",
    ],
  },
  {
    id: "number-bonds",
    label: "Number bonds",
    subject: "Mathematics",
    strength: [
      "{name} knows {poss} number bonds to ten confidently",
      "{name} recalls number bonds quickly and applies them well",
      "{name} has a solid grasp of how numbers combine and split",
      "{name} uses {poss} knowledge of number bonds to solve problems efficiently",
    ],
    develop: [
      "{name} is still learning {poss} number bonds to ten",
      "{name} is working on recalling number bonds without counting each time",
      "{name} would benefit from regular number bond practice at home",
      "{name} is building a stronger foundation in number bonds this term",
    ],
  },
  {
    id: "problem-solving",
    label: "Problem solving",
    subject: "Mathematics",
    strength: [
      "{name} works through word problems logically and methodically",
      "{name} enjoys a maths challenge and perseveres until {subj} finds the answer",
      "{name} applies {poss} maths knowledge well to solve everyday problems",
      "{name} thinks carefully before choosing how to solve a problem",
    ],
    develop: [
      "{name} is learning to read word problems carefully before solving them",
      "{name} is building confidence tackling multi-step problems",
      "{name} would benefit from talking through {poss} thinking when solving problems",
      "{name} is developing strategies for approaching unfamiliar problems",
    ],
  },
  {
    id: "independence",
    label: "Works independently",
    subject: "Life Skills",
    strength: [
      "{name} works independently and manages {poss} own tasks well",
      "{name} gets started on tasks without needing reminders",
      "{name} shows great initiative and rarely needs help getting going",
      "{name} is a self-starter who takes ownership of {poss} work",
    ],
    develop: [
      "{name} is building confidence to start tasks independently",
      "{name} is learning to work through a task before asking for help",
      "{name} still relies on reassurance before beginning independent tasks",
      "{name} is developing {poss} independence with structured encouragement",
    ],
  },
  {
    id: "teamwork",
    label: "Teamwork",
    subject: "Life Skills",
    strength: [
      "{name} works well in a group and shares ideas generously",
      "{name} is a kind and cooperative partner during group activities",
      "{name} listens to others' ideas and contributes {poss} own thoughtfully",
      "{name} includes others warmly during group and pair work",
    ],
    develop: [
      "{name} is learning to share ideas and take turns during group work",
      "{name} is building confidence contributing during group activities",
      "{name} is working on listening to others' ideas during group tasks",
      "{name} would benefit from more opportunities to practise working in a team",
    ],
  },
  {
    id: "leadership",
    label: "Leadership",
    subject: "Life Skills",
    strength: [
      "{name} naturally takes the lead in group situations and organises {poss} peers kindly",
      "{name} sets a positive example for classmates to follow",
      "{name} steps up to guide a group task with confidence",
      "{name} is often the one classmates turn to for guidance during activities",
    ],
    develop: [
      "{name} is encouraged to take on small leadership roles to build confidence",
      "{name} is growing more comfortable guiding a group task",
      "{name} is learning to voice {poss} ideas when leading a group",
      "{name} would benefit from opportunities to practise leading a small group",
    ],
  },
  {
    id: "attention",
    label: "Attention span",
    subject: "General",
    strength: [
      "{name} concentrates well and stays on task for extended periods",
      "{name} listens attentively during lessons and follows instructions the first time",
      "{name} focuses well, even during longer or more challenging activities",
      "{name} settles into tasks quickly and sustains {poss} concentration",
    ],
    develop: [
      "{name} is building {poss} concentration for longer tasks",
      "{name} is working on staying focused when a task takes a while to complete",
      "{name} sometimes needs gentle reminders to stay on task",
      "{name} is developing {poss} listening and focus during whole-class instruction",
    ],
  },
  {
    id: "confidence",
    label: "Confidence",
    subject: "General",
    strength: [
      "{name} approaches new challenges with confidence and a positive attitude",
      "{name} is not afraid to try something new, even if {subj} finds it tricky at first",
      "{name} shares {poss} ideas confidently in front of the class",
      "{name} has grown noticeably more confident this term",
    ],
    develop: [
      "{name} is growing in confidence when tackling new or unfamiliar tasks",
      "{name} is encouraged to trust {poss} own ideas more readily",
      "{name} is building the confidence to answer in front of the whole class",
      "{name} benefits from lots of encouragement when trying something new",
    ],
  },
  {
    id: "listening",
    label: "Listening skills",
    subject: "General",
    strength: [
      "{name} listens carefully and follows multi-step instructions well",
      "{name} pays close attention during carpet time and class discussions",
      "{name} takes instructions on board the first time they are given",
      "{name} is an attentive listener during story and lesson time",
    ],
    develop: [
      "{name} is working on listening to instructions all the way through before starting",
      "{name} is building {poss} listening skills during group instruction",
      "{name} sometimes needs instructions repeated individually",
      "{name} is developing {poss} focus during carpet time and class discussions",
    ],
  },
];

const TONES = {
  warm: {
    label: "Warm & encouraging",
    openers: [
      "It has been such a pleasure to have {name} in class this term.",
      "{name} has had a wonderful term.",
      "{name} continues to bring energy and warmth to our classroom.",
      "What a joy {name} has been to teach this term.",
      "{name} has settled beautifully into the routines of the classroom.",
      "This term, {name} has shown lovely growth in several areas.",
      "{name} approaches each day with enthusiasm and a ready smile.",
      "I have really enjoyed watching {name} grow this term.",
      "{name} brings a lovely energy to our class every day.",
      "It's been a delight to watch {name} develop this term.",
      "{name} continues to be a valued member of our class.",
    ],
    closings: [
      "Keep up the wonderful effort, {name} — I'm excited to see continued growth next term.",
      "Well done on a great term, {name}!",
      "{name} should be very proud of {poss} progress this term.",
      "I look forward to seeing {name} continue to flourish next term.",
      "A lovely term's work all round — well done, {name}.",
      "Keep shining, {name} — {poss} hard work is really paying off.",
      "I'm proud of the progress {name} has made and look forward to what's next.",
    ],
  },
  formal: {
    label: "Formal & professional",
    openers: [
      "{name} has made steady progress this term.",
      "This term, {name} has demonstrated consistent effort across {poss} work.",
      "{name}'s performance this term reflects sound engagement with the curriculum.",
      "{name} has continued to develop across a number of key areas this term.",
      "Overall, {name} has had a productive term.",
      "{name} has applied {poss}self consistently to classroom tasks this term.",
      "This term's assessments reflect {name}'s ongoing development.",
      "{name} has engaged well with the term's learning programme.",
      "{name}'s progress this term has been noted across several learning areas.",
      "{name} has shown measurable development in the areas outlined below.",
      "A review of {name}'s work this term indicates the following.",
    ],
    closings: [
      "{name} is encouraged to continue building on this progress next term.",
      "Continued focus on the areas above will support {name}'s development next term.",
      "{name} is well placed to build on this progress in the term ahead.",
      "We look forward to supporting {name}'s continued development next term.",
      "With continued effort, {name} is expected to make further progress next term.",
      "{name}'s teachers will continue to support growth in the areas noted above.",
      "Overall, a satisfactory term's progress, with clear areas identified for continued focus.",
    ],
  },
};

const SUBJECT_LEAD_INS = {
  "Home Language": [
    "In Home Language, ",
    "During reading and writing activities, ",
    "In literacy lessons, ",
  ],
  Mathematics: [
    "In Mathematics, ",
    "During maths activities, ",
    "In number work, ",
  ],
  "Life Skills": [
    "In Life Skills, ",
    "During group and classroom activities, ",
    "In everyday classroom routines, ",
  ],
  General: [
    "More generally, ",
    "Across the school day, ",
    "In the classroom more broadly, ",
  ],
};

// Plain transitional joiners only — the sentence that follows already
// carries its own subject (a pronoun, substituted in for the learner's
// name on second-and-later trait sentences), so joiners never also
// introduce a subject of their own.
const JOINERS = [
  "In addition, ",
  "Alongside this, ",
  "Furthermore, ",
  "At the same time, ",
  "Building on this, ",
  "What's more, ",
];

// Placeholder resolution helpers, exported for generateComment.js
const PRONOUNS = {
  she: { subj: "she", obj: "her", poss: "her", subjCap: "She" },
  he: { subj: "he", obj: "him", poss: "his", subjCap: "He" },
  they: { subj: "they", obj: "them", poss: "their", subjCap: "They" },
};

window.TeacherToolkitData = { TRAITS, TONES, SUBJECT_LEAD_INS, JOINERS, PRONOUNS };
