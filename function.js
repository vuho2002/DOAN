
// water
let img1 = document.querySelector('#fan');
let fan1 = document.querySelector('#fan1');
let fan2 = document.querySelector('#fan2');
// functions
fan1.addEventListener('click', ()=>{
    img1.src = 'Images/fanon.png'; 
    firebase.database().ref("eq1").set({fan: 1})
})
fan2.addEventListener('click', ()=>{
    img1.src = 'Images/fanoff.png';
    firebase.database().ref("eq1").set({fan: 0})
})

// led
let img2 = document.querySelector('#led');
let led1 = document.querySelector('#led1');
let led2 = document.querySelector('#led2');
// functions
led1.addEventListener('click', ()=>{
    img2.src = 'Images/ledon.png'; 
    firebase.database().ref("eq2").set({led: 1})
})
led2.addEventListener('click', ()=>{
    img2.src = 'Images/ledoff.png';
    firebase.database().ref("eq2").set({led: 0})
})

// sound
let img3 = document.querySelector('#sound');
let sound1 = document.querySelector('#sound1');
let sound2 = document.querySelector('#sound2');
// functions
sound1.addEventListener('click', ()=>{
    img3.src = 'Images/soundon.png'; 
    firebase.database().ref("eq3").set({sound: 1})
})
sound2.addEventListener('click', ()=>{
    img3.src = 'Images/soundoff.png';
    firebase.database().ref("eq3").set({sound: 0})
})