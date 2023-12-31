const quizDB = [
    {
       Question:"Q1: CPU fetches the instruction from memory according to the value of ____________",
       a: "program counter",
       b: "status register",
       c: "instruction register",
       d: "program status word",
       ans: "ans1"
    },
    {
        Question:"Q2: A memory buffer used to accommodate a speed differential is called ____________",
       a: "stack pointer",
       b: "cache",
       c: "accumulator",
       d: "disk buffer",
       ans: "ans2"
    },
    {
        Question:"Q3: Which one of the following is the address generated by CPU?",
        a: "physical address",
        b: "absolute address",
        c: "logical address",
        d: "none of the mentioned",
        ans: "ans3"
    },
    {
        Question:"Q4: Run time mapping from virtual to physical address is done by ____________",
        a: "Memory management unit",
        b: "CPU",
        c: "PCI",
        d: "None of the mentioned",
        ans: "ans1"
    },
    {
        Question:"Q5: Memory management technique in which system stores and retrieves data from secondary storage for use in main memory is called?",
        a: "fragmentation",
        b: "paging",
        c: "mapping",
        d: "none of the mentioned",
        ans: "ans2"
    },
    {
        Question:"Q6: The address of a page table in memory is pointed by ____________",
        a: "stack pointer",
        b: "page table base register",
        c: "page register",
        d: "program counter",
        ans: "ans2"
    },
    {
        Question:"Q7:Program always deals with ____________",
        a: "logical address",
        b: "absolute address",
        c: "physical address",
        d: "relative address",
        ans: "ans1"
    },
    {
        Question:"Q8: The page table contains ____________",
        a: "base address of each page in physical memory",
        b: "page offset",
        c: "page size",
        d: "none of the mentioned",
        ans: "ans1"
    },
    {
        Question:"Q9: What is compaction?",
        a: "a technique for overcoming internal fragmentation",
        b: "a paging technique",
        c: "a technique for overcoming external fragmentation",
        d: "a technique for overcoming fatal error",
        ans: "ans3"
    },
    {
        Question:"Q10:  Operating System maintains the page table for ____________",
        a: "each process.",
        b: "each thread",
        c: "each instruction",
        d: "each address",
        ans: "ans1"
    }
];

const Question = document.querySelector('.Question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers =document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');
let questionCount = 0;
let score = 0;

const loadquestion =() => {
    const questionList = quizDB[questionCount]
    Question.innerText = questionList.Question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}  

loadquestion(); 
const getCheckAnswer = () => {
    let answer;
      answers.forEach((curAnsElem) => {
          if(curAnsElem.checked){
              answer = curAnsElem.id;
          }
      });
      return answer;
};
const deselectAll= () =>{
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}
submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer(); 
    console.log(checkedAnswer);

    if(checkedAnswer == quizDB[questionCount].ans){
        score++;
    };
    questionCount++;
    deselectAll();
    if(questionCount < quizDB.length){
        loadquestion(); 
    }
    else{
        showScore.innerHTML = `
        <h3> You Scored ${score}/${quizDB.length} ✌️ </h3>
        <button class="btn" onclick="location.reload()">Try Again </button>
        `;
        showScore.classList.remove('scoreArea');
    }
});