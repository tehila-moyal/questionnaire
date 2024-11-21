const answer1btn = document.querySelector("#answer1btn")
const answer2btn = document.querySelector("#answer2btn")
const answer3btn = document.querySelector("#answer3btn")
const answer4btn = document.querySelector("#answer4btn")
const answerlabel = document.querySelectorAll(".answerlabel")
const answerbtn = document.querySelectorAll(".answer")
const endDiv= document.querySelector(".endDiv")

const startbtn = document.querySelector("#startbtn")
const submit = document.querySelector("#submit")
const skip = document.querySelector("#skip")
const qbox = document.querySelector(".qbox")
const scorDiv = document.querySelector(".scorDiv")
const end = document.querySelector("#end")

const Capitabtn = document.querySelector("#Capitabtn")
const foodbtn = document.querySelector("#foodbtn")
const animalbtn = document.querySelector("#animalbtn")
let scor=0;
let questionNum=null
let topicNum=null;
let answerRight=null;

const divEnd=document.querySelector(".divEnd")
const ex=document.querySelector(".ex")


const animalSet = [
    qa1 = {
        
        question: 'Does elephant is frightened by mice?',
        answers: ['Yes','Sometimes', 'Only in the Zoo',  'No'],
        rightAnswer: 0,
        questionImg: './img/elefant.gif',
        answerImg: ''
    },
    qa2 = {
        
        question: 'Which animal has 2 legs?',
        answers: [ 'Spider','Kangaroo','Shark',  'Cat'],
        rightAnswer:1,
        questionImg: '',
        answerImg: ''
    },
    qa3 = {
        
        question: 'Who hunts at night?',
        answers: ['Lion', 'Elefant', 'Lioness',  'Mouse'],
        rightAnswer: 2,
        questionImg: '',
        answerImg: ''
    },
    
];

const foodSet = [
    qf1 = {
        
        question: 'Where was ice cream invented?',
        answers: ['Jamaica','England', 'italy',  'USA'],
        rightAnswer: 1,
        questionImg: '',
        answerImg: ''
    },
    qf2 = {
        
        question: 'What is the most expensive spice in the world when listed by weight?',
        answers: [' Saffrone',' Paprika', ' Vanilla',  ' Clov'],
        rightAnswer: 0,
        questionImg: '',
        answerImg: ''
    },
    qf3 = {
        
        question: 'What is the one food that can never go bad?',
        answers: ['Honey','butter', 'flour',  'sugar'],
        rightAnswer: 0,
        questionImg: '',
        answerImg: ''
    }
];

const CapitalSet = [

 qw1 = {

    question: 'What is the capital of Jamaica',
    answers: ['Kingston','Valletta', 'Port Moresby',  'Canberra'],
    rightAnswer: 0,
    questionImg: '',
    answerImg: ''
},
 qw2 = {

    question: 'What is the capital of Russia',
    answers: [ 'Freetown','Luxembourg', 'Riyadh','Moscow' ],
    rightAnswer:3,
    questionImg: '',
    answerImg: ''
},

 qw3 = {

    question: 'What is the capital of Costa Rica',
    answers: ['Thimphu','San José', 'Funafuti',  'Georgetown'],
    rightAnswer: 1,
    questionImg: '',
    answerImg: ''
}

];
const endSet=[

    qw1 = {
   
       question: 'question',
       answers: ['answer','answer', 'answer',  'answer'],


   }
   
   ];
const topics=[animalSet,foodSet,CapitalSet,endSet];


function chengQuestion() {
    for (let j = 0; j < answerbtn.length; j++) {
       answerbtn[j].checked=false;
    }
    qbox.textContent=topics[topicNum][questionNum].question
    
    
    for (let i = 0; i <topics[topicNum][questionNum].answers.length; i++) {
        answerlabel[i].textContent=topics[topicNum][questionNum].answers[i]
        
    }  

}

function checkAnswer() {
    answerRight=topics[topicNum][questionNum].rightAnswer

    if (answerbtn[answerRight].checked) {
        scor+=5
        scorDiv.textContent= `score: ${scor}`
    }
    
    chengQuestion()

}

function endQwiz() {
    topicNum=3
    questionNum=0
    chengQuestion()
    scorDiv.textContent=`score: ${scor}`
    endDiv.textContent= `you earned  ${scor} points`;
    scor=0
    topicNum=0
    questionNum=0
    divEnd.classList.remove("hide")
    document.body.style.backgroundImage =""
    
}
    

startbtn.addEventListener("click",()=>{
    endDiv.textContent="";
    scor=0
    scorDiv.textContent= `score: ${scor}`
    if (animalbtn.checked) {
        topicNum= 0
        
        document.body.style.backgroundImage = "url('https://takiart.co.il/wp-content/uploads/2018/04/image3_3061_2018-04-12_07-42-31.jpg')";

    } else if ( foodbtn.checked) {
        topicNum= 1
        document.body.style.backgroundImage = "url('https://watermark.lovepik.com/background/20211021/large/lovepik-delicious-colorful-food-texture-background-image_450042229.jpg')";

    } else if (Capitabtn.checked) {
        topicNum= 2
        document.body.style.backgroundImage = "url('https://static.wixstatic.com/media/a4557f_495910a9524c4d02bfbcdcd6145adf1b~mv2.png/v1/fill/w_980,h_708,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/a4557f_495910a9524c4d02bfbcdcd6145adf1b~mv2.png')";

    }
    questionNum=0
    
    chengQuestion()
})

submit.addEventListener("click",()=>{
    checkAnswer()
    questionNum++
    if (questionNum>2) {
        endQwiz()
        
    } else {
        chengQuestion()
    }
    
   
})
end.addEventListener("click",endQwiz)
skip.addEventListener("click",()=>{
    if (questionNum===topics[topicNum].length-1) {
        endQwiz()
    } else {
        questionNum++
        chengQuestion()
    }

} )

ex.addEventListener("click",()=>{
    divEnd.classList.add("hide")
})
