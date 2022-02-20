let btn = document.getElementById('btn');
btn.addEventListener('click',function(){

let weight = document.getElementById('weight-input').value;
let height = document.getElementById('height-input').value;
let finalBmi = (weight/(height*height));
document.getElementById('bmi-output').value = finalBmi;
})
