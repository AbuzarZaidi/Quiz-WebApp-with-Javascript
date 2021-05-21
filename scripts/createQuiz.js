let createQuizBtn = document.getElementById("createQuizBtn");
let createQuizInformation = document.getElementById("createQuizInformation");
let createQuizQuestion=document.getElementById('createQuizQuestion');
let showQuestionBtn = "";
let createdQuizData = [];
//on click create quiz button
createQuizBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("createQuiz.js");
  document.getElementById("starter").style.display = "none";
  showQuizInformation();
  quizQuestion();
  
});
// function for quiz info
const showQuizInformation = () => {
  createQuizInformation.innerHTML = `<div class="container w-50 p-3" id="quizInfo">
    <h1>Create Quiz</h1>
    <hr>
    <form>
        <div class="mb-3 ">
            <h5>Quiz Title</h5>
            <input type="text" class="form-control" id="quizTitle" placeholder="Untitled">
          </div>
          <div class="mb-3 ">
         
            <h5>Quiz Title</h5> 
            <input type="text" class="form-control" id="quizDescription" placeholder="Untitled">
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
const quizQuestion=()=>{
    showQuestionBtn.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("show Question");
        document.getElementById("createQuizInformation").style.display = "none";
        collectInfo();
        console.log(createdQuizData);
      });
}

// const showQuizQuestion=()=>{

// }