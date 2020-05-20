'use strict'; // O JS acuma mais erros

// VAR x LET

function withVar(){
    for (var i = 0; i < 10; i++){
        console.log('var' + i);
    }

    i = 20;

    console.log(i);
}

withVar();

/*

function withLet(){
    for (let i = 0; i < 10; i++){
        console.log('let' + i);
    }

    i = 20;

    console.log(i);
}

withLet();


*/


// CONST - não é possível reatribuir valores

// const c = 20;

// c = 30;


// FUNCTION

function sum(a,b){
    return a + b;
}

console.log(sum(2,3));

//Função anônima
const sum2 = function(a, b){
    return a + b;
}

console.log(sum2(2,3));

// ARROW FUNCTION

const sum3 = (a,b) => {
    return a + b;
}

console.log(sum3(2,3))

// ARROW FUNCTION REDUZIDA

const sum4 = (a,b) => a + b;

console.log(sum4(2,3));


// USANDO TEMPLATE LITERALS

const name = "João";
const surName = "Silva";
//const text1 = "Meu nome é" + nome + " " + surName;

console.log(`Meu nome é ${name} ${surName}`);


const sum5 = (a, b = 10) => a + b;

console.log(sum5(2, 3));