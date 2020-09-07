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
            "q": "Coefficient of discharge vary with the following factors",
            "a": [
                {"option": "Type of orifice",      "correct": false},
                {"option": "Pipe size",     "correct": false},
                {"option": "Reynolds number",      "correct": false },
                {"option": "All the above",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: All the above</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "The velocity of discharge of a fluid through an venturi meter is associated most closely with",
            "a": [
                {"option": "Torricelli",	 "correct": false},
				{"option": "Bernoulli",	 "correct": true},
				{"option": "Eulers principle ",	 "correct": false},				
                {"option": "Archimedes", 		"correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: Bernoulli</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "The vena-contracta is the point of",
             "a": [
                {"option": "Maximum convergence",           "correct": true},
				{"option": "Maximum expansion",           "correct": false},
				{"option": "Maximum flow",           "correct": false},
                {"option": "None of the above",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans:  Maximum convergence</p>" // no comma here
        },
		 { // Question 4 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Choose the correct answer",
            "a": [
                {"option": "Head loss across venturimeter is high",	 "correct": false},
				{"option": "Head loss across orificemeter is low",	 "correct": false},
				{"option": "All the above are correct",	 "correct": false},				
                {"option": "All the above are wrong", 		"correct": true} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: All the above are wrong </p>" // no comma here
        },
		{ // Question 5 - Multiple Choice, Multiple True Answers, Select Any
            "q": "The coefficient of discharge for venturi meter will typically be in the following range:",
            "a": [
                {"option": "0.92 to 0.96",	 "correct": false},
				{"option": "0.75 to 0.90",	 "correct": false},
				{"option": "0.60 to 0.65 ",	 "correct": false},				
                {"option": "0.95 to 1.0", 		"correct": true} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: 0.95 to 1.0</p>" // no comma here
        }
		
   // no comma here
    ]
};
