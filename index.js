//Hola Mundo
console.log("Hola Mundo");


// Creamos un array de frutas
var Lang = ['Pera', 'Banana', 'Limones'];


// Muestro las frutas
console.log(Lang);


// Verificamos cuantos items tiene el array
var cant = Lang.length
console.log(cant);


// Buscamos la fruta que esta antes de Banana
var found = Lang.find(element => element = 'Banana');
console.log(found);


// Agregamos una nueva fruta 
Lang.push('Naranja');
console.log(Lang);
// expected output: Array [ 'java', 'c', 'python', 'node' ]

Lang.unshift('Papaya');
console.log(Lang);