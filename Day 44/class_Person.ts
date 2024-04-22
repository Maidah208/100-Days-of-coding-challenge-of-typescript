// Classs is a bluePrint of the objects.

export class person {
    personName: string

    constructor(name: string){
        this.personName = name
    }

    greet() {
        console.log(`Hello ${this.personName}`)
    }
}