console.log("multiple selection");


let boxSelector = document.querySelectorAll('.box-item');
let ChangeToArray = Array.from(boxSelector);
// console.log(boxSelector);
// console.log(ChangeToArray, typeof ChangeToArray); 

ChangeToArray.forEach(function(box){
    box.addEventListener('click', function(e){
       box.classList.toggle("add-style");
       box.innerHTML = "<p>Change with js<p>"
       box.textContent = "<h1>This should be in h1 Like this e.g </h1>"
    });
});