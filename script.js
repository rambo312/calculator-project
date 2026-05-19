// script.js  

let display = document.getElementById("display");

function appendValue(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function deleteLast(){
    display.value = display.value.slice(0,-1);
}

function calculate(){

    try{
        display.value = eval(display.value);
        if(result==Infinity || result===-Infinity){
            display.value="Error";
        }
        else{
            display.value=result;
        }
    }

    catch{
        display.value = "Error";
    }
}
