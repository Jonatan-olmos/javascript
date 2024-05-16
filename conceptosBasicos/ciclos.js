//Imprimir numeros del 1 l 10

/*
ciclo for
1 Instruccion inicial
2 condicion
3 Intruccion despues de cada iteración

*/

for( let i = 1; i <= 10 ; i = i + 1){
    console.log(i);
}

for( let i = 1; i <= 10; i++){
    console.log(i);
}

// breack termina el ciclo
 for( let i = 1; i <= 10; i++){
    console.log(i);
    if(i % 2 != 0){
        continue ; 
    }
    console.log("Es par");
}

console.log("hola");


// ciclos while

let i = 1;

while (i <= 10) {
    console.log(i);
    i++
}


while(prompt()){
    console.log("ejecucion")
   }


do{
    console.log("ejecucion");
}while (prompt()) {
    
}
