window.addEventListener('load', () =>{

    doMap();
    doFilter();
    doFilter2();

});


function doMap(){
    const nameArray = starWars.results.map(person => {
        return {
            name: person.name,
            gender: person.gender
        };
    });

    console.log(nameArray);
}

function doFilter(){
    const onlyFemale = starWars.results.filter(person => {
        return person.gender === "female";
    })

    console.log(onlyFemale);
}

function doFilter2(){
    const onlyMale = starWars.results.filter(person => {
        return person.gender === "male";
    })

    console.log(onlyMale);
}