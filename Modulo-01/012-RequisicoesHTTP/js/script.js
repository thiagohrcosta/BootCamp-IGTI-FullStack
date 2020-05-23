window.addEventListener("load", function(){
    
    fetch("https://api.github.com/users/thiagohrcosta").then(res => {
        res.json().then(data => {
            showData(data);
        });
    }).catch(error => {
        console.log("Erro na requisição");
    });

    executedDivisionPromise();
    executedDivisionPromisesAsyncAwait()

});

function showData(data){
    const user = document.querySelector("#user");
    user.textContent = data.login + "" + data.name;
}

function executedDivisionPromise(a, b){
    return new Promise((resolve, reject) => {
        if (b === 0){
            reject("Não é possível a divisão por zero")
        }
        resolve(a / b);
    })
}



function executedDivisionPromisesAsyncAwait(){
    const division = await executedDivisionPromise(12,2);
    console.log(division);
}


