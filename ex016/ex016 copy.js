function media(){
    var nr = document.getElementById("nr").value
    nr = parseInt(nr);
    var contador = 1

for (var contador = 1; contador<=10; contador++){
    var mult = contador * nr 
    document.getElementById("resultados").innerHTML += `${nr} x ${contador} = ${mult} <br>`
}
}
