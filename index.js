const prompt = require('prompt-sync')({sigint: true});
const Persona = require("./src/clase.js");

function pesoIdeal(IMC, objeto){
  if(IMC == 1){
    console.log(objeto + " Peso normal");
  }else if (IMC == -1){
    console.log(objeto + "Falta de peso.");
  }else{
    console.log(objeto + "Sobrepeso");
  }
}

function esMayorDeEdad(objeto, respuesta){
  respuesta ? console.log(objeto + " es mayor de edad.") : console.log(objeto + " no es mayor de edad.");
}


let ciclo = true;

//Input por teclado
const name = prompt('Ingresa tu nombre: ');
const edad = prompt('Ingresa tu edad: ');
const sexo = prompt('Ingresa tu sexo (H: hombre, M: mujer): ');
const peso = prompt('Ingresa tu peso: ');
const altura = prompt('Ingresa tu estatura: ');

//Instanciando objetos
let objeto1 = new Persona(name, edad, sexo, peso, altura);
let objeto2 = new Persona(name, edad);
let objeto3 = new Persona();

//Ingresando los datos faltantes para el objeto2
const sexoObjeto2 = prompt('Ingresa el sexo del objeto2: ');
const pesoObjeto2 = prompt('Ingresa el peso del objeto 2: ');
const alturaObjeto2 = prompt('Ingresa la estatura del objeto 2: ');
objeto2.sexo = sexoObjeto2;
objeto2.peso = pesoObjeto2;
objeto2.altura = alturaObjeto2;

//Ingresando los datos para el objeto3
const nameObjeto3 = prompt('Ingresa el nombre del objeto 3: ');
const edadObjeto3 = prompt('Ingresa la edad del objeto 3: ');
const sexoObjeto3 = prompt('Ingresa el sexo del objeto 3: ');
const pesoObjeto3 = prompt('Ingresa el peso del objeto 3: ');
const alturaObjeto3 = prompt('Ingresa la estatura del objeto 3: ');
objeto3.name = sexoObjeto3;
objeto3.edad = pesoObjeto3;
objeto3.sexo = sexoObjeto3;
objeto3.peso = pesoObjeto3;
objeto3.altura = alturaObjeto3;

//Comprobando peso pesoIdeal
pesoIdeal(objeto1.calcularIMC(), "objeto1");
pesoIdeal(objeto2.calcularIMC(), "objeto2");
pesoIdeal(objeto3.calcularIMC(), "objeto3");

//Comprobando edad
esMayorDeEdad("objeto1", objeto1.esMayorDeEdad());
esMayorDeEdad("objeto2", objeto2.esMayorDeEdad());
esMayorDeEdad("objeto3", objeto3.esMayorDeEdad());

//Mostrando informacion
objeto1.toString();
objeto2.toString();
objeto3.toString();

while(ciclo){
  let bandera = prompt('Teclea la letra s y enter para salir: ');
  if(bandera==="s"){
    ciclo = false;
  }
}
