const h1 = document.querySelector('h1');
// const parrafo1 = document.querySelectorAll('p');
// const parrafo2 = document.querySelector('.parrafo');
// const parrafo3 = document.querySelector('#id');
const form = document.querySelector('#form');
const input = document.querySelector('#input');
const input1 = document.querySelector('#input1');
const boton = document.querySelector('#btn');
const resultado = document.querySelector('#result');



const calcular = (event) => {
    event.preventDefault();
    console.log(event);
    result.innerHTML = parseInt(input.value) + parseInt(input1.value);
    return parseInt(input.value) + parseInt(input1.value)
}

form.addEventListener('submit', calcular);

console.log(input.value);

// console.log({h1, parrafo1, parrafo2, parrafo3, input});

// h1.innerHTML = 'pedo<br>shuco'; // escribe html
// h1.innerText escribe texto, no html
// h1.setAttribute('pantalla', 'fvkc'); // agrega un nuevo atributo
// h1.classList.add('negga'); // aggrega una nueva clase, pero no quita la anterior
// h1.classList.remove('jola'); // remueve la clase
// classList.toggle mira si contiene la clase y si la tiene la quita y si no la agrega
// classList.contains mira si contiene la clase y devuelve true o false

// input.value = '1234' // el .value accede al valor

// let image = document.createElement('img'); // crea un nuevo elemento html en el dom
// image.setAttribute('src', 'https://i.pinimg.com/280x280_RS/00/e5/42/00e5427a361f7897e669711ba8667d04.jpg'); // le pusimos el atributo
// parrafo3.replaceWith(image); // append child agrega el elemnto creado en donde queramos