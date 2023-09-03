console.log("work with events");

let bulb = document.querySelector('.bulb-box');
console.log(bulb);
let bulbSwitch = document.querySelector('button');
console.log(bulbSwitch)

let a = 0;
console.log("value of a is " + a);
const switchBulb = () =>{
    bulbSwitch.addEventListener('click', function(){
        if (a===0){
            bulbSwitch.innerHTML = "Turned Off";
            bulb.classList.toggle('glow-bulb');
            a=1;
            console.log("after increment" , a);
        }
        else{
            bulbSwitch.innerHTML = "Turned On";
            a=0;
        }
    } )
}

