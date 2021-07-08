const fs = require('fs');

fs.writeFile('./archivo2.txt','Este es un texto de prueba tambien conocido como placeholder 2, a la vez sobreescribe', function(error){
    if(error){
        console.error(error);
    }
    else {
        console.log('archivo generado con exito');
    }
})


fs.appendFile('./archivo2.txt','\nAñadimos esta data usando appenFile', function(error){
    if(error){
        console.error(error);
    }
    else {
        console.log('Data añadida exitosamente');
    }
})
