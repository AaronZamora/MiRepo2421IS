function calcular(){
    let num1=parseInt(document.getElementById("Numero 1").value);
    let num2=parseInt(document.getElementById("Numero 2").value);
    var operacion=document.getElementById("Operacion").value;

    if(operacion==1){
        document.getElementById("Resultado").value=num1+num2;
    }else{
        document.getElementById("Resultado").value=num1-num2;
    }
}