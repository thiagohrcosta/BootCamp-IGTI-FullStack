window.addEventListener("load", function(){

    const timer = document.querySelector("#timer")
    let count = 0;
    
    const interval = setInterval(() =>{
        timer.textContent = ++count;

        if (count === 12){
            this.clearInterval(interval);
        }

        if(count % 5 === 0){
            setTimeout(() =>{
                timer.textContent = count + ",5";
            },1)
        }
        
    }, 1000);
})