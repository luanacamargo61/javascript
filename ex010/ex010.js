function media(){
    var usuario = document.getElementById("usuario").value
    var senha = document.getElementById("senha").value

    if (senha =="123" && usuario == "adm"){
        document.getElementById("resultados").innerHTML = `Login concluido`
    } else{
        document.getElementById("resultados").innerHTML = `Falha ao logar`
    }
}