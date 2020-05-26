let tabPeopleFind = null;
let tabPeopleInfo = null;
let allPeople = [];
let allSelectedPeople = [];
let countPeople = 0;
let countSelectedPeople = 0;
let countMale = 0;
let countFemale = 0;
let sumAges = 0;
let medAges = 0;

let numberFormat = null;

const url = "https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo";

window.addEventListener("load", () =>{
    
    const container = document.querySelector(".container");
    const campo = document.querySelector("#campo");

    tabPeopleFind = document.querySelector("#tabPeopleFind");
    tabPeopleInfo = document.querySelector("#tabPeopleInfo")
    
    countPeople = document.querySelector("#displayTotalPeople");
    //countSelectedPeople = document.querySelector("")
    
    countMale = document.querySelector("#countMale");
    countFemale = document.querySelector("#countFemale");
    
    sumAges = document.querySelector("#sumAges");
    medAges = document.querySelector("#medAges");
    
    
    numberFormat = Intl.NumberFormat("pt-BR");
    
    fetchPeoples();
    
    preventFormSubmit();
});

function preventFormSubmit(){
 
    function handleFormSubmit(event){
        event.preventDefault();            
    }

    var form = document.querySelector("form");
    form.addEventListener('submit', handleFormSubmit);
    
}

function activateInput(){
    inputName.focus();
}

async function fetchPeoples(){

    const res = await fetch(url);
    const json = await res.json();
    allPeople = json.results.map(people => {

        const {id, firstName, lastName, picture, age, gender} = people;

        return{
            id: people.id,
            firstName: people.name.first,
            lastName: people.name.last,
            picture: people.picture.large,
            age: people.dob.age,
            gender: gender
        };
    });
    
    render();
   
}


// Função submit no form

formulario.addEventListener("submit", (e) =>{
    e.preventDefault();
    const wordTyped =  campo.value.toLowerCase();
    campo.value = "";

    allSelectedPeople = allPeople.filter(people => people.firstName.toLowerCase().includes(wordTyped) || people.lastName.toLowerCase().includes(wordTyped)).sort((a,b) => {
        return a.firstName.localeCompare(b.firstName);
    });

    if (allPeople.length == 0){
        displayTotalPeople.innerHTML = `<p>Nenhum usuário encontrado com estes parâmetros.</p>`;
        tabPeopleInfo.innerHTML = `<p>Nenhuma informação a ser exibida.</p>`;
        return;
    }

    console.log(campo.value);
    render();
})

function render(){
    
    renderPeopleList();
    renderPeopleInfo();
   
   
}


function renderPeopleList(){
    //tabpeoplefind

    numberUser = allSelectedPeople.reduce((acc,_) =>{
        return acc += 1;
    }, 0);

    peopleHTML = `
        <h1 class="">${numberUser} Usuário(s) encontrado(s)</h1>
        <div class="line"></div>
    `;

    allSelectedPeople.forEach(people =>{
        peopleHTML += `
            <div class="user-box">
                <img src="${people.picture.large} 
                     alt="${people.firstName} ${people.lastName}">
                <p>${people.firstName} ${people.lastName}, ${people.age} anos</p>
            </div>
        `;
    });

    tabPeopleFind.innerHTML = peopleHTML;

}

function renderPeopleInfo(){

    countMale = allSelectedPeople.filter(people => {
        return people.gender === "male";
    }).reduce((acc,_) =>{
        return acc += 1;
    },0);

    countFemale = allSelectedPeople.filter(people => {
        return people.gender === "female";
    }).reduce((acc,_) =>{
        return acc += 1;
    }, 0);

    sumAges = allSelectedPeople.reduce((acc, curr) => {
        return acc + curr.age;
    },0);

    medAges = numberFormat.format(sumAges / numberUser);


    userInfoHTML = `
        <h1>Estatísticas</h1>
        <div class=""></div>
        <div class="tabPeopleInfo">
            <p>Sexo masculino: ${countMale}</p>
            <p>Sexo feminino: ${countFemale}</p>
            <p>Soma de idades: ${sumAges}</p>
            <p>Média de idades: ${medAges}</p>
        </div>
    `;

    tabPeopleInfo.innerHTML = userInfoHTML;
  
}

campo.addEventListener("keyup", () => {
    if(campo.value.length > 0){
        btn.disabled = false;
    }
    else{
        btn.disabled = true;
    }
})

function renderSelectedPeople(){}
function renderSelectedMale(){}
function renderSelectedFemale(){}
function renderPeopleButtons(){}