// assets/js/main.js

window.onload = () => {
  generarCartaAleatoria();
};

let card_head = document.querySelector('#header');
let card_footer = document.querySelector('#footer'); 
let card_number = document.querySelector('#number');
let boton_cargar_carta = document.querySelector('.button_new_card');
boton_cargar_carta.addEventListener('click', () => {
  generarCartaAleatoria();
});

function generarCartaAleatoria() {
  card_head.className = '';
  card_footer.className = '';
  let pinta = generarPintaAleatoria();
  let color ="";

  switch(pinta){
    case "spade":
    case "club":
      color = "black";
    break;
    case "heart":
    case "diamond":
       color = "red";
    break;
  }
  card_number.textContent = generarNumeroAleatorio(pinta); // Añadir el número
  card_number.className = 'number ' + color; // Añadir clase de color al número según la pinta
  card_head.className = pinta;
  card_footer.className = pinta + ' inverse';
  let temporizador = generaTemporizador();
  

}

function generarPintaAleatoria() {
  let num_aleatorio_pinta = Math.floor(Math.random() * 4) + 1; // Genera un número entre 1 y 4
  let pinta;
  switch (num_aleatorio_pinta) {
    case 1:
      pinta = 'heart';
      break;
    case 2:
      pinta = 'diamond';
      break;
    case 3:
      pinta = 'spade';
      break;
    case 4:
      pinta = 'club';
      break;
  }
  return pinta;
}

function generarNumeroAleatorio(pinta) {
  let numero = Math.floor(Math.random() * 13) + 1; // Genera un número entre 1 y 13
  switch (numero) {
    case 1:
      return 'A'; // Asigna 'A' para el 1
    case 11:
      return 'J'; 
    case 12:
      return 'Q'; 
    case 13:
      return 'K'; 
    default:
      return numero; // Para otros números, simplemente devuelve el número
  }
}
//console.log(setInterval(generarCartaAleatoria, 10000));

function generaTemporizador(){
  setInterval(generarCartaAleatoria, 10000);
  
  
}