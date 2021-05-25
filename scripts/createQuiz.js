let createQuizBtn = document.getElementById("createQuizBtn");
let createQuizInformation = document.getElementById("createQuizInformation");
let createQuizQuestion = document.getElementById("createQuizQuestion");
let showQuestionBtn = "";
let QuizData = [];
let multipleQuizData = [];
let singleQuizArray = [];
let addQuestionBtn = "";
let quizCreatedBtn = "";
// localStorage.clear();
//on click create quiz button
let i = 1;
createQuizBtn.addEventListener("click", (e) => {
  i = 1;
  e.preventDefault();
  console.log("createQuiz.js", i);
  i++;
  document.getElementById("starter").style.display = "none";
  showQuizInformation();
  quizQuestion();
});

// ===========================================---function for quiz info
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

//=========================================---add info to array
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
  singleQuizArray.push(infoObj);
};
// =========================================---on click next button
const quizQuestion = () => {
  showQuestionBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("show Question");
    document.getElementById("createQuizInformation").style.display = "none";
    collectInfo();
    // console.log(createdQuizData);
    showQuizQuestion();
    console.log(quizCreatedBtn, addQuestionBtn);
    addAnotherButton();
    quizCreatedsuccessfully();
  });
};

//=======================================show first quiz question
const showQuizQuestion = () => {
  document.getElementById("createQuizQuestion").style.display = "block";
  createQuizQuestion.innerHTML = ` <div class="container ">

  <h1>Questions-</h1>
<br>
<button  class="btn btn-secondary btn-lg"  id="quizCreatedBtn">Done   </button>
<button  class="btn btn-primary btn-lg " id="addQuestionBtn">Add Question</button>
<hr>
<br>
    <div class="input-group input-group-lg">
      <span class="input-group-text" id="inputGroup-sizing-lg">1)</span>
      <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder="Question" id="1ques">
    </div>
<div class="input-group input-group-sm mb-3 my-3">
<span class="input-group-text" id="inputGroup-sizing-sm">a)</span>
<input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="option a" id="1a">
</div>
<div class="input-group input-group-sm mb-3">
<span class="input-group-text" id="inputGroup-sizing-sm">b)</span>
<input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"placeholder="option b" id="1b">
</div>
<div class="input-group input-group-sm mb-3">
<span class="input-group-text" id="inputGroup-sizing-sm">c)</span>
<input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"placeholder="option c" id="1c">
</div>
<div class="input-group input-group-sm mb-3">
<span class="input-group-text" id="inputGroup-sizing-sm">d)</span>
<input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
placeholder="option d" id="1d">
</div>
<div class="input-group input-group-sm mb-3">
<span class="input-group-text" id="inputGroup-sizing-sm">ans)</span>
<input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
placeholder="answer" id="1ans">
</div>
</div>`;
  addQuestionBtn = document.getElementById("addQuestionBtn");
  quizCreatedBtn = document.getElementById("quizCreatedBtn");
};
// =================================---add question button
const addAnotherButton = () => {
  addQuestionBtn.addEventListener("click", (e) => {
    console.log("donebutton");

    let div = document.createElement("div");
    div.setAttribute("id", `${i}div`);
    let div1 = document.createElement("div");
    div1.setAttribute("class", "input-group input-group-lg");
    let span1 = document.createElement("span");
    span1.setAttribute("class", "input-group-text mb-3");
    span1.innerText = `${i}`;
    let input1 = document.createElement("input");
    input1.setAttribute("type", "text");
    input1.setAttribute("class", "form-control mb-3");
    input1.setAttribute("id", `${i}ques`);
    div1.appendChild(span1);
    div1.appendChild(input1);
    div.appendChild(div1);
    //option1
    let div2 = document.createElement("div");
    div2.setAttribute("class", "input-group input-group-sm mb-3");
    let span2 = document.createElement("span");
    span2.setAttribute("class", "input-group-text");
    span2.innerText = "a)";
    let input2 = document.createElement("input");
    input2.setAttribute("type", "text");
    input2.setAttribute("class", "form-control");
    input2.setAttribute("id", `${i}a`);
    div2.appendChild(span2);
    div2.appendChild(input2);
    div.appendChild(div2);
    //option2
    let div3 = document.createElement("div");
    div3.setAttribute("class", "input-group input-group-sm mb-3");
    let span3 = document.createElement("span");
    span3.setAttribute("class", "input-group-text");
    span3.innerText = "b)";
    let input3 = document.createElement("input");
    input3.setAttribute("type", "text");
    input3.setAttribute("class", "form-control");
    input3.setAttribute("id", `${i}b`);
    div3.appendChild(span3);
    div3.appendChild(input3);
    div.appendChild(div3);
    //option3
    let div4 = document.createElement("div");
    div4.setAttribute("class", "input-group input-group-sm mb-3");
    let span4 = document.createElement("span");
    span4.setAttribute("class", "input-group-text");
    span4.innerText = "c)";
    let input4 = document.createElement("input");
    input4.setAttribute("type", "text");
    input4.setAttribute("class", "form-control");
    input4.setAttribute("id", `${i}c`);
    div4.appendChild(span4);
    div4.appendChild(input4);
    div.appendChild(div4);
    //option4
    let div5 = document.createElement("div");
    div5.setAttribute("class", "input-group input-group-sm mb-3");
    let span5 = document.createElement("span");
    span5.setAttribute("class", "input-group-text");
    span5.innerText = "d)";
    let input5 = document.createElement("input");
    input5.setAttribute("type", "text");
    input5.setAttribute("class", "form-control");
    input5.setAttribute("id", `${i}d`);
    div5.appendChild(span5);
    div5.appendChild(input5);
    div.appendChild(div5);
    //answer
    let div6 = document.createElement("div");
    div6.setAttribute("class", "input-group input-group-sm mb-3");
    let span6 = document.createElement("span");
    span6.setAttribute("class", "input-group-text");
    span6.innerText = "ans)";
    let input6 = document.createElement("input");
    input6.setAttribute("type", "text");
    input6.setAttribute("class", "form-control");
    input6.setAttribute("id", `${i}ans`);
    div6.appendChild(span6);
    div6.appendChild(input6);
    div.appendChild(div6);
    document.getElementById("createQuizQuestion").appendChild(div);
    i++;
  });
};

//===================================---done button
const quizCreatedsuccessfully = (e) => {
  quizCreatedBtn.addEventListener("click", (e) => {
    console.log("done");
    for (let j = 1; j < i; j++) {
      let ques = document.getElementById(`${j}ques`).value;
      let a = document.getElementById(`${j}a`).value;
      let b = document.getElementById(`${j}b`).value;
      let c = document.getElementById(`${j}c`).value;
      let d = document.getElementById(`${j}d`).value;
      let ans = document.getElementById(`${j}ans`).value;
      const obj = { ques, a, b, c, d, ans };
      singleQuizArray.push(obj);
    }
    console.log(singleQuizArray);
    localStorage.setItem("quizArray", JSON.stringify(singleQuizArray));
    // multipleQuizData.push( singleQuizArray);
    // console.log(multipleQuizData);

    document.getElementById("createQuizQuestion").style.display = "none";
    document.getElementById("starter").style.display = "block";
  });
};
