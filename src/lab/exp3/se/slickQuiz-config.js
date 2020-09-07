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
            "q": "In case of curved vane force on plate is equal to",
            "a": [
                {"option": "Force on flat plate",      "correct": false},
                {"option": "2 x force on flat plate",     "correct": true},
                {"option": "1/2 x force on flat plate",      "correct": false },
                {"option": "4 x force on flat plate",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: 2 x force on flat plate</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "In case of flat vanes the jet deflects at an angle of ",
            "a": [
                {"option": "90&deg;",	 "correct": true},
				{"option": "180&deg;",	 					"correct": false},
				{"option": "45&deg;",	 "correct": false},				
                {"option": "None", 					"correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: 90&deg;</p>" // no comma here
        },
		 { // Question 3 - Multiple Choice, Multiple True Answers, Select Any
            "q": "The horizontal component of the force on a curved surface is equal to",
            "a": [
                {"option": "Force on a vertical projection of the curved surface ",	 "correct": false},
				{"option": "Weight of liquid vertically below the curved surface",	 "correct": false},
				{"option": "Product of pressure at its centroid and the area ",	 "correct": false},				
                {"option": "Weight of liquid retained by the curved area.", 		"correct": true} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: Weight of liquid retained by the curved area.</p>" // no comma here
        },
		 { // Question 4 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Find the force exerted by a jet of water of diameter 75mm on a stationary flat plate, the jet strikes the plate normally with the velocity of 20m/s.",
            "a": [
                {"option": "1767N",	 "correct": true},
				{"option": "1707N",	 "correct": false},
				{"option": "1677N",	 "correct": false},				
                {"option": "1776N", 	 "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: 1767N</p>" // no comma here
        }
		
   // no comma here
    ]
};
