const form= document.querySelector("form");
const register= document.getElementById("register");
const xbtn= document.getElementById("x");
const input1= document.getElementById("input1");
const input2= document.getElementById("input2");

function clicked(element) {
    element.classList.toggle("showOrHide");
}

register.addEventListener("click", ()=>{
    input1.value='';
    input2.value='';
    clicked(form);
})
let value1;
let value2;
xbtn.addEventListener("click", ()=>{
    value1= input1.value;
    value2= input2.value;
    clicked(form);
    setTimeout(() => {
        alert(`${value1} \n ${value2}`);
    }, 0);
})