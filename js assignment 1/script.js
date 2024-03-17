// 1st button code 
document.getElementById("1btn").onclick = function () {
    document.getElementById('1btn').onclick = alert("m shafay");
}
// 2nd button code 
document.getElementById("2btn").onclick = function () {
    document.getElementById('2btn').onclick = alert("button for alert numbers");
}

// 3rd button code 
document.getElementById("3btn").onclick = function () {
    document.getElementById("output-section").innerHTML = "<h3>Variabes names</h3><ul> <li>string</li><li>number</li><li>boolean</li><li>null</li><li>ndefined</li><li>symbol</li></ul>"
}


// 4th button code 
document.getElementById("4btn").onclick = function () {
    document.getElementById("output-section").innerHTML = "<h3>Examples of Camle Case</h3><ul><li>myNameIsShafay</li><li>iAmFromSanglaHill</li><li>iAmLearningWebAndMobileAppDevelopmentFromSMIT</li></ul>"
}
// button for clearing output section 
document.getElementById("output-clear").onclick = function () {
    document.getElementById('output-section').innerHTML = "<p>|</p>"
}

// 5th button code 
document.getElementById("5btn").onclick = function () {
    let a = 7;
    let b = 12;
    sum = a + b;
    document.getElementById("input-section").innerHTML = `<div>First variable is ${a} and Second variable is ${b}</div>`
    document.getElementById("output-section").innerHTML = `<div>sum of these variables is ${sum}</div>`
}
// button for clearing input section 
document.getElementById("input-clear").onclick = function () {
    document.getElementById('input-section').innerHTML = "<p>|</p>"
}
// 6th button code 
document.getElementById("6btn").onclick = function () {
    let number1 = 14;
    let number2 = 8;
    let subtract = number1 - number2;
    document.getElementById("input-section").innerHTML = `<div>First variable is ${number1} and Second variable is ${number2}</div>`
    document.getElementById("output-section").innerHTML = `<div>subtract of these variables is ${subtract}</div>`
}

// 7th button code 
document.getElementById("7btn").onclick = function () {
    let number1 = 10;
    let number2 = 5;
    let multiply = number1 * number2;
    document.getElementById("input-section").innerHTML = `<div>First variable is ${number1} and Second variable is ${number2}</div>`
    document.getElementById("output-section").innerHTML = `<div>multiplication of these variables is ${multiply}</div>`
}

// 8th button code 
document.getElementById("8btn").onclick = function () {

    
    document.getElementById("input-section").innerHTML = "<input type='number' placeholder='1st Variabe' id='num1'>&nbsp;&nbsp;<input type='number' placeholder='2nd Variabe'id='num2'><br><button id='sum' onClick='getValue()' class='btn bg-danger m-2'>Sum</button><button class='m-2 btn bg-danger'>Subtract</button><button class='m-2 btn bg-danger'>multiply</button><button class='m-2 btn bg-danger'>divide</button>"

}
function getValue(event){
    let input1 = document.getElementById("num1").value;
    let input2 = document.getElementById("num2")
    console.log(input2.innerText)
    console.log(input1)
    console.log(event.target.value)
    console.log(document.querySelector("#num2").value)
}
