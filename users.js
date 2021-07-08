var User = require('./user_module.js');
var person = new User();

//Imprimo objeto completo
console.log(person);

//Imprimo propiedad
console.log(person.nombre);

//Ejecuto método
console.log(person.fullname());