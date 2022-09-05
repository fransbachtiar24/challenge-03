class Animal {
    constructor(name, age, legs, species, status, master){
        this.name = name;
        this.age = age;
        this.legs = legs;
        this.species = species;
        this. status = status;
        this.master = master;
    }

    introduce() {
        console.log (`nama ${this.name}, umur ${this.age}, kaki ${this.legs}, spesies ${this.species}, status ${this.status}. pemilik ${this.master}\n`);
    }
    GreetMaster() {
        console.log (`nama ${this.name}, umur ${this.age}, kaki ${this.legs}, spesies ${this.species}, status ${this.status}, pemilik ${this.master}.`);
    }
}

class Shark extends Animal {
    constructor() {
        super();
        this.name = 'Hiu'
        this.age = 20
        this.legs = 0
        this.species = 'Shark'
        this.status = 'berenang'
    }
}

const ikan = new Shark()
ikan.introduce()

class Cat extends Animal {
    constructor() {
        super();
        this.name = 'Mbull'
        this.age = 22
        this.legs = 4
        this.species = 'Anggora'
        this.status = 'Vivipar (Beranak)'
    }
}

const kucing = new Cat()
kucing.introduce()


class Dog extends Animal {
    constructor() {
        super();
        this.name = 'Moggy'
        this.age = 20
        this.legs = 4
        this.species = 'bulldog'
        this.status = 'beranak'
        this.master = "Ocean VIpor"
    }
}

const anjing = new Dog()
anjing.introduce()