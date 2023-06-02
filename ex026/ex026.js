listaLogin = JSON.parse(localStorage.getItem('bdlogin'))
console.log(listaLogin);


function logar(){
    var usuario = document.getElementById("user").value
    var bruno = document.getElementById("senha").value
    
    var mona = {
        pessanha: usuario,
        picanha: bruno
};
var valido = false;
for (var i = 0; i < listaLogin.length; i++){
    if (mona.pessanha == listaLogin[i].user && mona.picanha == listaLogin[i].pass){
        valido = true
    }
}
if (valido){
    document.getElementById("lista").innerHTML = `login valido!`;
}else {
    document.getElementById("lista").innerHTML = `login invalido!`; 
    }
}