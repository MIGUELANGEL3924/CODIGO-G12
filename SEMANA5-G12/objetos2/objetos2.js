//objeto Math
//Math.pow
//Math.pow(base,exponente)
//console.log(Math.pow(2,2))
//console.log(Math.pow(2.4,5))

//Math.round,Math.floor,Math.ceil
//Math.round=redondea el numero decimal al entero mas proximo

//console.log(Math.round(6.45))
//console.log(Math.roundd(6.5))

// Math.floor = redondea el número decimal al entero de menor valor

//console.log(Math.floor(6.999))

// Math.ceil = redonde un número al entero más cercano hacia arriba

//console.log(Math.ceil(6.0001))

//Math.max, Math.min

//console.log(Math.max(1,2,3,4,5));

//console.log(Math.min(1,2,3,4,5));

//const numero =[1,2,3,4,5]
//console.log(Math.max(...numero)) 
//spread operator

//console.log(Math.random())

// Object.keys() nos devuelve un arreglo con el nombre de todas las propiedades de un objeto.

//const libro = {
   // autor: 'Borges',
   // genero: 'Policial',
   // año: 1990
  //}
  
  //const todasLasPropiedades = Object.keys(libro)
  //console.log(todasLasPropiedades)
  
  // Object.values() devuelve todos los valores de nuestro objeto
  
  //const libro = {
   // autor: 'Borges',
   // genero: 'Policial',
  //  año: 1990
  //}
  
 // const todasLasPropiedades = Object.values(libro)
  //console.log(todasLasPropiedades)

  //``alt+96

  // Métodos del objeto string

//"Codigo Frontend"
//'Codigo Frontend'

//const nombre = 'Mariana'
//const apellido = 'Navarro'
//const edad = 28

//const resultado = nombre + apellido + edad 
//console.log(resultado)

//const resultado2 = 'Hola ' + nombre + ' ' + apellido +  ' tu edad es ' + edad
//console.log(resultado2)

// Template string: una forma de concatenar cadenas de manera más sencilla

//const resultado3 = `Hola ${nombre} ${apellido} tu edad es ${edad}`
//console.log(resultado3)

//const resultado4 = `
//Hola ${nombre} ${apellido}
//tu edad es ${edad}
//`
//console.log(resultado4)
//tolowerCase, toUpperCase

const nombre = "Mariana"
console.log(nombre.toLowerCase())
console.log(nombre.toUpperCase())

// trim (elimina sólo los espacios en blanco al inicio y al final de la cadena)

const fruta = ' platano '
console.log(fruta.trim())

// includes = nos indica si una cadena de texto se encuentra dentro de otra cadena de texto, devuelve: true o false

const bootcamp = 'Fullstack Codigo'
console.log(bootcamp.includes('stack'))