//Se declara validator como un objeto, una llave de ese objeto es isValid la otra es maskify.
const validator = {
  isValid: function (creditCardNumber) {
    const splitNumbers = creditCardNumber.split("");
    const reverseNumbers = splitNumbers.reverse("");
    console.log(creditCardNumber);
    console.log(splitNumbers);
    console.log(reverseNumbers);
   

    //   For para ver las posisciones pares
    //un ciclo for para definir las posiciones y el if para hacer el algoritmo de Luhn
    for (let i = 0; i < reverseNumbers.length; i++) {
      if (i % 2 !== 0) {
        reverseNumbers[i] = reverseNumbers[i] * 2;
        if (reverseNumbers[i] > 9) {
          reverseNumbers[i] = reverseNumbers[i] - 9;
        }
      }
    }

    // variable para sumar las posiciones pares e impares
    const reducer = reverseNumbers.reduce(
      (accumulator, curr) => accumulator + +curr,
      0
    );

    let reducerValue = reducer;

    if (reducerValue % 10 == 0) {
      return true;
    } else {
      return false;
    }
  },

  //función maskify para enmascarar números ingresados en el input 
  maskify: function (creditCardNumber) {
    console.log("ver:", creditCardNumber);
    return creditCardNumber
      .slice(0, [-4])
      .replace(/[0-9/a-z]/g, "#")
      .concat(creditCardNumber.slice(-4, creditCardNumber.length));
  },
};

export default validator;
