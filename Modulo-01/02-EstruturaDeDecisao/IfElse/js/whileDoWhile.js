// Somatório com while

var numeroAtual = 1;
var somatorio = 0;

while(numeroAtual <= 10){
    somatorio = somatorio + numeroAtual
    numeroAtual++;
}

console.log("A soma é : " + somatorio);

do {
    somatorio += numeroAtual;
    numeroAtual++;
}
while (numeroAtual <=10);

var numeroAtual = 1;
var somatorio = 0;

for (numeroAtual = 1; numeroAtual <= 10; numeroAtual++){
    somatorio += numeroAtual;
}