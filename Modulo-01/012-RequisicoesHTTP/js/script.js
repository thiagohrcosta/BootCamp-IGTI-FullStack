window.addEventListener("load", function(){
    
    fetch("https://api.github.com/users/thiagohrcosta").then(res => {
        res.json().then(data => {
            showData(data);
        });
    });
});

function showData(data){
    const user = document.querySelector("#user");
    user.textContent = data.login + "" + data.name;
}
