function displayValue(val) {
    document.getElementById("display").value=document.getElementById("display").value+ val;
    
}

function clearValue() {
    document.getElementById("display").value="";
}

function answerValue(){
    var userInput=document.getElementById("display").value;
    var result = eval(userInput);

    document.getElementById("display").value=result;
}