let startQuizBtn = document.getElementById("startQuizBtn");
let startQuizQuestion = document.getElementById("startQuizQuestion");
let inputId = "";
let inputPassword = "";
let nextQuestion = "";
let quiz = "";
let incre = 1;
let correct = 0;
let submitBtn = "";
let backBtn = "";
let count = 0;
let idFound = false;
startQuizBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let quizArray = localStorage.getItem("quizArray");

  if (quizArray == null) {
    multipleQuizArray = [];
  } else {
    multipleQuizData = JSON.parse(quizArray);
   // console.log(multipleQuizData[1][0].quizId);

   // console.log(multipleQuizData);
  }

  console.log("startQuiz.js");
  enterCredentialsFunc();
  submitBtnClickFunc();
});

const enterCredentialsFunc = () => {
  let starter = document.getElementById("starter");
  starter.innerHTML = `<div class="container " id="credentials">
    <div class="mb-3">
        <h3>Enter Credentials</h3>
      <label for="label" class="form-label">ID</label>
      <input type="text" class="form-control" id="userInputId" />
    </div>
    <div class="mb-3">
      <label for="label" class="form-label">Password</label>
      <input type="text" class="form-control" id="userInputPassword" />
    </div>
    <button class="btn btn-primary" id="submitBtn">Submit</button>
  </div>`;
  submitBtn = document.getElementById("submitBtn");
};

const submitBtnClickFunc = () => {
  // console.log(a);
  // submitBtn = document.getElementById("submitBtn");
  //console.log(submitBtn);
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    // console.log("clicked");
    userInputId = document.getElementById("userInputId").value;
    userInputPassword = document.getElementById("userInputPassword").value;
 //   console.log(userInputId, userInputPassword);
    multipleQuizData.forEach((element) => {
      if (
        userInputId == element[0].quizId &&
        userInputPassword == element[0].quizPassword
      ) {
        idFound = true;
        showQuestion();
        return nextQuestionFunc(count);
      }
      count++;
    });
    if (idFound == false) {
      count = 0;
      enterCredentialsFunc();
      submitBtnClickFunc();
    }
  });
};

const showQuestion = () => {
  document.getElementById("startQuizCredentials").style.display = "none";

  starter.innerHTML = `
    <h3 >${multipleQuizData[count][0].quizTitle}</h3>
    <p >${multipleQuizData[count][0].quizDescription}</p>
    `;
  starter.innerHTML += `<div class="card " style="width: 50rem;">

    <div class="card-body" >
      <h6 class="card-title">${incre})${multipleQuizData[count][incre].ques}</h6>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="optionA">
        <label class="form-check-label" for="flexRadioDefault1" id="optionAV">
          ${multipleQuizData[count][incre].a}
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="optionB">
        <label class="form-check-label" for="flexRadioDefault2" id="optionBV">
        ${multipleQuizData[count][incre].b}
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="optionC">
        <label class="form-check-label" for="flexRadioDefault3" id="optionCV">
        ${multipleQuizData[count][incre].c}
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="optionD" >
        <label class="form-check-label" for="flexRadioDefault4" id="optionDV">
       ${multipleQuizData[count][incre].d}
        </label>
      </div>
      <button  type="submit" class="btn btn-primary" id="nextQuestion">Next</button>
    </div>

  </div>`;

  nextQuestion = document.getElementById("nextQuestion");

  incre++;
};
let j = 1;
const nextQuestionFunc = (count) => {
  nextQuestion.addEventListener("click", (e) => {
    let optionA = document.getElementById("optionA");
    let optionB = document.getElementById("optionB");
    let optionC = document.getElementById("optionC");
    let optionD = document.getElementById("optionD");
    let value = "";
    if (optionA.checked) {
      value = document.getElementById("optionAV").innerText;
      // console.log(value);
    } else if (optionB.checked) {
      value = document.getElementById("optionBV").innerText;
      // console.log(value);
    } else if (optionC.checked) {
      value = document.getElementById("optionCV").innerText;
      // console.log(value);
    } else if (optionD.checked) {
      value = document.getElementById("optionDV").innerText;
      // console.log(value);
    }
    // console.log('ans');
    // console.log(multipleQuizData[count][j].ans);
    
    
    if (value == multipleQuizData[count][j].ans) {
      correct++;
    }
    if (incre < multipleQuizData[count].length) {
      j++;
      showQuestion();
      nextQuestionFunc(count);
      
    } else {
      // console.log(correct);
      starter.innerHTML += `<h3> you got ${correct} out of ${incre - 1} <h3>
       <button class="btn btn-success" type="button" id="backBtn">back</button>`;

      backBtn = document.getElementById("backBtn");
      // console.log(backBtn);
      backFunc();
    }
  });
};

const backFunc = () => {
  backBtn.addEventListener("click", (e) => {
    // console.log("click back");
    location.reload();
  });
};
