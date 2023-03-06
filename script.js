const btn = document.getElementById("random");
const resetBtn = document.getElementById("reset");
btn.addEventListener("click",changeRandomColor);
resetBtn.addEventListener("click",changeToWhite);
const hexCodeBox = document.getElementById("hexCode");
const whiteBg = () =>{
    let value = "#";
    let resetValue = "ffffff"
    value = value + resetValue;
    return value;
}
function changeToWhite(){
    document.body.style.backgroundColor = whiteBg();
    hexCodeBox.innerText = whiteBg();
}
const generateRandom = () => {
 let value = "#";
 let colorValues = "0123456789abcefABCEF";
 for(let i=0;i<6;i++)
 {
    value = value + colorValues[Math.floor(Math.random() *16)];
    
 }
 return value;
};
function changeRandomColor(){
    document.body.style.backgroundColor = generateRandom();
    hexCodeBox.innerText = generateRandom();
}

// Script to show T&M on clicking terms&conditions
function showConditions(){
    window.open("terms&conditions.html")
}