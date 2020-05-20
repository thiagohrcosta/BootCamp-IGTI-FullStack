window.addEventListener("load", () =>{
    

    var frequencyRange = document.querySelector("#frequencyRange");
    frequencyRange.addEventListener('change', frequencyOnChange);
    
})

var frequencyOnChange = (event) => {
    var frequencyValue = document.querySelector("#frequencyDisplay").value = event.target.value;

}



