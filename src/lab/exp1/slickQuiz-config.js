// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your Knowledge",
        "main":    "<p></p>",
        "results": "<h5>Learn More</h5><p>study and take quiz</p>",
        "level1":  "Jeopardy Ready",
        "level2":  "Jeopardy Contender",
        "level3":  "Jeopardy Amateur",
        "level4":  "Jeopardy Newb",
		
        "level5":  "Stay in school, kid..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "In a tank or channel, notch is provided to measure ",
            "a": [
                {"option": "Velocity ",      "correct": false},
                {"option": "Pressure",     "correct": false},
                {"option": "Discharge",      "correct": true },
                {"option": "Static energy",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: Discharge</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Most economical section of a triangular channel is",
            "a": [
                {"option": "Isosceles triangle with 45<sup>o</sup> vertex angle",	 "correct": false},
				{"option": "Equilateral triangle",	 					"correct": false},
				{"option": "Right angled triangle with equal sides",	 "correct": true},				
                {"option": "Right angled triangle", 					"correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: Right angled triangle with equal sides</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "The sheet of liquid flowing over a notch is known as nappe (True or false)",
 
            "a": [
                {"option": "False",         "correct": false},
                {"option": "True",          "correct": true} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans:  True</p>" // no comma here
        },
		
		 { // Question 4 - Multiple Choice, Multiple True Answers, Select Any
            "q": "A submerged weir is one in which the water level on the downstream of the weir is ",
            "a": [
                {"option": "Just at the crest level",	 "correct": false},
				{"option": "Below the crest level",	 "correct": false},
				{"option": "Slightly above the crest level",	 "correct": true},				
                {"option": "At the same elevation as the upstream water surface", 		"correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: Slightly above the crest level</p>" // no comma here
        },
		 { // Question 5 - Multiple Choice, Multiple True Answers, Select Any
            "q": "The ratio of the percentage error in the discharge and percentage error in the measurement of head over a triangular notch, is ",
            "a": [
                {"option": "2/5",	 "correct": false},
				{"option": "5/2",	 "correct": true},
				{"option": "3/2",	 "correct": false},				
                {"option": "2/3", 	 "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: 5/2</p>" // no comma here
        }
		
   // no comma here
    ]
};
