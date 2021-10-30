// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
  info: {
    name: "Test Your Knowledge",
    main: "<p></p>",
    results: "<h5>Learn More</h5><p></p>",
    level1: "Jeopardy Ready",
    level2: "Jeopardy Contender",
    level3: "Jeopardy Amateur",
    level4: "Jeopardy Newb",
    level5: "Stay in school, kid...", // no comma here
  },
  questions: [
    {
      // Question 1 - Multiple Choice, Single True Answer
      q: "Darcy Weisbach equation is ",
      a: [
        { option: "h<sub>f</sub>=fL<sup>2</sup>v/2gD ", correct: false },
        { option: "h<sub>f</sub>=fLv<sup>2</sup>/2gD", correct: true },
        { option: "h<sub>f</sub>=fLD<sup>2</sup>/2gv", correct: false }, // no comma here
        { option: "h<sub>f</sub>=fL<sup>2</sup>/2gv", correct: false },
      ],
      correct: "<p><span>Right answer</span></p>",
      incorrect:
        "<p><span>wrong</span> It's wrong,<br>Ans: h<sub>f</sub>=fLv<sup>2</sup>/2gD</p>", // no comma here
    },
    {
      // Question 2 - Multiple Choice, Multiple True Answers, Select Any
      q: "Under uniform conditions Fanning friction factor for a rough pipe is?",
      a: [
        { option: "greater than that for a smooth pipe", correct: true },
        { option: "smaller than that for a smooth pipe", correct: false },
        { option: "equal to that for a smooth pipe", correct: false },
      ],

      correct: "<p><span>Right answer</span> </p>",
      incorrect:
        "<p><span>wrong</span> It's wrong,<br>Ans: greater than that for a smooth pipe</p>", // no comma here
    },
    {
      // Question 3 - Multiple Choice, Multiple True Answers, Select All
      q: "Which of the following is wrong!!</br><ol><li>i) Glass and plastics pipes have less friction loss</li><li>ii) Cast iron, steel pipes have high friction loss</li></ol>",
      a: [
        { option: "Only i)", correct: false },
        { option: "Only ii)", correct: false },
        { option: "Both are wrong", correct: false },
        { option: "Both i) and ii)", correct: true }, // no comma here
      ],
      correct: "<p><span>Right answer</span></p>",
      incorrect:
        "<p><span>wrong</span> It's wrong,<br>Ans: Both i) and ii)</p>", // no comma here
    },

    {
      // Question 4 - Multiple Choice, Multiple True Answers, Select Any
      q: "A flow in which each liquid particle does not have a definite path and the paths of individual particles also cross each other, is called turbulent flow.",
      a: [
        { option: "True", correct: true },
        { option: "False", correct: false }, // no comma here
      ],
      correct: "<p><span>Right answer</span> </p>",
      incorrect: "<p><span>wrong</span> It's wrong,<br>Ans: True</p>", // no comma here
    },
    {
      // Question 5 - Multiple Choice, Multiple True Answers, Select Any
      q: "Minor losses do not make serious effects in ",
      a: [
        { option: "Short pipes", correct: false },
        { option: "Long pipes", correct: true },
        { option: "Both the pipes", correct: false },
        { option: "None of these ", correct: false }, // no comma here
      ],
      correct: "<p><span>Right answer</span> </p>",
      incorrect: "<p><span>wrong</span> It's wrong,<br>Ans: Long pipes</p>", // no comma here
    },

    // no comma here
  ],
};
