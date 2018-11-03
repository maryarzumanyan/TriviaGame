// UI Part
window.onload = function() {
    $("#timer").css({display: "none"});
    $("#done").css({display: "none"});

    $("#btn-start").on("click", function(){
        $(this).hide();
        updateUI();
       
        $("#timer").css({display: "block"});
        //////  create timer
        var timeleft = 31;
        var downloadTimer = setInterval(function(){
            timeleft--;
            $("#countdowntimer").text(timeleft);
            if(timeleft <= 0)
            {
                clearInterval(downloadTimer);
                gameOver();
            }            
        },1000); 
    });

    $("#container").on("click", "button.btn-lg", function() {
        $(this).hide();
        gameOver();
    })
}

function addQuestion(rowNum, quest, opt1, opt2, opt3) {

    var questRow = $("<div id='question-1' class='row'>");
    var question = $("<div class='col-12'><h4 style='text-align: center;'>" + quest + "</h1></div>");
    var options = $("<div class='col-12' style='text-align: center;'>");
    var idOpt1 = "radio_1_" + rowNum;
    var idOpt2 = "radio_2_" + rowNum;
    var idOpt3 = "radio_3_" + rowNum;

    var radio1 = $("<div class='custom-control custom-radio custom-control-inline'><input type='radio' id='" + idOpt1 + "' name='line" + rowNum 
        + "' value='" + opt1 + "' class='custom-control-input'><label class='custom-control-label' for='" + idOpt1 + "'>" + opt1 + "</label></div>");
    var radio2 = $("<div class='custom-control custom-radio custom-control-inline'><input type='radio' id='" + idOpt2 + "' name='line" + rowNum 
        + "' value='" + opt2 + "' class='custom-control-input'><label class='custom-control-label' for='" + idOpt2 + "'>" + opt2 + "</label></div>");
    var radio3 = $("<div class='custom-control custom-radio custom-control-inline'><input type='radio' id='" + idOpt3 + "' name='line" + rowNum 
        + "' value='" + opt3 + "' class='custom-control-input'><label class='custom-control-label' for='" + idOpt3 + "'>" + opt3 + "</label></div>");

    options.append(radio1, radio2, radio3);    
    questRow.append(question, options);
    $("#container").append(questRow);
}

function updateUI()
{
    for(var i = 0; i < trivia.questions.length; ++ i)
    {
        addQuestion(i, trivia.questions[i].statement, trivia.questions[i].option1, trivia.questions[i].option2, trivia.questions[i].option3);
    }
    var done = $("<div class='row'><div class='col-12' style='text-align: center;'><button id='btn-done' type='button' class='btn-lg'>Done</button></div></div>");
    $("#container").append(done);
}

function gameOver()
{
    for(var i = 0; i < trivia.questions.length; ++ i)
    {
        trivia.setAnswer(i, $("input[name='line"+ i +"']:checked").val() )
    }
    
    $("#correct").text(trivia.correctAnswers);
    $("#incorrect").text(trivia.incorrectAnswers);
    $("#unanswered").text(trivia.unanswered);
    $("#timer").css({display: "none"});
    $("#container").css({display: "none"});
    $("#done").css({display: "block"});

}

// Model
function Question( statement, option1, option2, option3, answer ){
     this.statement = statement;
     this.option1 = option1;
     this.option2 = option2;
     this.option3 = option3;
     this.answer = answer;
}

var trivia =
{
    questions : [
        new Question("Which of these birds is extinct?", "Peregrine Falcon", "California Condor", "King Island Emu", "King Island Emu"),
        new Question("At what age does a bold eagle's head turn white?", "4 to 5 months", "4 to 5 years", "4 to 5 days", "4 to 5 years"),
        new Question("How many mediumsized trees give off enough oxigen for one human?", "10", "1", "100", "10"),
        new Question("What does SCUBA stand for?", "Self-Containd Underwater Breathing Apparatus", "Self-Containd Underwater Breathing Air", "Stuff Caught Under Bridge Area", "Self-Containd Underwater Breathing Apparatus"),
        new Question("Which of these animals is all white with a black-tipped tail in the winter?", "otter", "mink", "weasel", "mink"),
        new Question("Which turtle is the largest?", "painted turtle", "alligator snapper", "box rurtle", "alligator snapper"),
        new Question("What is the least painful way to remove a leach from your body?", "sugar", "salt", "pliers", "salt"),
        new Question("Where is the Smithsonian National Zoo?", "Washington D.C.", "New York", "Los Angeles", "Washington D.C."),
        new Question("What kind of tree is used to make a baseball bat?", "birch", "ash", "oak", "ash"),
        new Question("What is the number one thing that chipping sparrows use to build their nest?", "small twigs", "horse hair", "dried grass", "horse hair"),       
    ],

    correctAnswers : 0,
    incorrectAnswers : 0,
    unanswered : 10,


    setAnswer : function(qNum, answer) {
        if (answer === undefined) {
            return;
        } else if (this.questions[qNum].answer === answer)
        {
            this.correctAnswers ++;
        } else {
            this.incorrectAnswers ++;
        }

        this.unanswered --;
    }

}
