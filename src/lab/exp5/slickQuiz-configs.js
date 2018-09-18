
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
            "q": "The velocity profile near the vena-contract will be ",
            "a": [
                {"option": "Parabolic",      "correct": false},
                {"option": "Nearly rectangular",      "correct": true},
                {"option": "Hyperbola",      "correct": false},		// no comma here
				{"option": "Zero",      "correct": false}   
			],
			"correct": "<p><span>Right answer</span></p>",
			"incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Nearly rectangular</p>" // no comma here
        },
         { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "What is the normal range of converging cone of angle of a venturi meter ? ",
            "a": [
                {"option": "15-20", "correct": true},
                {"option": "7-15", "correct": false},
				{"option": "2-5", "correct": false},
				{"option": "25-45", "correct": false} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: 15-20</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "The angle of diverging/converging section has to be kept minimum to",
            "a": [
                {"option": "Give less space for the fluid flow ",  "correct": false},
                {"option": "Avoid fluid separating from the boundary",  "correct": true},
                {"option": "Both the above",  "correct": false},		
                {"option": "None of these",  "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Avoid fluid separating from the boundary</p>" // no comma here
        },
         
		{ // Question 4 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Value of coefficient of discharge of orifice meter is much smaller than the venturimeter.( Say true or false)",
            "a": [
                {"option": "True","correct": true},
				{"option": "False", "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: True</p>" // no comma here
        }
        
      // no comma here
    ]
};
