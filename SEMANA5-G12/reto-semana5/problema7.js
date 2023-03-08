//Problema 7
//Escribir una funcion que calcule el factorial de un número entero n 
//es una operación matemática que consiste en multiplicar todos los factores.
//n x (n-1) x (n-2) x ... 
//Así, el factorial de 5 es igual a:
//5! = 5 x 4 x 3 x 2 x 1 = 120
const fact = (num7) => {
let n=num7
for (let i=1;i<num7;i++){
    n=n*i
}
return `El factorial de ${num7} es ${n}`
}
console.log(fact(5))