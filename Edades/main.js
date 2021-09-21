function edad(){
    let age=parseInt(document.getElementById("Edad").value);
    
    if(age>=0 && age<=6){
        document.getElementById("Resultado").value=("Estas en la etapa de la infancia");
    }else{
        if(age>6 && age<=12){
            document.getElementById("Resultado").value=("Estas en la etapa de la niñez");
        }else{
            if(age>6 && age<=12){
                document.getElementById("Resultado").value=("Estas en la etapa de la niñez");
            }else{
                if(age>12 && age<=20){
                    document.getElementById("Resultado").value=("Estas en la etapa de la adolescencia");
                }else{
                    if(age>20 && age<=25){
                        document.getElementById("Resultado").value=("Estas en la etapa de la juventud");
                    }else{
                        if(age>25 && age<=60){
                            document.getElementById("Resultado").value=("Estas en la etapa de la adultez");
                        }else{
                            if(age>60 && age<=100){
                                document.getElementById("Resultado").value=("Estas en la etapa de la vejez");
                            }else{
                                if(age>100){
                                    document.getElementById("Resultado").value=("Wow... jamas pense que llegarias a tanto");
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}