var Operaciones = require('./calculator.js');
var operaciones = new Operaciones();
console.log(operaciones.sum());
console.log(operaciones.res());
console.log(operaciones.mul());
console.log(operaciones.div());

const fs = require('fs');
fs.appendFile('./log.txt','Sumar = 4 + 2 =' + " " + operaciones.sum() , function(error){
    if(error){
        console.error(error);
    }
    else {
        console.log('Data añadida exitosamente');
    }
})
fs.appendFile('./log.txt','\nRestar = 4 - 2 =' + " " + operaciones.res() , function(error){
    if(error){
        console.error(error);
    }
    else {
        console.log('Data añadida exitosamente');
    }
})
fs.appendFile('./log.txt','\nMultiplicar = 4 * 2 =' + " " + operaciones.mul() , function(error){
    if(error){
        console.error(error);
    }
    else {
        console.log('Data añadida exitosamente');
    }
})
fs.appendFile('./log.txt','\nDividir = 4 / 2 =' + operaciones.div() , function(error){
    if(error){
        console.error(error);
    }
    else {
        console.log('Data añadida exitosamente');
    }
})