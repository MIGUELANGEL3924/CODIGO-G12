function esVocal(letra) {
    //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
    //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
    //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
    // Si no es vocal, tambien debe devolver "Dato incorrecto".
    //Escribe tu código aquí
  
    if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
      return 'Es vocal';
    } else if (letra.length >= 2) {
      return 'Dato incorrecto, muy largo el texto'
    } else {
      return 'Dato incorrecto'
    }
  }
  
  console.log(esVocal('e'))
  console.log(esVocal('x'))
  console.log(esVocal('ae'))