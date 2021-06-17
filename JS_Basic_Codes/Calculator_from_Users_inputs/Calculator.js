function Add() {
     input_1 = document.getElementById('first_input').value;
    input_2 = document.getElementById('second_input').value;
     final = input_1 + input_2;
    document.getElementById('final_answer').innerHTML = final;
    

}

function Subtract(){
    var input_1 = document.getElementById('first_input').value;
    var input_2 = document.getElementById('second_input').value;
    document.getElementById('final_answer').innerHTML= input_1 - input_2 ;
}

function Multiply(){
    var input_1 = document.getElementById('first_input').value;
    var input_2 = document.getElementById('second_input').value;
    document.getElementById('final_answer').innerHTML= input_1 * input_2 ;
}

function Divide(){
    const input_1 = document.getElementById('first_input').value;
    const input_2 = document.getElementById('second_input').value;
    document.getElementById('final_answer').innerHTML= input_1 / input_2 ;
}
