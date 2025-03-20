/*
funciones(expresada,declarada,flecha), estructura if, else if operador ternario, and y or , 
estructura for, metodos de arrays  / ejercicios con prompt sync
*/
// funcion en python
// def sumar (a,b):

console.log(sumar (1,2))

// funcion expresada
function sumar (a,b){
    return a + b
}

// funcion declarada
let restar = function (a,b){
    return a-b;
}
console.log(restar(10,3))

// funciones flecha
let masCien = a =>  a + 100; 

function duplicar(a){
    numero = Number(a)
    numero = numero*2
    return numero
}
/**********************************************/

function dejarPasar (edad,acompaniado){
    if ( edad > 18 || acompaniado === true){
        return ( "Puede pasar")
    }else if (acompaniado === false){
        return ("No puede pasar")
    }else{
        return ("Como te decia tu mama, aca hay un error")
    }
}

console.log(dejarPasar(17,true))
console.log(dejarPasar(17,false))
console.log(dejarPasar(19,true))
console.log(dejarPasar(19,false))
console.log(dejarPasar("Steve",true))

//  15>x<20 <<< desaprobacion directa

// Operador Ternario
"La Cuota es de:  " + (isMember ? "$2.00" : "$10.00");

edad>18 && acompaniado===true ? "Puede pasar" : "No puede pasar"

let edad= 19
let acompaniado = true
let resultado = edad>18 || acompaniado===true ? "Puede pasar" : "No puede pasar"
console.log(resultado)

/*********************************** */
// for - para
//for i in range(101):
//  print i

// variable iteradora, condición, variación
for (let i = 0; i <101 ; i++   ){
    console.log(i)
}

/******************************/ // ECMACSRIPT 
let x = 0
while (x < 0 ) {
    console.log(x)
    x += 1 
}

/*********************************/
let NUMEROS = [1,2,3,4,5]

for (let i = 0 ; i< NUMEROS.length ; i++ ){
    console.log(NUMEROS[i])
}

/****Buscador en el Array ***/
function encontrarValor (array,valor){
    for ( let i = 0; i < array.length; i ++){
        if ( array[i] === valor ){
            return i
        }else{
            return "el valor no existe"
        }
    }
}
// callback
function duplicar ( a,b){
    return a*b
}

function calculadora (num1,num2,funcion)
{return funcion(num1,num2)}
// Uso una funcion de parametro
console.log(1,2,duplicar)
let nombre = "Estebana"

for ( let i = 0; i< (nombre.length)/2;i++){
    resultado = resultado + nombre[i] //Este
}

/**************************************/

const prompt = require('prompt-sync')();

const name = prompt('What is your name?');
console.log(`Hey there ${name}`);
