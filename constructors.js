class Car{
    constructor(make,model,year,isAvailable){

        this.make = make;
        this.model = model;
        this.year = year;
        this.isAvailable = isAvailable;
    }

    toggleAvailability(){
if(this.isAvailable ==1 ){
    console.log('The car is available')
}
else{
    console.log('The car is not available')
}
    }

};


class Rental{
    constructor(car,renterName,rentalStartDate,rentalEndDate){
        this.car = car
        this.renterName = renterName
        this.rentalStartDate = rentalStartDate
        this.rentalEndDate = rentalEndDate
    }

    calculateRentalDuration(){
        console.log(this.rentalEndDate - this.rentalStartDate)
    }
};

const car = new Car("Ford", 'Ranger', 2008, 1);
car.toggleAvailability();
console.log({car});


const car2 = new Rental('Audi','Masai',12,18)
car2.calculateRentalDuration();
console.log({car2});


//Question two
class Question{
    constructor(text,options,correctAnswer){
        this.text=text
        this.options = options
        this.correctAnswer = correctAnswer
    }
    checkAnswer(){
        return userName === this.correctAnswer;
    }
}
const question = new Question(
    "Who is the president of Malawi?",
 ["Jomo Kenyatta","Bingu","Lazarus Chakwera","Uhuru kenyata"],
   "Muluzi"
);
question.checkAnswer();
console.log(question);

class Quiz {
    constructor (questions,currentQuestionIndex,score){
        this.questions = questions;
        this.currentQuestionIndex = currentQuestionIndex;
        this.score = score;
    }
    addQuestion(question) {
        this.questions.push(question)
    }
    nextQuestion(){
        this.currentQuestionIndex++;
    }
    submitAnswer(){
        const currentQuestion = this.questions[this.currentQuestionIndex];
        if(currentQuestion.checkAnswer()){
            this.score++;
        }
    }
   }