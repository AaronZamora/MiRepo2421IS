var arreglo1=[1, 2, 3, 4, 5, 6, 7, 8, 9];
var arreglo2=[3, 5, 7, 10, 99, 7, 11, 8, 9];
var contenedor=[];
var palabra="Vodka";
var contra=arreglo1.length-1;
console.log(arreglo1);
console.log(arreglo2);

/*console.log("--------------------");
for(var i=0;i<arreglo1.length;i++){
    arreglo2.push(arreglo1[i]);
}
console.log(arreglo1);
console.log(arreglo2);*/

/*console.log("------------------------------")
for(i=0;i<arreglo1.length;i++){
    for(x=0;x<arreglo2.length;x++){
        if(arreglo1[i]==arreglo2[x]){
            console.log("La posicion :"+i+" es igual a la posicion: "+x);
        }
    }
}*/
console.log("-------------------")
for(var i=0; i<arreglo1.length;i++){
    contenedor.push(palabra[i]);
}
console.log(contenedor);