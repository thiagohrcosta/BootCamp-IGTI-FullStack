var a = 5;
var b = 6;

if (a > b){
    console.log(a + " é maior que " + b);
}
else{
    if (a < b){
        console.log(a + " é menor que " + b);
    }
    else{
        console.log(a + " é igual a " + b)
    }
}

/*
var dia = 1;

if (dia == 1){
    console.log("Domingo");
}
else{
    if(dia === 2){
        console.log("Segunda");
    }
    else{
        if(dia === 3){
            console.log("Terça");
        }
        else{
            if(dia === 4){
                console.log("Quarta");
            }
            else{
                if(dia === 5){
                    console.log("Quinta");
                }
            }
        }
    }
}

*/

var r = "";

switch(dia){
    case 1: r = "Domingo"; break;
    case 2: r = "Segunda"; break;
    case 3: r = "Terça"; break;
    case 4: r = "Quarta"; break;
    case 5: r = "Quinta"; break;
    case 6: r = "Sexta"; break;
    case 7: r = "Sabado"; break;
    default: r = "Dia inválido";
    
}