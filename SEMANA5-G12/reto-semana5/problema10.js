//Problema 10
//A partir del siguiente array que se proporciona:
//Determinar cuales con los tipos de datos que contiene el array. Utilizar funciones para resolverlo.
const valores = [true, 5, false, "hola", "amigos", 20, 3.4, 10];
const tipoDeDato=(array) =>{
    for(let dato in array){
        console.log(`El tipo de dato de ${array[dato]} es ${typeof(array[dato])}`)
    }
}
tipoDeDato(valores)