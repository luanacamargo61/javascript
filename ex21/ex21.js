function media (){
    var nome = document.getElementById("nome").value 
    var filmes =[]

    filmes.push(nome)
    for (var i =0; i < filmes.length; i++){
        document.getElementById("resultados").innerHTML += `${filmes[1]}<br>`
    }
}
function novo(){
    document.getElementById("resultados").innerHTML =""
    nr = parseInt(Math.random() * 100)
}