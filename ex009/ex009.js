function media(){
    var nome = document.getElementById("nome").value
    var num1 = document.getElementById("nota1").value
    num1 = parseInt(num1);

    if (num1 >=18){
        document.getElementById("resultados").innerHTML += `você pode tirar sua CNH ${nome} <br> <img class="imagem" src="/Nova-CNH_2.jpg">`
    } else{
        document.getElementById("resultados").innerHTML += `você não pode tirar sua CNH<br> <img class="imagem" src="/Nova-CNH_2.jpg">`
    }
}