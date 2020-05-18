window.addEventListener("load", start);

var globalNames = ["Um", "Dois", "Três", "Quatro", "Cinco"];
var inputName = null;

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
    }
    
    function handleTyping(){
        if(event.key === "Enter"){
            insertName(event.target.value);
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

    var divNames = document.querySelector("#nomes");
    divNames.innerHTML = "";
    
    // CRIAR UL
    // FAZER N LIS, CONFORME TAMANHO DO VETOR GLOBANAMES

    var ul = document.createElement("ul");
    
    for (var i = 0; i < globalNames.length; i++){
        var currentName = globalNames[i];

        var li = document.createElement("li");
        var button = createDeleteButton(i);

        var span = document.createElement("span");
        span.textContent = currentName;

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