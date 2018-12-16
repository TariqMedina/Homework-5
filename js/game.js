$(document).ready(function() {

var questions = [];


var questionNumber = Math.floor((Math.random() * questions.length));
var intervalId;
var counter=30;
var totalQuestions=0;
var correct=0;
var wrong=0;
$("#QuestionNumber").text("Question #: " + totalQuestions);
$("#Correctanswers").text("Correct # : " + correct)
$("#WrongAnswers").text("Wrong #     : " + wrong);
var animal = ["buffalo", "elephant", "giraffe", "tiger", "zebra"];
var resetbutton=$("<button>");
var result=$("<p>");

$(".answers").on("click", function() {
    if ($(this).data("index")===questions[questionNumber].Correct) {
        
        $(this).animate({backgroundColor: 'green'}, "slow");
        correct++;
        clearInterval(intervalId);
        $("#Correctanswers").text("Correct # : " + correct)
        $("#explain").text("Correct: " + questions[questionNumber].Explain);
        $("#explain").fadeIn();
        $("#mask").show();
        setTimeout(Timeout, 3000);
        

    }
    else {
       $("#a"+(1+questions[questionNumber].Correct)).animate({backgroundColor: 'green'}, "slow");
       $(this).animate({backgroundColor: 'red'}, "slow");
       wrong++;
       clearInterval(intervalId);
       $("#WrongAnswers").text("Wrong #     : " + wrong);
       $("#explain").text("Incorrect: " + questions[questionNumber].Explain);
       $("#explain").fadeIn();
       $("#mask").show();
       setTimeout(Timeout, 3000);
       
    }
    console.log(totalQuestions);
});

var Timeout = function() {
    questions.splice(questionNumber,1);
    questionNumber=Math.floor((Math.random() * questions.length));
    $("#a1").css("background-color", "white");
    $("#a2").css("background-color", "white");
    $("#a3").css("background-color", "white");
    $("#a4").css("background-color", "white");
    if(totalQuestions > 10) {
        $("#WrongAnswers").text("Total wrong : " + wrong);
        $("#QuestionNumber").text("");
        $("#Correctanswers").text("Total correct : " + correct);
        $("#Timer").text("");
        $("#explain").fadeIn();

        result.css("font-size","2.7em");
        result.addClass("cabin mx-auto result");
        result.text("Game Over");
        $("#scorer").prepend(result);
        $("")
        resetbutton.addClass("btn button-dark mx-auto reset");
        resetbutton.css("z-index","6")
        resetbutton.text("Restart");
        $("#scorer").append(resetbutton);
        $(".reset").on("click", function() {
            reset();
        })
        //reset();

    } else {
        generateQuestion(questionNumber);
    }
};

function generateQuestion(questionNumber) {
    $("#question").text("Question: " + questions[questionNumber].Question);
    $("#a1").text(questions[questionNumber].Answers[0]);
    $("#a2").text(questions[questionNumber].Answers[1]);
    $("#a3").text(questions[questionNumber].Answers[2]);
    $("#a4").text(questions[questionNumber].Answers[3]);
    $("#QuestionNumber").text("Question #: " + totalQuestions);
    $("#animalImg").attr("src","Images/"+animal[Math.floor((Math.random() * animal.length))]+".jpg");
    $("#mask").hide();
    totalQuestions++;
    $("#explain").hide();
    clearInterval(intervalId);
    counterstart();
}

var counterstart = function (){
    counter=25;
    $("#Timer").text("Time remaining: "+counter);
    intervalId = setInterval(function(){
        counter--;
        if (counter<1) {
            clearInterval(intervalId);
            $("#a"+(1+questions[questionNumber].Correct)).animate({backgroundColor: 'green'}, "slow");
            wrong++;
            $("#WrongAnswers").text("Wrong #     : " + wrong);
            $("#explain").text("Incorrect: " + questions[questionNumber].Explain);
            $("#explain").fadeIn();
            $("#mask").show();
            setTimeout(Timeout, 3000);
            
        }
        $("#Timer").text("Time remaining: "+counter);
    }, 1000);

    console.log(counter);
}

var reset = function (){
    questions = [
        {
            Question: "What type of animal is a seahorse?",
            Answers: ["A) Crustacean", "B) Arachnid", "C) Fish", "D) Shell"],
            Correct: 0,
            Explain: "The seahorse is a bony fish with their bones on the outside of its body."
        },
        {
            Question: "Which of the following dogs is the smallest?",
            Answers: ["A) Dachshund", "B) Poodle", "C) Pomeranian", "D) Chihuahua"],
            Correct: 3,
            Explain: "The smallest dog breed belongs to the chihuhua, who cannot weigh more than six pounds according to the American Kennel Club."
        },
        {
            Question: "What color are zebras?",
            Answers: ["A) White with black stripes.", "B) Black with white stripes.", "C) Both of the above.", "D) None of the above."],
            Correct: 1,
            Explain: "Zebras have a black base with white stripes."
        },
        {
            Question: "What existing bird has the largest wingspan?",
            Answers: ["A) Stork", "B) Swan", "C) Condor", "D) Albatross"],
            Correct: 3,
            Explain: "The wandering albatross has a wingspan that ranges from 8 to 11.5 feet."
        },
        {
            Question: "What is the biggest animal that has ever lived?",
            Answers: ["A) Blue whale", "B) African elephant", "C) Apatosaurus (aka brontosaurus)", "D) Spinosaurus"],
            Correct: 0,
            Explain: "The blue whale is the largest animal to have lived, with recorded lengths up to 100 feet. Their average length is about 70 to 90 feet (three school buses), with an average weight of 100 to 150 tons."
        },
        {
            Question: "What pets do more families own?",
            Answers: ["A) Birds", "B) Cats", "C) Dogs", "D) Horses"],
            Correct: 1,
            Explain: "As of 2017, there are about 94.2 million pet cats in the US compared to 89.7 million pet dogs. There are also 20.3 million pet birds and 7.6 million pet horses."
        },
        {
            Question: "What animal lives the longest?",
            Answers: ["A) Ocean quahog (clam)", "B) Red sea urchin", "C) Galapagos tortois", "D) Rougheye rockfish"],
            Correct: 0,
            Explain: "The ocean quahog lives up to 400 years versus the Galapagos tortoise that lives only 177 years."
        },
        {
            Question: "What are female elephants called?",
            Answers: ["A) Mares", "B) Sows", "C) Cows", "D) Dams"],
            Correct: 2,
            Explain: "Female elephants are called cows. Males are called bulls. And the babies are called calves."
        },
        {
            Question: "Which of the following animals sleep standing up?",
            Answers: ["A) Gorillas", "B) Flamingos", "C) Camels", "D) Ravens"],
            Correct: 1,
            Explain: "Flamingos sleep standing up because the salt flats they live on are too caustic to sit down in."
        },
        {
            Question: "What is the fastest water animal?",
            Answers: ["A) Porpoise", "B) Sailfish", "C) Flying fish", "D) Tuna"],
            Correct: 1,
            Explain: "B: The sailfish is the fastest water animal, reaching speed up to 68 miles per hour."
        }
        ];
        resetbutton.remove();
        
        correct=0;
        wrong=0;
        $("#Correctanswers").text("Correct # : " + correct)
        $("#WrongAnswers").text("Wrong #     : " + wrong);
        result.remove();
        totalQuestions=1;
        generateQuestion(questionNumber);
}

reset();
});

