//********** FUNCION DECLARADA ***********
estoEsUnaFuncion();

function estoEsUnaFuncion() {
    console.log('1');
    console.log('2');
    console.log('3');
}

estoEsUnaFuncion();
//*******************************************


//********** FUNCION QUE DEVUELVE VALOR ***********
function unaFuncionQueDevuelveValor() {
    console.log('1');
    console.log('2');
    console.log('3');
    return 'La función ha retornado una cadena de texto';
}
const valorDeFuncion = unaFuncionQueDevuelveValor();
console.log(valorDeFuncion);
//*******************************************


//********** FUNCION CON PARAMETROS ***********
function saludar(nombre='usuario',apellido='usu',edad=55) {
    console.log(`Hola ${nombre} ${apellido} su edad es : ${edad}`);
}

saludar();
//*******************************************


//********** FUNCION ANONIMA ***********
const funcionExpresada = function () {
    console.log('Esto es una funcion expresada');
}
funcionExpresada();
//*******************************************


//********** FUNCION DE TIPO FLECHA (ARROW FUNCTION) ***********
const funcionFlechaUnaLinea = () => console.log('Funcion flecha de una sola linea y por eso se pueden omitir las llaves');
funcionFlechaUnaLinea();

const funcionFlechaVariasLineas = () =>{
    console.log('uno');
    console.log('dos');
    console.log('tres');
    console.log('Funcion flecha de varias lineas');
}
funcionFlechaVariasLineas();

//En esta función se omite la palabra return ya que es de una sola linea, de lo contrario si es necesario el return
const sumar = (a,b,c) => a+b+c;
console.log(sumar(2,8,1));

//Foreach con arrow function
const numeros = [1,2,3,4,5];
numeros.forEach((element,index) => {
    console.log(`El numero ${element}, esta en la posicion ${index}`);
});
//***************************************************************


