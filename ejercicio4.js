
// de minuscula a mayuscula
function soyMayuscula(callback) {
    callback(" PejeLagarto");
}

soyMayuscula(function(valorSoyMayuscula){
    console.log(valorSoyMayuscula.toUpperCase());   // mayuscula 
});


// de mayuscula a minuscula
function soyMinuscula(callback) {
    callback(" UNIDAD ");
}

soyMinuscula(function(valorSoyMinuscula){
    console.log(valorSoyMinuscula.toLowerCase());   // minuscula
});