// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
  info: {
    name: "Test Your Knowledge",
    main: "<p></p>",
    results: "<h5>Learn More</h5><p>study and take quiz</p>",
    level1: "Jeopardy Ready",
    level2: "Jeopardy Contender",
    level3: "Jeopardy Amateur",
    level4: "Jeopardy Newb",

    level5: "Stay in school, kid...", // no comma here
  },
  questions: [
    {
      // Question 1 - Multiple Choice, Single True Answer
      q: "For most economical rectangular section of a channel, the depth is kept ",
      a: [
        { option: "1/4th of width ", correct: false },
        { option: "3 times the hydraulic radius", correct: false },
        { option: "1/2 of the width", correct: true },
        { option: "Hydraulic mean depth", correct: false }, // no comma here
      ],
      correct: "<p><span>Right answer</span></p>",
      incorrect:
        "<p><span>wrong</span> It's wrong,</br> Ans: 1/2 of the width</p>", // no comma here
    },
    {
      // Question 2 - Multiple Choice, Multiple True Answers, Select Any
      q: "When water flows over a rectangular suppressed weir, the negative pressure created beneath the nappe",
      a: [
        { option: "Decrease the discharge", correct: false },
        { option: "Increase the discharge", correct: true },
        { option: "Does not affect the discharge", correct: false },
        { option: "None of these", correct: false }, // no comma here
      ],
      correct: "<p><span>Right answer</span> </p>",
      incorrect:
        "<p><span>wrong</span> It's wrong,</br> Ans: Increase the discharge</p>", // no comma here
    },
    {
      // Question 3 - Multiple Choice, Multiple True Answers, Select All
      q: "A notch is a device used to measure",
      a: [
        {
          option: "rate of flow of fluid through small channels",
          correct: true,
        },
        {
          option: "rate of flow of fluid through large channels",
          correct: false,
        },
        {
          option: "rate of flow of fluid through any type of channels",
          correct: false,
        },
        { option: "None of the above", correct: false }, // no comma here
      ],
      correct: "<p><span>Right answer</span></p>",
      incorrect:
        "<p><span>wrong</span> It's wrong,</br> Ans:  rate of change of fluid through small channels</p>", // no comma here
    },
    {
      // Question 4 - Multiple Choice, Multiple True Answers, Select Any
      q: "The sheet of liquid flowing over a notch is known as",
      a: [
        { option: "Nappe ", correct: true },
        { option: "Sill", correct: false },
        { option: "Crest", correct: false },
        { option: "None", correct: false }, // no comma here
      ],
      correct: "<p><span>Right answer</span> </p>",
      incorrect: "<p><span>wrong</span> It's wrong,</br> Ans: Nappe </p>", // no comma here
    },
    {
      // Question 5 - Multiple Choice, Multiple True Answers, Select Any
      q: "For a suppressed rectangular weir an arrangement for aeration of nappe is necessary______",
      a: [
        { option: "To maintain water quality ", correct: false },
        { option: "To prevent submergence of the weir ", correct: false },
        {
          option: "To have the highest value of C<sub>d</sub> ",
          correct: false,
        },
        {
          option:
            "To have a constant head discharge relationship which is independent of time",
          correct: true,
        }, // no comma here
      ],
      correct: "<p><span>Right answer</span> </p>",
      incorrect:
        "<p><span>wrong</span> It's wrong,</br> Ans: To have a constant head discharge relationship which is independent of time</p>", // no comma here
    },

    // no comma here
  ],
};
