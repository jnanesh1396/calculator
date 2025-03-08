/*const d=document.getElementById("display");
function append(input){
    d.value+=input;
}
function clear(){
    d.value="";
}
function  calculate()
{
    try{
        d.value=evale(d.value);
    }
    catch(error)
    {
        d.value="ERROR";
    }
// }*/
const d = document.getElementById("display");

function append(input) {
    d.value += input;
}

function clearDisplay() {
    d.value = " ";
}

function calculate() {
    try {
        d.value = eval(d.value); // Fixed typo
    } catch (error) {
        d.value = "ERROR";
    }
}
