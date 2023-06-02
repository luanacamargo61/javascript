var ListaFilmes = []

function filme(){
    var nomeFilme = document.getElementById("film").value
    var imagemFilme = document.getElementById("image").value
    
    var filme = {
        nome: nomeFilme,
        link: imagemFilme
    }
    ListaFilmes.push(filme)
    

       
        for (var i in ListaFilmes){
        document.getElementById("lista").innerHTML += `${ListaFilmes[i].nome}<br>  <img src="${ListaFilmes[i].link}"> <br>`
       
    }
}
function sortea(){
    var filmalea = parseInt(Math.random() * ListaFilmes.length)
    document.getElementById("lista").innerHTML +=
    `
    <div>
    ${ListaFilmes[filmalea].nome}<br>
    <img src="${ListaFilmes[filmalea].link}"> <br>
    </div>
    `
}
function validarCadastro(nomeFilme, imagemFilme){
    if (nomeFilme != '' && imagemFilme != ''){
        return true
    }else{
        return false
    }
}