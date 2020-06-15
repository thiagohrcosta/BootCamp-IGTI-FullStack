class animal {
    constructor(name){
        this.name = name;
    }

    speak(){
        console.log(`${this.name} falando....`)
    }
}

class Dog extends Anmial{
    constructor(name, type){
        super(name);

        this.type = type;
    }

    speak(){
        console.log(`${this.name} (${this.type}) latindo...`)
    }
}

const animal = new animal('Totó');
const dog = new Dog('Jack', 'Poodle');

animal.speak();

