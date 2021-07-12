const quiz= document.getElementsByClassName(".quiz");
const submit=document.getElementById("#submit");
const result=document.getElementById("#results");

const quest=[
    {
        question: "What is 2+2?",
        answers:{
            a: "4",
            b: "5",
            c: "6"
        },
        correct: "c"
    },
    {
        question: "Where is Delhi?",
        answers:{
            a: "Ireland",
            b: "India",
            c: "Australia"
        },
        correct: "b"
    }
]
function buildQuiz(){
    const output = [];
    quest.forEach((currentQues, character)=>{
            const answers=[];
            answers.forEach(letter)
                answers.push(

                )
            
    })
}

function showresult(){
    console.log("hello");
}
console.log(submit);
submit.addEventListener("click", showresult());