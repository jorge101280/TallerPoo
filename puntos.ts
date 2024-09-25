//crear clase persona con nombre, edad y metodo saludar que imprima “Persona: Tú nombre es xxxx y tienes xx años”
class Persona {
    nombre: string;
    edad: number;
    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar() {
        console.log(`Persona: Tú nombre es ${this.nombre} y tienes ${this.edad} años`);
    }
}




