// import validator from './validator.js';

//Función para cambiar vistas al presionar btn comprar
console.log("hola como estás?")
//function bienvenida () {
 document.getElementById('secondView').style.display = 'none';
 document.getElementById('shoppingCart').style.display = 'block';
// }
console.log(document.getElementById('shoppingCart'))

function validacion (){
    document.getElementById('secondView').style.display = 'block';
    document.getElementById('shoppingCart').style.display = 'none';
}

let arrayButtons = document.querySelectorAll('.btnComprar')
arrayButtons.forEach(element => {
   element.addEventListener('click', (event)=>{
       console.log('e: ', event.target);
       validacion()
   })
});

//función para almacenar datos de los inputs


