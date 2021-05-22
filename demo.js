console.log("testing");
let array=[];
 let i = 2;
let addQuestion=document.getElementById('addQuestion');
let submit=document.getElementById('submit');
addQuestion.addEventListener('click',(e)=>{
  
  let div=document.createElement('div');
  div.setAttribute('id',`${i}div`)
    let div1=document.createElement('div');
    div1.setAttribute('class','input-group input-group-lg');
    let span1=document.createElement('span');
    span1.setAttribute('class','input-group-text')
   span1.innerText=`${i}`;
   let input1=document.createElement('input');
   input1.setAttribute('type','text');
   input1.setAttribute('class','form-control')
   input1.setAttribute('id',`${i}ques`);
   div1.appendChild(span1);
   div1.appendChild(input1);
   div.appendChild(div1)
   //option1
   let div2=document.createElement('div');
   div2.setAttribute('class','input-group input-group-sm mb-3');
   let span2=document.createElement('span');
    span2.setAttribute('class','input-group-text')
   span2.innerText='a)';
   let input2=document.createElement('input');
   input2.setAttribute('type','text');
   input2.setAttribute('class','form-control')
   input2.setAttribute('id',`${i}a`);
   div2.appendChild(span2);
    div2.appendChild(input2);
    div.appendChild(div2);
   //option2
   let div3=document.createElement('div');
   div3.setAttribute('class','input-group input-group-sm mb-3');
   let span3=document.createElement('span');
    span3.setAttribute('class','input-group-text')
   span3.innerText='b)';
   let input3=document.createElement('input');
   input3.setAttribute('type','text');
   input3.setAttribute('class','form-control')
   input3.setAttribute('id',`${i}b`);
   div3.appendChild(span3);
    div3.appendChild(input3);
    div.appendChild(div3);
   //option3
   let div4=document.createElement('div');
   div4.setAttribute('class','input-group input-group-sm mb-3');
   let span4=document.createElement('span');
    span4.setAttribute('class','input-group-text')
   span4.innerText='c)';
   let input4=document.createElement('input');
   input4.setAttribute('type','text');
   input4.setAttribute('class','form-control')
   input4.setAttribute('id',`${i}c`);
   div4.appendChild(span4);
    div4.appendChild(input4);
    div.appendChild(div4)
   //option4
   let div5=document.createElement('div');
   div5.setAttribute('class','input-group input-group-sm mb-3');
   let span5=document.createElement('span');
    span5.setAttribute('class','input-group-text')
   span5.innerText='d)';
   let input5=document.createElement('input');
   input5.setAttribute('type','text');
   input5.setAttribute('class','form-control')
   input5.setAttribute('id',`${i}d`);
   div5.appendChild(span5);
    div5.appendChild(input5);
    div.appendChild(div5);
   document.getElementById("question").appendChild(div);
   i++;
})


submit.addEventListener('click',(e)=>{
  for(let j=1;j<i;j++){
    let ques=document.getElementById(`${j}ques`).value;
    let a=document.getElementById(`${j}a`).value;
    let b=document.getElementById(`${j}b`).value;
    let c=document.getElementById(`${j}c`).value;
    let d=document.getElementById(`${j}d`).value;
    const obj={ques,a,b,c,d};
    array.push(obj);

  }
  console.log(array);
  
})








// //show detail()
// detailEmailButton.addEventListener("click", (e) => {
//   let tableBody = document.getElementById("tableBody");
//   tableBody.innerHTML = null;
//   for (let j = 0; j <= i; j++) {
//     let value = document.getElementById(`${j}emailValue`).value;
//     console.log(value);
// if(value==""){
//   continue;
// }
// else{
//   let html = `<tr>
//   <th scope="col">${value}</th>
//   </tr>`;
//   tableBody.innerHTML += html;
// }
   
//   }
//   e.preventDefault();
// });

