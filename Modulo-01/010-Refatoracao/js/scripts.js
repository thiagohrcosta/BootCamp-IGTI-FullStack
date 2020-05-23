let globalNames = ["Um", "Dois", "Três", "Quatro", "Cinco"];
let inputName = null;
let currentIndex = null;
let isEditing = false;


window.addEventListener("load",() =>{

    inputName = document.querySelector("#inputName");

    preventformSubmit();
    activeInput();
    remover();
})

function preventFromSubmit(){
    function handleFormSubmit(event){
        event.preventDefault();
    }

    var form = document.querySelector("form");
    form.addEventListener("submit", handleFormSubmit);
}

function activeInput(){
    function insertName(newName){
        globalNames = [...globalNames, newName];
    }
}

function updateName(newName){
    globalNames[currentIndex] = newName;
}

    
function handleTyping(event){

    var hasText = !!event.target.value && event.target.value.trim() !== "";


    if(event.key === "Enter"){
        if(isEditing){
            updateName(event.target.value);
        }
        else{
            insertName(event.target.value);
        }
        render();
        isEditing = false;
        clearInput();            
    }
}

inputName.addEventListener("keyup", handleTyping);
inputName.focus();


function render(){

function createDeleteButton(index){

    function deleteName(){
        //globalNames = globalNames.filter((name, i) => {
            /*if(i === index){
                return false;
            }
            return true; */

            //return i !== index;
        //});

        globalNames = globalNames.filter((_, i) => i !== index);
        render();
    }

    var button = document.createElement("button");
    button.classList.add("deleteButton");
    button.textContent = "x";

    button.addEventListener("click", deleteName);

    return button;
}

function createSpan(nome, index){

    function editItem(){
        inputName.value = nome;
        inputName.focus();
        isEditing = true;
        currentIndex = index;
    }

    var span = document.createElement("span");
    span.classList.add("clickable");
    span.textContent = nome;
    span.addEventListener("click", editItem);

    return span;
}

var divNames = document.querySelector("#nomes");
divNames.innerHTML = "";

// CRIAR UL
// FAZER N LIS, CONFORME TAMANHO DO VETOR GLOBANAMES

var ul = document.createElement("ul");

for (var i = 0; i < globalNames.length; i++){
    var currentName = globalNames[i];

    var li = document.createElement("li");
    var button = createDeleteButton(i);
    var span = createSpan(currentName);

    li.appendChild(button);
    li.appendChild(span);
    ul.appendChild(li);
}

divNames.appendChild(ul);
clearInput();

}
/*
function clearInput(){
inputName.value = "";
inputName.focus();
}*/

const clearInput = () =>{
    inputName.value = "";
    inputName.focus();
};