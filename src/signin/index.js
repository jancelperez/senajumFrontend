var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');

page('/signin', function(ctx, next){
    title('Senagram - signin')
    //busca en el DOM osea en el navegador el elemto que tenga el id main-container
    var main = document.getElementById('main-container1');

    //appendChild:convierte el en hijo de main main es el contenedor y dentro del contenedor va el
    //empty: vacia el contenido de main y despues  ingresa el contendido de el template dentro de main 
    empty(main).appendChild(template);
})