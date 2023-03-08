//Problema 6
//Escribe una función que reciba un número y devuelva el doble de ese número
// si es par o el triple de ese número si es impar.
const DobleTripleNum = (num6) =>{
    if(num6 % 2 ===0)return`El doble de ${num6} es ${num6*2}`
    if(num6 % 2 ===1)return`El triple de ${num6} es ${num6*3}`
}
console.log(DobleTripleNum(2))
console.log(DobleTripleNum(3))