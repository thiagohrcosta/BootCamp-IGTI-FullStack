window.addEventListener("load", start);

var globalNames = ["Um", "Dois", "Três", "Quatro", "Cinco"];
var inputName = null;
var isEditing = false;
var currentIndex = null;

function start(){
    inputName = document.querySelector("#inputName");
    
    preventFormSubmit();
    activateInput();

    render();
}

function preventFormSubmit(){
    
    function handleFormSubmit(){
        event.preventDefault();    
    }

    var form = document.querySelector("form");
    form.addEventListener("submit", handleFormSubmit);

}

function activateInput(){

    function insertName(newName){
        globalNames.push(newName);
        render();
    }

    function updateName(newName){
        globalNames[currentIndex] = newName;

        if(!hasText){
            return;
        }

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
}

function render(){

    function createDeleteButton(index){

        function deleteName(){
            globalNames.splice(index, 1);
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

function clearInput(){
    inputName.value = "";
    inputName.focus();
}