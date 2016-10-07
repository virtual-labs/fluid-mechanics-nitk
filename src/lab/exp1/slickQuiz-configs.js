
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
            "q": "In V-notch the flow area decreases as H _______",
            "a": [
                {"option": "Decreases",      "correct": false},
                {"option": "Increases",      "correct": true},
                {"option": "Remains same",      "correct": false},		// no comma here
				{"option": "None of the above",      "correct": false}   
			],
			"correct": "<p><span>Right answer</span></p>",
			"incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Increases</p>" // no comma here
        },
         { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "A right angled V-notch having a depth of water at V-notch as 200mm, calculate the discharge over the notch in liters per minute. Assume coefficient of discharge as 0.62",
            "a": [
                {"option": "1560 liters/min",               "correct": true},
                {"option": "26 liters/min",  			 "correct": false},
				{"option": "1320 liters/min",               "correct": false},
				{"option": "30 liters/min", "correct": false} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: 1560 liters/min</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "When &theta;= 90<sup>o</sup> and c<sub>d</sub>= 0.6 for triangular notch, the total discharge can be written as ",
            "a": [
                {"option": "1.417H<sup>3/2</sup>",  "correct": false},
                {"option": "14.17H<sup>3/2</sup>",  "correct": false},
                {"option": "1.417H<sup>3/2</sup>",  "correct": false},		
                {"option": "14.17H<sup>5/2</sup>",  "correct": true} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: 14.17H<sup>5/2</sup> </p>" // no comma here
        },
         
		{ // Question 4 - Multiple Choice, Multiple True Answers, Select Any
            "q": "V-notch is a type of sharp edged weir.(Say true or false)",
            "a": [
                {"option": "True", "correct": true},
				{"option": "False", "correct": false} // no comma here
            ],
                    "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: True</p>" // no comma here
        },
		{ // Question 5 - Multiple Choice, Multiple True Answers, Select Any
            "q": "An error of 1% in measuring the head of water over the crest of a triangular notch, produces an error in the discharge which is equal to",
            "a": [
                {"option": "1.5%", "correct": false},
				{"option": "2% ", "correct": false},
				{"option": "1.25% ",  "correct": false},
				{"option": "2.5%", "correct": true} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: 2.5%</p>" // no comma here
        }
		
        
      // no comma here
    ]
};
