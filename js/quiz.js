//Defining The questions

var questions = [
	{
		"question" : "The biggest selling music single of all time is?",
		"ans1" : "Imagine",
		"ans2" : "Candle in the wind",
		"ans3" : "Yesterday",
		"ans4" : "Good vibrations",
		"correctAnswer" : "2"
	},{
		"question" : "Miley Cyrus' dad is a superstar in his own right, specializing in which type of music?",
		"ans1" : "Rock",
		"ans2" : "Jazz",
		"ans3" : "Country",
		"ans4" : "Classical",
		"correctAnswer" : "3"
	},{
		"question" : "The musical group 3T are all relatives of which legendary pop musician?",
		"ans1" : "Michael Jackson",
		"ans2" : "Madonna",
		"ans3" : "Bob Dylon",
		"ans4" : "Beyonce",
		"correctAnswer" : "1"
	},{
		"question" : "Lady Gaga derived her stage name from a song performed by which legendary band?",
		"ans1" : "The beatles",
		"ans2" : "Coldplay",
		"ans3" : "The eagles",
		"ans4" : "Queen",
		"correctAnswer" : "4"
	},{
		"question" : "Who was the first female singer to be inducted into the Rock and Roll Hall of Fame?",
		"ans1" : "Aretha Franklin",
		"ans2" : "Madonna",
		"ans3" : "Whitney Houston",
		"ans4" : "Celine Dion",
		"correctAnswer" : "1"
	},{
		"question" : "What was Elvis Presley's first hit in 1956?",
		"ans1" : "Jailhouse rock",
		"ans2" : "Heartbreak hotel",
		"ans3" : "Always on my mind",
		"ans4" : "Love me tender",
		"correctAnswer" : "2"
	},{
		"question" : "Rivers of Babylon is a hit song sung by which outstanding musical group?",
		"ans1" : "Genesis",
		"ans2" : "The jam",
		"ans3" : "Boney M",
		"ans4" : "Love",
		"correctAnswer" : "3"
	},{
		"question" : "Which rapper is featured on Fifth Harmony's song Worth It?",
		"ans1" : "Eminem",
		"ans2" : "Drake",
		"ans3" : "Kanye West",
		"ans4" : "Kid Ink",
		"correctAnswer" : "4"
	},{
		"question" : "Who was the lead singer of the band Queen?",
		"ans1" : "Freddie Mercury",
		"ans2" : "Jay Z",
		"ans3" : "Chris Brown",
		"ans4" : "Bruno Mars",
		"correctAnswer" : "1"
	},{
		"question" : "Which of the following songstresses was a member of The Mickey Mouse Club early in her career?",
		"ans1" : "Mariah Carey",
		"ans2" : "Britney Spears",
		"ans3" : "Shakira",
		"ans4" : "Janet Jackson",
		"correctAnswer" : "2"
	} ]

//Variable Declaration

var quiz = document.getElementById('quiz');
var questionEl = document.getElementById('question');

var answer1 = document.getElementById('answer1');
var answer2 = document.getElementById('answer2');
var answer3 = document.getElementById('answer3');
var answer4 = document.getElementById('answer4');

var nextQ = document.getElementById('nextQ');
var resultCont = document.getElementById('result');

var currentQuestion = 0;
var totQuestions = questions.length;

//Reading the Questions
function loadQuestion(questionIndex){
	
	var q = questions[questionIndex];
	questionEl.textContent = (questionIndex + 1)+' . '+q.question;
	answer1.textContent = q.ans1;
	answer2.textContent = q.ans2;
	answer3.textContent = q.ans3;
	answer4.textContent = q.ans4;
};

var marks = 0;
var score = 0;

//Next Question button function
function nextQuestion(){
	var selectedOption = document.querySelector('input[type=radio]:checked');
	
	if(!selectedOption){					//Error handling
		alert('Please select a answer to continue');
		return;
	}
//var array_answers =[];
	var selectedAnswer = selectedOption.value; //Getting the selected value
	
	//To check if the user's answer is correct
	if(questions[currentQuestion].correctAnswer == selectedAnswer){ 
		//array_answers.push(selectedOption.value);
		marks += 2;
		score +=1;
	}else
	{
		selectedOption.checked = false;
		//array_answers.push(selectedOption.value);
		marks-=1;
	}
	currentQuestion+=1;
	
	
	if(currentQuestion == totQuestions - 1){
		nextQ.textContent = 'Submit';
	}
	
	if(marks <0)					//If the marks is less than 0 it will be initialise the marks to 0 
	{
	marks = 0;
	};
	
	if(currentQuestion == totQuestions){			//To check if all the questions are answered
		
		var timeSpend = 90 - time;
		//var text = "";
		//var i;
		
		clearInterval(counter);				//To stop the timer if the total questions are answered
		{
		document.getElementById("timer").innerHTML = "";
		};
		
		quiz.style.display = 'none';
		resultCont.style.display = '';
		
		resultCont.textContent = " You took "+ timeSpend+" seconds to complete the quiz. You got "+score+
		"/10 questions correct. Your Score is "+marks; // Question"+text;
		
		//To change the background Color acroding to the marks user has got
		if(marks=>10){			 
			document.body.style.backgroundColor="green";
		}
		if(marks<10){
			document.body.style.backgroundColor="red";
		}
		return;
	}
	
	loadQuestion(currentQuestion);
};
loadQuestion(currentQuestion);

var time=90;							//Initialising the time to 90

var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

function timer()
{	

//Counting down the time
	time=time-1;
	if (time <= 0)
	{
	var timeSpend = 90 - time;
	
/*To auto submit when the timer has timed out*/
    clearInterval(counter);
	document.getElementById("timer").innerHTML = "Timer Expired";
	document.getElementById("timer").innerHTML = "";
	 
/*To display the scores and the time spend*/
    quiz.style.display = 'none';
	resultCont.style.display = '';
	resultCont.textContent = "You couldn't complete the quiz in time. You got "+score+
											"/10 questions correct. Your score "+marks;
		
/*To change the color acroding to the marks*/
		if(marks=>10)
		{
			document.body.style.backgroundColor="green";
		}
		if(marks<10)
		{
			document.body.style.backgroundColor="red";
		}
     
     return;
  }
document.getElementById("timer").innerHTML="You have " + time + " seconds"; 
}

