const decButton = document.getElementById("dec");
const resButton = document.getElementById("res");
const incButton = document.getElementById("inc");
const countLabel = document.getElementById("counter");
let count = 0;

decButton.onclick = function() {
    count--;
    countLabel.textContent = count;
    
}

resButton.onclick = function() {
    count = 0;
    countLabel.textContent = count;
    
}

incButton.onclick = function() {
    count++;
    countLabel.textContent = count;
    
}



document.getElementById("buttonR").onclick = function() {
    let randomNumber = Math.trunc(Math.random() * 1000);
    document.getElementById("numberR").textContent = randomNumber;
}

document.getElementById("buttConv").onclick = function(){
    let output = document.getElementById("result");
    let input = Number(document.getElementById("tempr").value);
    let res;
    if (!isNaN(input)){
        if (document.getElementById("cF").checked) {
            res = (input * (9/5) + 32);
            output.textContent = `${res.toFixed(1)} °F`
        } else if (document.getElementById("fC").checked) {
            res = (input - 32) * (5/9);
            output.textContent = `${res.toFixed(1)} °C`
        } else {
            window.alert("Choose the convertion method");
        }
    }else{
        window.alert("Enter a number");
    }   
}





function rollDice(){
    const numOfDice = document.getElementById("numSelect").value;
    const resDice = document.getElementById("resDice");
    const diceImg = document.getElementById("diceImg");
    let values = [];
    let img = [];

    for (let i = 0; i < numOfDice; i++) {
        const value = Math.trunc(Math.random() * 6) + 1;
        values.push(value);
        img.push(`<img src="img/${value}.jpg" alt="dice ${value}">`);
    }
    resDice.textContent = `dice: ${values.join(", ")}`;
    diceImg.innerHTML = img.join("");
}
