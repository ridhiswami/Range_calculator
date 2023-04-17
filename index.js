var slider = document.getElementById("slider");
var selector = document.getElementById("selector");
var selectvalue = document.getElementById("selectvalue");
var probar = document.getElementById("probar");
const submitBtn = document.getElementById("submitbtn");
const resultEl =    document.querySelector(".result h2");
const recCardImg = document.querySelector(".rec-card-img img");
const resetBtn = document.querySelector(".resetbtn");



selectvalue.innerHTML = slider.value;


slider.oninput = function(){
selectvalue.innerHTML = this.value;
selector.style.left = this.value + "%";
probar.style.width = this.value + "%";
}


var sliderone = document.getElementById("sliderone");
var selectorone = document.getElementById("selectorone");
var selectvalueone = document.getElementById("selectvalueone");
var probarone = document.getElementById("probarone");

selectvalueone.innerHTML = sliderone.value;


sliderone.oninput = function(){
selectvalueone.innerHTML = this.value;
selectorone.style.left = this.value + "%";
probarone.style.width = this.value + "%";
}



var slidertwo = document.getElementById("slidertwo");
var selectortwo = document.getElementById("selectortwo");
var selectvaluetwo = document.getElementById("selectvaluetwo");
var probartwo = document.getElementById("probartwo");

selectvaluetwo.innerHTML = slidertwo.value;


slidertwo.oninput = function(){
selectvaluetwo.innerHTML = this.value;
selectortwo.style.left = this.value + "%";
probartwo.style.width = this.value + "%";
}


submitBtn.onclick = function(){
 const result = parseInt(slider.value)+ parseInt(sliderone.value) + parseInt(slidertwo.value);
 console.log(result);  
 resultEl.innerHTML = result;
 recCardImg.src = "images/864763.png";
}

resetBtn.onclick = function()
{
 recCardImg.src = "images/pig.jpg";
 resultEl.innerHTML = 0;
}

