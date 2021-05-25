let startQuizBtn = document.getElementById("startQuizBtn");
let startQuizQuestion = document.getElementById("startQuizQuestion");
let inputId = "";
let inputPassword = "";
let nextQuestion = "";
let quiz = "";
let incre = 1;
let correct = 0;
let submitBtn="";
let  backBtn="";
//local storage
// let quizArray = localStorage.getItem("quizArray");
// if (quizArray == null) {
//   notesObj = [];
// } else {
//   quiz = JSON.parse(quizArray);
// }
  startQuizBtn.addEventListener("click", (e) => {

   
    e.preventDefault();
    console.log("startQuiz.js");
    document.getElementById("starter").style.display = "none";
    checkCredentials();
    inputData();

    //console.log(quiz);
  });
let a=0;

//use to check id and password
const checkCredentials = () => {
  console.log(a);
      document.getElementById("startQuizCredentials").style.display = "block";
  let div = document.createElement("div");
  div.setAttribute("id", "credentials");
  div.setAttribute("class", " container w-25 p-3");
  //h2
  let h2 = document.createElement("h2");
  h2.innerText = "Start Quiz:";

  //id
  let div1 = document.createElement("div");
  div1.setAttribute("class", "mb-3");
  let label1 = document.createElement("label");
  label1.setAttribute("class", "form-label");
  label1.innerText = "ID";
  let input1 = document.createElement("input");
  input1.setAttribute("type", "text");
  input1.setAttribute("class", "form-control");
  input1.setAttribute("id", "idCheck");
  div1.appendChild(label1);
  div1.appendChild(input1);
  //password
  let div2 = document.createElement("div");
  div2.setAttribute("class", "mb-3");
  let label2 = document.createElement("label");
  label2.setAttribute("class", "form-label");
  label2.innerText = "Password";
  let input2 = document.createElement("input");
  input2.setAttribute("type", "text");
  input2.setAttribute("class", "form-control");
  input2.setAttribute("id", "passwordCheck");
  div2.appendChild(label2);
  div2.appendChild(input2);
  div.appendChild(h2);
  div.appendChild(div1);
  div.appendChild(div2);
  //button
  let button = document.createElement("button");
  button.innerText = "Submit";
  button.setAttribute("id", "submitBtn");
  button.setAttribute("class", "btn btn-primary");
  div.appendChild(button);
  document.getElementById("startQuizCredentials").appendChild(div);
};
const inputData = () => {
  console.log(a);
  
   submitBtn = document.getElementById("submitBtn");
 
  console.log(submitBtn);
  
  submitBtn.addEventListener("click", (e) => {
  
    
    console.log('clicked');
    func();
    
  });
};
const func=()=>{
  console.log(a);
  a++;
  
    inputId = document.getElementById("idCheck").value;
    inputPassword = document.getElementById("passwordCheck").value;
    console.log(inputId, inputPassword);

    if (
      singleQuizArray[0].quizId == inputId &&
      singleQuizArray[0].quizPassword == inputPassword
    ) {
     // document.getElementById("startQuizCredentials").style.display = "none";
     // document.getElementById("startQuizQuestion").style.display = "block";
      showQuestion();
      nextQuestionFunc();
      
    } else {
      console.log("wrong entry");
      document.getElementById("starter").style.display = "none";
     checkCredentials();
     inputData();
   
    }
}
const showQuestion = () => {
  startQuizQuestion.innerHTML = "";
  document.getElementById("starter").style.display = "none";
  document.getElementById("startQuizCredentials").style.display = "none";
  
 document.getElementById("startQuizQuestion").style.display = "block";
  startQuizQuestion.innerHTML += `
    <h3 >${singleQuizArray[0].quizTitle}</h3>
    <p >${singleQuizArray[0].quizDescription}</p>
    `;
  startQuizQuestion.innerHTML += `<div class="card " style="width: 50rem;">

    <div class="card-body" >
      <h6 class="card-title">${incre})${singleQuizArray[incre].ques}</h6>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="optionA">
        <label class="form-check-label" for="flexRadioDefault1" id="optionAV">
          ${singleQuizArray[incre].a}
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="optionB">
        <label class="form-check-label" for="flexRadioDefault2" id="optionBV">
        ${singleQuizArray[incre].b}
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="optionC">
        <label class="form-check-label" for="flexRadioDefault3" id="optionCV">
        ${singleQuizArray[incre].c}
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="optionD" >
        <label class="form-check-label" for="flexRadioDefault4" id="optionDV">
       ${singleQuizArray[incre].d}
        </label>
      </div>
      <button  type="submit" class="btn btn-primary" id="nextQuestion">Next</button>
    </div>

  </div>`;

  nextQuestion = document.getElementById("nextQuestion");

  incre++;
};
let j = 1;
// singleQuizArray
const nextQuestionFunc = () => {
  nextQuestion.addEventListener("click", (e) => {
    console.log(`Arrayans ${singleQuizArray[j].ans}`);

    let optionA = document.getElementById("optionA");
    let optionB = document.getElementById("optionB");
    let optionC = document.getElementById("optionC");
    let optionD = document.getElementById("optionD");
    let value = "";
    if (optionA.checked) {
      value = document.getElementById("optionAV").innerText;
      console.log(value);
    } else if (optionB.checked) {
      value = document.getElementById("optionBV").innerText;
      console.log(value);
    } else if (optionC.checked) {
      value = document.getElementById("optionCV").innerText;
      console.log(value);
    } else if (optionD.checked) {
      value = document.getElementById("optionDV").innerText;
      console.log(value);
    }
    if (value == singleQuizArray[j].ans) {
      correct++;
    }
    if (incre < singleQuizArray.length) {
      showQuestion();
      nextQuestionFunc();
    } else {
      console.log(correct);
      startQuizQuestion.innerHTML += `<h3> you got ${correct} out of ${
        incre - 1
      } <h3>`;
      startQuizQuestion.innerHTML+=` <button class="btn btn-success" type="button" id="backBtn">back</button>`
       backBtn=document.getElementById('backBtn');
      console.log(backBtn);
      backFunc();
     // startQuizQuestion.innerHTML=` <button class="btn btn-success" type="button" id="backQuizBtn">Back</button>`
       //   document.getElementById("createQuizQuestion").style.display = "none";
    //  document.getElementById("starter").style.display = "block";
     // backButton=document.getElementById('backBtn');
     // console.log(backButton);
    }
    j++;
  });
 
    
};

const backFunc=()=>{
backBtn.addEventListener('click',(e)=>{
  console.log('click back');
  singleQuizArray=[]; // need to un clear later
       document.getElementById("createQuizQuestion").style.display = "none";
       document.getElementById("startQuizQuestion").style.display = "none";
      document.getElementById("starter").style.display = "block";
})
}
