
// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your Knowledge",
        "main":    "<p></p>",
        "results": "<h5>Learn More</h5><p></p>",
        "level1":  "Jeopardy Ready",
        "level2":  "Jeopardy Contender",
        "level3":  "Jeopardy Amateur",
        "level4":  "Jeopardy Newb",
        "level5":  "Stay in school, kid..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Which of the following is used for measurement of rate of flow in open channel such as river?",
            "a": [
                {"option": "Notch",      "correct": false},
                {"option": "Weir",      "correct": true},
                {"option": "Orifice",      "correct": false},		// no comma here
				{"option": "Mouth piece",      "correct": false}   
			],
			"correct": "<p><span>Right answer</span></p>",
			"incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:Weir</p>" // no comma here
        },
         { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Head of water over the rectangular notch is 900mm.the discharge is 300 liters/ sec,Find the length of the notch when c<sub>d=0.62.",
            "a": [
                {"option": "192mm", "correct": true},
                {"option": "162mm", "correct": false},
				{"option": "129mm", "correct": false},
				{"option": "198mm", "correct": false} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: 192mm</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "An error of 1% in measuring the head of water over rectangular notch, produces an error in the discharge which is equal to ",
            "a": [
                {"option": "2.5%",  "correct": false},
                {"option": "2.0%",  "correct": false},
                {"option": "1.25%",  "correct": false},		
                {"option": "1.5%",  "correct": true} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:1.5%</p>" // no comma here
        },
         
		{ // Question 4 - Multiple Choice, Multiple True Answers, Select Any
            "q": "The velocity with which the liquid approaches the notch or weir before passing over it is called as velocity approach.( Say true or false).",
            "a": [
                {"option": "True","correct": true},
				{"option": "False", "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: True</p>" // no comma here
        },
		{ // Question 5 - Multiple Choice, Multiple True Answers, Select Any
            "q": "The discharge over the rectangular notch is",
            "a": [
                {"option": "8/15C<sub>d</sub>&radic;&nbsp;2g &nbsp;(H<sup>3/2</sup>)", "correct": false},
				{"option": "3/2C<sub>d</sub>&radic;&nbsp;2g &nbsp;(H<sup>3/2</sup>)", "correct": true},
				{"option": "2/3C<sub>d</sub>&radic;&nbsp;2g &nbsp;(H<sup>5/2</sup>)",  "correct": false},
				{"option": "5/2C<sub>d</sub>&radic;&nbsp;2g &nbsp;", "correct": false} // no comma here
            ],
                       "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: 3/2c<sub>d</sub>&radic;&nbsp;2g &nbsp;(H<sup>3/2</sup>)</p>" // no comma here
        }
		
        
      // no comma here
    ]
};
