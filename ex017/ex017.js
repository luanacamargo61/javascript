function media(){
    var nr = document.getElementById("nr").value
    var nr2 = document.getElementById("nr2").value
    nr = parseInt(nr);
    nr2 = parseInt(nr2);
    for (contador = nr; contador < nr2; contador++) {
        if (contador % 2 != 0) {
           document.getElementById("resultados").innerHTML += `${contador} <br>`
        }
        }
    }