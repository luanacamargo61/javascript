function media(){
    var nome = document.getElementById("usuario").value
    var idade = document.getElementById("idade").value

    if (idade >= 16 && idade <18 || idade >=70) {
        document.getElementById("resultados").innerHTML = `<p class="verde"> ${nome} seu voto é opcional &#x1F44F<br></p><br>`
    } else if (idade < 16) {
        document.getElementById("resultados").innerHTML = `<p class="vermelho"> ${nome} não pode votar &#x1F44F<br></p><br>`
    } else {
        document.getElementById("resultados").innerHTML = `<p class="vermelho"> ${nome} seu voto é obrigatório &#x1F44F<br></p><br>`
    }
}