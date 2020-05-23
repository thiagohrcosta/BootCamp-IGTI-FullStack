window.addEventListener('load', () =>{
    doSpread();
    doRest();
    doDestructuring();
});

function doSpread(){
    const marriedMen = people.results.filter(
        person => person.name.title === 'Mr');
    
        const marriedWoman = people.results.filter(
            person => person.name.title === 'Ms');

    const marriedPeople = [...marriedMen, ...marriedWoman, {msg: 'Oi'}];

    console.log(marriedPeople);
}

function doRest(){
    console.log(infiniteSum(1,2,3,4,5,6,7,8,9,10,100,1000));

}

function infiniteSum(...numbers){
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

function doDestructuring(){
    const first = people.results[0];

    // Repetitivo
    // const username = first.login.username;
    // const passwaord = first.login.passwaord;

    // Usando destructuring

    const {username, password} = first.login;
    console.log(username)
    console.log(password);
}
