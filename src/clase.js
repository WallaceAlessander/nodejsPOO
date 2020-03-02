module.exports = class Persona {

  //Constantes
  #Sexo = {
    H: 'H',
    M: 'M'
  }
  #IMC = {
    faltaDePeso: -1,
    pesoNormal: 0,
    sobrepeso: 1
  }

  //Atributos
  #nombre = null;
  #edad = null;
  #NSS = null;
  #sexo = null;
  #peso = null;
  #altura = null;

  //constructor
  constructor(nombre, edad, sexo, peso, altura, NSS){
    this.#nombre = nombre || "";
    this.#edad = edad || 0;
    this.#sexo = sexo || this.#Sexo.H;
    this.#peso = peso || 0;
    this.#altura = altura || 0;
    this.#NSS = NSS || this.#generaNSS;

  }

  //Metodos
  calcularIMC(){
    let pesoIdeal = (this.#peso / (Math.pow(this.#altura, 2)));
    return this.#sexo == this.#Sexo.H ? (pesoIdeal < 20 ? this.#IMC.faltaDePeso : (pesoIdeal > 25 ? this.#IMC.sobrepeso : this.#IMC.pesoNormal))
                                  : (pesoIdeal < 19 ? this.#IMC.faltaDePeso : (pesoIdeal > 24 ? this.#IMC.sobrepeso : this.#IMC.pesoNormal));
  }

  esMayorDeEdad(){
    return this.#edad > 18 ? true : false;
  }

  comprobarSexo(sexo){
    return this.#sexo == sexo ? true : false;
  }

  toString(){
    return `Nombre: ${this.#nombre}, Edad: ${this.#edad}, NSS: ${this.#NSS}, Sexo: ${this.#sexo}, Peso: ${this.#peso}, Altura: ${this.#altura}`;
  }

  #generaNSS = (function() {
    const alphaNumeric = 'abcdefghijklmnñopqrstuvwxyz0123456789';
    let auxNSS = '';
    for(var i = 0; i<8; i++){
      auxNSS += alphaNumeric[Math.floor(Math.random() * alphaNumeric.length)];
    }
    return auxNSS;
  })();

  //set
  set name(name){
    this.#nombre = name;
  }

  set edad(edad){
    this.#edad = edad;
  }

  set sexo(sexo){
    this.#sexo = sexo;
  }

  set peso(peso){
    this.#peso = peso;
  }

  set altura(altura){
    this.#altura = altura;
  }

}
