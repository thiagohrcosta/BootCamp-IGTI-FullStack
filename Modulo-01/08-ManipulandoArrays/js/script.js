window.addEventListener('load', () =>{

    doMap();
    doFilter();
    doFilter2();
    doForEach();
    doAge();
    doReduce();
    doFind();
    doSome();
    //doEvery();
    doSort();

});


function doMap(){
    const nameArray = starWars.results.map(person => {
        return {
            name: person.name,
            gender: person.gender
        };
    });

    console.log(nameArray);

    return nameArray;
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

function doForEach(){
    const mappedPeople = doMap();

    mappedPeople.forEach(person => {
        person.nameSize = person.name.length;
    });

    console.log(mappedPeople);
}

function doAge(){
    const age = starWars.results.map(person => {
        return{
            agePerson: person.birth_year
        };
    });
    console.log(age);

    return age;
}


function doReduce(){
    const totalAges = starWars.results.reduce((accumulator, current) =>{
        return accumulator + current.name;       
    }, 0)

    console.log(totalAges);
}

function doFind(){
    const found = starWars.results.find(person =>{
        return person.name === "Luke Skywalker"
    })

    console.log(found);
}


// Some retornará TRUE ou FALSE
function doSome(){
    const trySome = starWars.results.some(person =>{
        return person.name === "Darth Vader"
    });

    console.log(trySome);
}

/*
function doEvery(){
    const every = starWars.results.every(person =>{
        return person.name = "Rocky Balboa"
    });

    console.log(every);

}
*/

function doSort(){
    const mappedNames = starWars.results.map(person => {
        return {
            name: person.name
        };
    }).filter(person =>{
        return person.name.startsWith("O");
    })
    console.log(mappedNames);
}