console.log("start the DOM manupulation");


let firstBox = document.querySelector('#first-box');
// firstBox.style.color = "red";

let selectBox = document.querySelectorAll('h2')[0];
// console.log(selectBox);
// selectBox.innerHTML = "Change with html";


selectBox.addEventListener('click', function(){
    firstBox.classList.toggle('myClass');
    firstBox.style.color = "yellow";
})