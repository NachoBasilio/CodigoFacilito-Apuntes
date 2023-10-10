import "./main.css";
const app = document.getElementById('app');

const texto = document.createElement('h1');

texto.innerText = 'Hola Mundo';
//Agrega las clases text-3xl font-bold underline

texto.classList.add('text-3xl', 'underline');

app.appendChild(texto);