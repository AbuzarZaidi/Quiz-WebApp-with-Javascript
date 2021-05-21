console.log("testing");
let newEmailButton = document.getElementById("newEmailButton");
let detailEmailButton = document.getElementById("detailEmailButton");
let i = 0;

//add new input field
newEmailButton.addEventListener("click", (e) => {
  i++;
  let txtNewInputBox = document.createElement("input");
  txtNewInputBox.setAttribute("type", "email");
  txtNewInputBox.setAttribute("class", "mb-3 form-control");
  txtNewInputBox.setAttribute("id", `${i}emailValue`);
  document.getElementById("newEmail").appendChild(txtNewInputBox);
  document.getElementById(`${i}emailValue`).focus()
  console.log(i);

  e.preventDefault();
});

//show detail()
detailEmailButton.addEventListener("click", (e) => {
  let tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = null;
  for (let j = 0; j <= i; j++) {
    let value = document.getElementById(`${j}emailValue`).value;
    console.log(value);
if(value==""){
  continue;
}
else{
  let html = `<tr>
  <th scope="col">${value}</th>
  </tr>`;
  tableBody.innerHTML += html;
}
   
  }
  e.preventDefault();
});