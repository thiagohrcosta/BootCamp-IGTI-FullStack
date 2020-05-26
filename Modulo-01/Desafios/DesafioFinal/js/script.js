let tabPeople = null;
let tabPeopleFind = null;

let allPeople = [];


window.addEventListener("load", ()=>{

    tabPeopleFind = document.querySelector("#tabPeopleFind");


});

async function fetchPeople(){
    const res = await fetch("https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo");
    const json = await res.json();
    allPeople = json.map(people =>{
        const{
            id,
            name, 
            picture, 
            age, 
            gender
        } = people;

        return{
            id: username,
            name: name.firstName + "" + name.surName,
            picture,
            age: dob.age,
            gender
        }

    });
    
    console.log(people);
    render();
}

function render(){
    renderPeopleList();

}

function renderPeopleList(){
    
    let peopleHTML = "<div>";

    allPeople.forEach(people => {
        const {name, picture, age, gender} = people;
        
        const peopleHTML = `
            <div> class="people">
            
            <div>
                <a id="${id} class="waves-effect waves-light btn>+</a>
            </div>

            <div>
                <img src="${picture}">
            </div>

            <div>
                <ul>
                    <li>${name}</li>
                    <li>${age}</li>
                </ul>
            </div>
        `;

        peopleHTML =+ "</div>";

        tabPeopleFind.innerHTML = peopleHTML;


    });
}
