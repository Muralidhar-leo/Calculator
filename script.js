
const display=document.getElementById("display");


function append(char){
    display.value+=char;
    
}

function reset(){
    display.value='';
}

function result(){
    try{
        display.value=eval(display.value);
    }
    catch(error){
        display.value="Error";
    }
}
