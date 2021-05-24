let startQuizBtn= document.getElementById('startQuizBtn');
let startQuizQuestion=document.getElementById('startQuizQuestion');
let inputId="";
let inputPassword="";
let nextQuestion="";
let quiz="";
let incre=1;
let quizArray=localStorage.getItem("quizArray");
if(quizArray==null){
    notesObj=[];
}
else{
    quiz=JSON.parse(quizArray);
}
startQuizBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log('startQuiz.js');
     document.getElementById('starter').style.display = 'none';
     checkCredentials();
     inputData();
     
     console.log(quiz);
     
})

//use to check id and password
const checkCredentials=()=>{
    let div=document.createElement('div');
    div.setAttribute('id','credentials');
    div.setAttribute('class',' container w-25 p-3')
    //h2
    let h2=document.createElement('h2');
    h2.innerText='Start Quiz:';
   // h2.setAttribute('class',' container w-25 p-3');

    //id
    let div1=document.createElement('div');
    div1.setAttribute('class','mb-3');
    let label1=document.createElement('label');
    label1.setAttribute('class','form-label')
    label1.innerText='ID';
    let input1=document.createElement('input');
    input1.setAttribute('type','text');
    input1.setAttribute('class','form-control');
    input1.setAttribute('id','idCheck');
    div1.appendChild(label1);
    div1.appendChild(input1);
    //password
    let div2=document.createElement('div');
    div2.setAttribute('class','mb-3');
    let label2=document.createElement('label');
    label2.setAttribute('class','form-label')
    label2.innerText='Password';
    let input2=document.createElement('input');
    input2.setAttribute('type','text');
    input2.setAttribute('class','form-control');
    input2.setAttribute('id','passwordCheck');
    div2.appendChild(label2);
    div2.appendChild(input2);
    div.appendChild(h2);
    div.appendChild(div1);
    div.appendChild(div2);
    //button
    let button=document.createElement('button')
    button.innerText='Submit';
    button.setAttribute('id','submitBtn');
    button.setAttribute('class','btn btn-primary');
    div.appendChild(button);
    // document.body.appendChild(h2);
    document.getElementById("startQuizCredentials").appendChild(div);
}
const inputData=()=>{
let submitBtn=document.getElementById('submitBtn');
submitBtn.addEventListener('click',(e)=>{
    document.getElementById('credentials').style.display = 'none';
     inputId=document.getElementById('idCheck').value;
    inputPassword=document.getElementById('passwordCheck').value;
    console.log(inputId,inputPassword);
showQuestion();

nextQuestionFunc();
// if(singleQuizArray[0].quizId==inputId && singleQuizArray[0].quizPassword==inputPassword)
// {
    
// }
// else{
//     console.log('wrong entry');
    
// }
// ${singleQuizArray[i].ques}
})
}
const showQuestion=()=>{
    startQuizQuestion.innerHTML="";
    document.getElementById('starter').style.display = 'none';
    startQuizQuestion.innerHTML+=`<div class="card " style="width: 50rem;">
    <div class="card-body" >
      <h6 class="card-title">${incre})${singleQuizArray[incre].ques}</h6>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
        <label class="form-check-label" for="flexRadioDefault1">
          ${singleQuizArray[incre].a}
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
        <label class="form-check-label" for="flexRadioDefault2">
        ${singleQuizArray[incre].b}
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
        <label class="form-check-label" for="flexRadioDefault2">
        ${singleQuizArray[incre].c}
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
        <label class="form-check-label" for="flexRadioDefault2">
       ${singleQuizArray[incre].d}
        </label>
      </div>
      <button  type="submit" class="btn btn-primary" id="nextQuestion">Next</button>
    </div>

  </div>`

   nextQuestion=document.getElementById('nextQuestion');
  console.log(nextQuestion);
 
  incre++;
}

// singleQuizArray
const nextQuestionFunc=()=>{
    nextQuestion.addEventListener('click',(e)=>{
        if(incre<singleQuizArray.length)
        {
            showQuestion();
            nextQuestionFunc();
        }
        
else{
    console.log('not working');
    
}
        
       
    })
}
        //startQuizQuestion.innerHTML="";
       
     //   console.log(incre);
        
        
        
  
