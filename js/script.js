'use strict';
let res = document.querySelector('.result'); 




function num(x){
    switch(x){
        case 1:
        res.value += '1';
        break;
        case 2:
        res.value += '2';
        break;
        case 3:
        res.value += '3';
        break;
        case 4:
        res.value += '4';
        break;
        case 5:
        res.value += '5';
        break;
        case 6:
        res.value += '6';
        break;
        case 7:
        res.value += '7';
        break;
        case 8:
        res.value += '8';
        break;        
        case 9:
        res.value += '9';
        break;
        case 0:
        res.value += '0';
        break;
    }
}  


function ope(y){
    switch(y){
        case '/':
        res.value += '/';  
        break;
        case '*':
        res.value += '*';
        break;
        case '+':
        res.value += '+';
        break;
        case '-':
        res.value += '-' ;
        break;
        case '=':
        res.value += '=';
        break;
        case '.':
        res.value += '.';
        break;
    }
}


function clearAll(){
    res.value = '';
}
function havasar() {
    res.value = +eval(res.value);
}