/*Loop de pares
Deberás crear una función llamada loopDePares que reciba como parámetro un número y haga un loop de 0 a 100 mostrando en la consola cada número del loop. En caso de que el número de la iteración sumado con el número pasado por parámetro sea par, mostrará en la consola: “El número X es par”.
*/

function loopDePares(num){
    let X = 0;
    let mensaje = "";
    for(let i = 0; i<=100; i++){
        console.log(i);
        X = i + num
        if(X%2 === 0){
            mensaje = `El número ${X} es par.`
            console.log(mensaje)
        }
    }
}
//loopDePares(3)

/*Loop de impares con palabra
Deberás crear una función llamada loopDeImpares que reciba como parámetro un número y una palabra, y haga un loop de 0 a 100 mostrando en la consola cada número del loop. Luego, modificar el código para que, en caso de que ese número sumado con el número pasado por parámetro sea impar, muestre en la consola la palabra pasada por parámetro.
*/

function loopDeImpares(number, word) {
    let x= 0;
    for (let i= 0; i<=100; i++) {
        console.log(i);
        x= number + i;
        if (x%2 !== 0) {
            console.log(word);
        }
    }
}
//loopDeImpares(3, 'vida');

/*Sumatoria
Deberás crear una función llamada sumatoria que reciba un número como parámetro y que devuelva la sumatoria de todos sus números anteriores, incluso ese mismo. Ejemplo:
sumatoria(3) debe retornar 6 porque hace (1+2+3)
sumatoria(8) debe retornar 36
*/

function sumatoria(numero){
    let suma=0;
    for (let i=numero; i>=0; i--){
        suma = suma + i 
    }
    return suma;
}
//let imprimeSuma =sumatoria(3);
//console.log(imprimeSuma);

/*
Nuevo arreglo
Deberás crear una función llamada nuevoArreglo que reciba un número como parámetro y que devuelva un nuevo arreglo con tantos elementos como el número que le hayas pasado. Ejemplo:
nuevoArreglo(5) debe retornar [1,2,3,4,5]
nuevoArreglo(10) debe retornar [1,2,3,4,5,6,7,8,9,10]
*/

function nuevoArreglo (num) {
    let newArray = [];
    for (let i=1; i<=num; i++){
        newArray.push(i);
    }
    return newArray;
}
//let imprimeNuevoArreglo =nuevoArreglo(3);
//console.log(imprimeNuevoArreglo);

/*
Similar String.split()
Deberás crear una función llamada split que reciba un string y simule el comportamiento de la función original. Si no estás seguro de cómo funciona, Google puede ayudarte. Importante: no podés usar el String.split(). Ejemplo:
split(“hola”) debe retornar [“h”,”o”,”l”,”a”]
split(“chau”) debe retornar [“c”,”h”,”a”,”u”]
*/

function split(string){
    let arrayString=[];
    for (let i= 0; i<string.length; i++) {
        arrayString.push(string[i]);
    }
    return arrayString;
}

//let imprimeSplit = split('hola');
//console.log(imprimeSplit)
/*

Carácter del medio
Deberás crear una función llamada caracterDelMedio que reciba un string por parámetro y devuelva sus caracteres del medio. Ejemplo:
caracterDelMedio(“Digital House”) debe retornar “l”
caracterDelMedio(“hola”) debe retornar “ol”
caracterDelMedio(“cosas”) debe retornar “s”
*/

function caracterDelMedio(palabra) {
    if (palabra.length %2 == 0){
        caracterDelMedio= palabra.slice(-3,-1);
        
    } else {
        caracterDelMedio= palabra.slice(-1);
    }
    return caracterDelMedio;
}

//let imprimeCaracterDelMedio = caracterDelMedio('digital');
//console.log(imprimeCaracterDelMedio);

/*
Mover ceros a lo último
Deberás crear una función llamada moverCeros que reciba un arreglo como parámetro y devuelva otro con los números “0” ordenados al final. Ejemplo:
moverCeros([false,1,0,1,2,0,1,3,"a"]) debe retornar [false,1,1,2,1,3,"a",0,0]
moverCeros([1,2,0,1,0,1,0,3,0,1]) debe retornar [1,2,1,1,3,1,0,0,0,0]
*/
arrayCeros = [false,1,0,1,2,0,1,3,"a"];

function moverCeros(arrayConCeros){
    arrayConCeros.sort((a, b) =>{
        if (b === 0) {
            return -1
        } else {
            return 1
        }
    })
    return arrayConCeros
}
let imprimeCeros = moverCeros(arrayCeros);
console.log(imprimeCeros)

/*
Manejando dos arreglos
Deberás crear una función llamada arrayHandler que reciba dos arreglos de igual largo como parámetros y muestre en la consola “Soy {elemento de array 1} y yo soy {elemento de array 2}”. Ejemplo:
arrayHandler([1,2,3,4], [“h”,”o”,”l”,”a”]) debe mostrar: 
Soy 1 y yo soy h
Soy 2 y yo soy o
Soy 3 y yo soy l
Soy 4 y yo soy a
*/

arrayUno= [1,2,3,4]
arrayDos= ['h','o','l','a']
function arrayHandler(uno, dos){
    let message;
    for (let i=0; i<arrayUno.length;i++) {
        message=(`Soy ${uno[i]} y yo soy ${dos[i]}`)
        console.log(message);
    }
    return message
}
let imprimeArray= arrayHandler(arrayUno, arrayDos);
console.log(imprimeArray)

/*
Conversor a camelCase
Deberás crear una función que convierta de snake_case o kebab-case a camelCase. La primera letra del resultado debe estar en mayúsculas solo si en el string original estaba en mayúscula. Ejemplo:
“el-guerrero-silencioso” debería convertirse en “elGuerreroSilencioso”
“El_guerrero_silencioso” debería convertirse en “ElGuerreroSilencioso”
*/

str='el-guerrero-silencioso'

function convertirCamelCase(texto){
    return texto.replace(/\W+(.)/g, function(coincidencia, c){
        return c.toUpperCase()
    })
}

let imprimeCamelCase= convertirCamelCase(str);
console.log(imprimeCamelCase)

// Another way
function conversor(str) {
    for (let i = 0; i < str.length; i++) {
    if (str[i] === "_" || str[i] === "-") {
    str = str.replace(str[i + 1], str[i + 1].toUpperCase());
    str = str.replace(str[i], "");
    }
    }
    return str;
    }
    
let imprimeConvert= conversor("Hola_mina_gonzalez");
console.log(imprimeConvert)

/*
Palíndromo
Deberás crear una función llamada palindromo que indique si una palabra es palíndroma o no. Debe retornar “true” en caso de que lo sea, y “false” en caso de que no. Ejemplo:
palindromo(“anilina”) debe retornar true
palindromo(“Ana”) debe retornar true
palindromo(“Enrique”) debe retornar false
*/

let palindromo = (string)=>{
    let inverso = ""
    for (let i = string.length - 1; i >= 0; i--) {
    inverso += string[i]
    }
    return string === inverso ? true : false
    }
    //console.log(palindromo("menem"))