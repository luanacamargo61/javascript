function media(){
    var filmes = ['Aladdin', 'Enrolados', "A Princesa e o Sapo"]
    for (var i = 0; i < filmes.length; i++){
        document.getElementById("resultados").innerHTML += `Posição no vetor ${i} - ${filmes[i]}<br>`
    }
}