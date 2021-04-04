
const start_btn = document.getElementById('start-btn');
const next_btn = document.getElementById('next-btn');
const questioncontainer = document.getElementById('question-contaier');
const question_text= document.getElementById('question');
const button_text= document.getElementById('answer_btn')
let shuffledQuestions,currentQuestionIndex
const success = document.getElementById('success');
const failure= document.getElementById('failure');
const start_game = ()=>{
    
    start_btn.classList.add('hide')
    questioncontainer.classList.remove('hide');
    
    shuffledQuestions= questions.sort(()=>Math.random()-.5)
    currentQuestionIndex=0;
    setnextQuesion()
}
start_btn.addEventListener('click',start_game)
function setnextQuesion(){
    reset()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}
next_btn.addEventListener('click',()=>{
    currentQuestionIndex++;
    setnextQuesion()
})
function showQuestion(question){
    question_text.innerText= question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText= answer.text;
        button.classList.add('btn');
        if(answer.correct){
            
            button.dataset.correct= answer.correct
        }
        button.addEventListener('click',selectAnswer)
        button_text.appendChild(button)
        
    });

}
function selectAnswer(e) {
    const selectedButton = e.target;
    correct_answer.forEach(x=>{
        if(selectedButton.innerText===x){
            var v1=document.getElementById('p1').value;
            document.getElementById("p1").value= v1 + 20;
            success.play()
            
            
            
        }

        
    })
    
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(button_text.children).forEach(button => {
      setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length>currentQuestionIndex+1) {
        next_btn.classList.remove('hide')

        
    }else{
    	alert(`votre score est ${document.getElementById("p1").value}/100` )

        start_btn.innerText='Restart';
        start_btn.classList.remove('hide');
        var v1=document.getElementById('p1');
        v1.value='0';


    }
    
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
      element.classList.add('correct')
      
    
    } 
    else {
      element.classList.add('wrong')
      
    }
    
}
 function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}  
function reset(){
    clearStatusClass(document.body)

    next_btn.classList.add('hide')
    while(button_text.firstChild){
        button_text.removeChild(button_text.firstChild)
    }

}

const questions=[
    {
        question :'What is 2+2?',
        answers:[
            {
                text:'4',correct:true
            },
            {
                text:'22',correct:false
            }
        ]
    },
    {
        question :'What is the largest country in the world ?',
        answers:[
            {
                text:'Russia',correct:true
            },
            {
                text:'USA',correct:false
            },
            {
                text:'Canada',correct:false
            },
            {
                text:'China',correct:false
            }
        ]
    },
    {
        question :'Rome was founded in which year?',
        answers:[
            {
                text:'june 753',correct:false
            },
            {
                text:'avril 753',correct:true
            },
            {
                text:'march 752',correct:false
            },
            {
                text:'avril 755',correct:false
            }
        ]
    },
    {
        question :'Most popular programming langauges?',
        answers:[
            {
                text:'Scale',correct:false
            },
            {
                text:'Ruby',correct:false
            },
            {
                text:'C#',correct:false
            },
            {
                text:'Python',correct:true
            }

        ]
    },
    {
        question :'12**2',
        answers:[
            {
                text:'122',correct:false
            },
            {
                text:'111',correct:false
            },
            {
                text:'164',correct:false
            },
            {
                text:'144',correct:true
            }

        ]
    }
]
const correct_answer= ['Python','avril 753','Russia','4','144']
   