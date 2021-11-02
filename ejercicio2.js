
function queSoy(callback) {
    callback("la variable es de tipo "+ (typeof('La vida en rosa'))+ " y su contenido es: La vida en rosa ");
}
queSoy(function(valorQueSoy){
    console.log(valorQueSoy);
});

function dimeQueSoy(callback) {
    callback("la variable es de tipo "+(typeof(3749572016))+ " y su contenido es: " + 3749572016);
}
dimeQueSoy(function(valordimeQueSoy){
    console.log(valordimeQueSoy);
});

function soyQue(callback) {
    callback("la variable es de tipo "+(typeof(true))+ " y su contenido es: " + true);
}
soyQue(function(valorQue){
    console.log(valorQue);
});






