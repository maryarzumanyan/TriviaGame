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
        new Question("How many mediumsized trees give off enoughoxigen for one human?", "10", "1", "100", "10"),
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
        if (this.questions[qNum].answer === answer)
        {
            this.correctAnswers ++;
        }
        else
        {
            this.incorrectAnswers ++;
        }
        this.unanswered --;
    }

}

