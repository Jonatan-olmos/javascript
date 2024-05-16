function cuadrado(numero) {
    return numero * numero ;
}

let resultado = cuadrado();
console.log(resultado);



function saludo( apeellido,nombre) {
   console.log(nombre, apeellido); 
}




function sumarTodos() {
    console.log(arguments);
}

sumarTodos(1,2,3,4);