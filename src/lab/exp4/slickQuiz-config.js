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
            "q": "The head loss caused in a straight pipe is  ",
            "a": [
                {"option": "Minor loss ",      "correct": false},
                {"option": "No loss",     "correct": false},
                {"option": "Major loss",      "correct": true },
                {"option": "None of these",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: Major loss</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "The loss in friction caused due to the bend, couplings, valves are",
            "a": [
                {"option": "Major loss",	 "correct": false},
				{"option": "Minor loss ",	 "correct": true},
				{"option": "No loss",	 "correct": false},				
                {"option": "None of these", 		"correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: Minor loss</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "General formula used to calculate friction loss is ",
             "a": [
                {"option": "Hazen Williams",           "correct": false},
				{"option": "Bernoulli's Equation",           "correct": false},
				{"option": "All the above",           "correct": false},
                {"option": "Darcy-Weisbach ",          "correct": true} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans:  Darcy-Weisbach</p>" // no comma here
        },
		 { // Question 4 - Multiple Choice, Multiple True Answers, Select Any
            "q": "If the equivalent length of a 90&deg; elbow is greater than the 45&deg; elbow, the pressure loss across the 90&deg; elbow is ________ the 45&deg; elbow.",
            "a": [
                {"option": "Greater than",	 "correct": true},
				{"option": "Lesser than",	 "correct": false},
				{"option": "Same as",	 "correct": false},				
                {"option": "None of these", 		"correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: Greater than </p>" // no comma here
        },
		{ // Question 5 - Multiple Choice, Multiple True Answers, Select Any
            "q": "For hydraulically smooth pipe, the resistance to flow depends only on the?",
            "a": [
                {"option": "Relative roughness",	 "correct": false},
				{"option": "Absolute roughness",	 "correct": false},
				{"option": "Reynolds number",	 "correct": false},				
                {"option": "Relative roughness and Reynolds number ", 		"correct": true} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: Relative roughness and Reynolds number </p>" // no comma here
        }
		
   // no comma here
    ]
};
