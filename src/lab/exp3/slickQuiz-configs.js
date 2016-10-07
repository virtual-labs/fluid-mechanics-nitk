
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
            "q": "Impact of jet means the force exerted by the ",
            "a": [
                {"option": "Plate on the jet ",      "correct": false},
                {"option": "Jet on the plate",      "correct": true},
                {"option": "Any of the above",      "correct": false},		// no comma here
				{"option": "None of the above",      "correct": false}   
			],
			"correct": "<p><span>Right answer</span></p>",
			"incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Jet on the plate</p>" // no comma here
        },
         { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Mass of water striking the plate per second is &rho;aV.( say true or false)",
            "a": [
                
				{"option": "True",               "correct": true},
				{"option": "False", "correct": false} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: True</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "A jet of water of diameter 75mm,velocity 25m/sec strikes a fixed plate in such a way that the angle between the jet and plate is 60&deg; Find the force exerted by the jet on the plate in direction normal to the plate.",
            "a": [
                {"option": "2391N",  "correct": true},
                {"option": "2350N",  "correct": false},
                {"option": "2530N",  "correct": false},		
                {"option": "2931N",  "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:2391N</p>" // no comma here
        }
		
        
      // no comma here
    ]
};
