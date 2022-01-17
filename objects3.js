// const createApplication = require("express/lib/express")

const pet = {
    name: "Betty",
    typeOfPet: "Cat",
    age: 4,
    colour: "Calico",
    
    eat: () => {
    console.log(`${this.name} + "is eating.`);
    },

    drink: function() {
    console.log(`${this.name} "is drinking.`);
    },

};

pet.drink();

pet.eat();