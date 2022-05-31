import validator from "./validator.js";

//Función para cambiar vistas al presionar btn comprar
//el documento entregame el elemento con el id 'secondView' 

document.getElementById("secondView").style.display = "none";
document.getElementById("shoppingCart").style.display = "block";
// }
// console.log(document.getElementById('shoppingCart'))

function validacion() {
  document.getElementById("secondView").style.display = "block";
  document.getElementById("shoppingCart").style.display = "none";
}

//variable para que al hacer 'click' se cambie la vista
let arrayButtons = document.querySelectorAll(".btnComprar");
arrayButtons.forEach((element) => {
  element.addEventListener("click", () => {
    //    console.log('e: ', event.target);
    validacion();
  });
});

//Almacenar datos de los inputs
const btnValidator = document.getElementById("btnVal");

//Se llama a las funciones que validan los datos
btnValidator.addEventListener("click", function () {
  let cardNumbers = document.getElementById("cardNumber").value;
//Si cardNumbers es distinta de "" = true/Tarjeta válida
//De lo contrario arroja "Tarjeta inválida"
  if (cardNumbers !== "") {
    let validators = validator.isValid(cardNumbers);
    if (validators == true) {
      //documento entregame el elemento con el id "result". El innerHTML de este elemento es "tarjeta válida"
      document.getElementById("result").innerHTML = "Tarjeta válida";
    } else {
      document.getElementById("result").innerHTML = "Tarjeta inválida";
    }
  } else {
    alert("Ingresa el número de tu tarjeta por favor");
  }
  //Función maskify
  document.getElementById("cardNumber").value = validator.maskify(cardNumbers);
  // console.log(validator.maskify(cardNumbers))
  // console.log('cardNumbers', cardNumbers)
});
