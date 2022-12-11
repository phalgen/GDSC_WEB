var a = 15;
var b = 5;
var add = a+b;
var sub = a-b;
var mult = a*b;
var div = a/b;

console.log("Addition:",add);
console.log("Subtraction:",sub);
console.log("Multiplication:",mult);
console.log("Division:",div);


const button = document.querySelector('#t8');
const heading = document.querySelector('#t22');
function t7() {
  
        heading.textContent = 'KHUSH SHAH';
        const newHeading = document.createElement('h5');
        newHeading.textContent = heading.textContent;
        heading.replaceWith(newHeading);
   
 
};
  function teamMem(){
    const val = document.querySelector('input').value;
    if(val==7){
        console.log("Team Members: Abraham Richard, Asbaa Thakur, Saad Shaikh, Khush Shah, Salman")
    }
    else{
        console.log("INVALID VALUE");
    }
  }   


const manipulate=document.querySelector('.task2_1').querySelector('h1');
function text_manipulation(){
    manipulate.textContent='SAAD SHAKH& SALMAN RATNANI';
    const aftermanipulation=document.createElement('h1');
    aftermanipulation.textContent=manipulate.textContent;
    manipulate.replaceWith(aftermanipulation);
    
};
let hover=document.querySelector('#t1');
hover.addEventListener("mouseover",function(){
    hover.style.background="blue"
    hover.style.color="yellow"


})
hover.addEventListener("mouseleave",function(){
    hover.style.background="pink"
    hover.style.color="indigo"


})