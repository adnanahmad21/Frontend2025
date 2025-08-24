// let abcd=document.querySelector("h1");
// abcd.innerHTML="ajajvjvoa"
// console.dir(abcd);
// let lis=document.querySelectorAll("l1");
// lis.forEach(function(val)  {
//     console.log(val.textContent);
// });
// let ul=document.querySelector("ul");
// let li=document.createElement("li");
// li.textContent="New Task";
// ul.appendChild(li);
// let p=document.querySelector("p");
// let funct=()=>{
//      p.style.color="red";
// }
// p.addEventListener("click",funct);
// p.removeEventListener("click" ,funct);
// let h1=document.querySelector("h1");
// let sel=document.querySelector("select");
// sel.addEventListener("change",(dets)=>{
//   h1.textContent=`${dets.target.value} Selected`;
// });

let main=document.querySelector("#main");
let form=document.querySelector("form");
let inputs=document.querySelectorAll("input");
form.addEventListener("submit",(dets)=>{
   dets.preventDefault();
let card=document.createElement("div");
card.classList.add("card");
let img=document.createElement("img");
 img.setAttribute("src",inputs[0].value);

 let h3=document.createElement("h3");
 h3.textContent=inputs[1].value;
 let h4=document.createElement("h4");
 h4.textContent=inputs[2].value;
 let p=document.createElement("p");
 p.textContent=inputs[3].value;
 card.appendChild(img);
 card.appendChild(h3);
 card.appendChild(h4);
 card.appendChild(p);
 main.appendChild(card);
 inputs.forEach(function(inp){
  if(inp.type!=="submit")
  {
    inp.value="";
  }
 });
 
});





