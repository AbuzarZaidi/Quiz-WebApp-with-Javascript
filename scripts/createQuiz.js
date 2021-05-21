let createQuizBtn = document.getElementById("createQuizBtn");
let createQuizInformation = document.getElementById("createQuizInformation");
let createQuizQuestion = document.getElementById("createQuizQuestion");
let showQuestionBtn = "";
let createdQuizData = [];
let addQuestionBtn="";
let quizCreatedBtn="";
//on click create quiz button
let i=0;
createQuizBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("createQuiz.js",i);
  i++
  document.getElementById("starter").style.display = "none";
  showQuizInformation();
  quizQuestion();
});

// function for quiz info
const showQuizInformation = () => {
  document.getElementById("createQuizInformation").style.display = "block";
  createQuizInformation.innerHTML = `<div class="container w-50 p-3" id="quizInfo">
    <h1>Create Quiz</h1>
    <hr>
    <form>
        <div class="mb-3 ">
            <h5>Quiz Title</h5>
            <input type="text" class="form-control" id="quizTitle" placeholder="Untitled">
          </div>

          <div class="mb-3 ">
            <h5>Quiz Description</h5> 
          <textarea class="form-control" id="quizDescription" placeholder="Add Description" rows="3"></textarea>
          </div>

        <div class="mb-3">
           <h5>Quiz ID</h5> 
          <input type="text" class="form-control" id="quizId" placeholder="Add id for Quiz">
        </div>

        <div class="mb-3">
          <h5>Password</h5>
          <input type="text" class="form-control" id="quizPassword" placeholder="Add password">
        </div>

        <button type="submit" class="btn btn-primary"   id="showQuestionBtn">Next</button>
      </form>
</div>
    `;
  showQuestionBtn = document.getElementById("showQuestionBtn");
};

//add info to array
const collectInfo = () => {
  let quizTitle = document.getElementById("quizTitle").value;
  let quizDescription = document.getElementById("quizDescription").value;
  let quizId = document.getElementById("quizId").value;
  let quizPassword = document.getElementById("quizPassword").value;
  let infoObj = {
    quizTitle,
    quizDescription,
    quizId,
    quizPassword,
  };
  createdQuizData.push(infoObj);
};
// on click next button
const quizQuestion = () => {
  showQuestionBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("show Question");
    document.getElementById("createQuizInformation").style.display = "none";
    collectInfo();
    console.log(createdQuizData);
    showQuizQuestion();
    console.log(quizCreatedBtn,addQuestionBtn);
    quizCreatedsuccessfully();
  });
};

const showQuizQuestion=()=>{
  document.getElementById("createQuizQuestion").style.display = "block";
  createQuizQuestion.innerHTML=` <div class="container my-5 w-50 p-3">

  <h1>Questions-</h1>
<br>
<button  class="btn btn-primary btn-lg"  id="quizCreatedBtn">Done   </button>
<button  class="btn btn-secondary btn-lg " id="addQuestionBtn">Add Question</button>
<hr>
<br>
    <div class="input-group input-group-lg">
      <span class="input-group-text" id="inputGroup-sizing-lg">1)</span>
      <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder="Question">
    </div>


<div class="input-group input-group-sm mb-3 my-3">
<span class="input-group-text" id="inputGroup-sizing-sm">a)</span>
<input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="option a">
</div>
<div class="input-group input-group-sm mb-3">
<span class="input-group-text" id="inputGroup-sizing-sm">b)</span>
<input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"placeholder="option b">
</div>
<div class="input-group input-group-sm mb-3">
<span class="input-group-text" id="inputGroup-sizing-sm">c)</span>
<input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"placeholder="option c">
</div>
<div class="input-group input-group-sm mb-3">
<span class="input-group-text" id="inputGroup-sizing-sm">d)</span>
<input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
placeholder="option d">
</div>
</div>`
addQuestionBtn=document.getElementById('addQuestionBtn');
quizCreatedBtn=document.getElementById('quizCreatedBtn');

}

const quizCreatedsuccessfully=(e)=>{
  quizCreatedBtn.addEventListener("click",(e)=>{
    console.log('done');
    document.getElementById("createQuizQuestion").style.display = "none";
   document.getElementById("starter").style.display = "block";
  })
}