var Listacarros = []
//Declarando um objeto e informando atributos
//Todo objeto declarado com {}
var carro = {
    ano: '2020',
    modelo: 'Gol',
    marca:'vw'
}
//Para exibir o atributo do objeto faço da seguinte forma 
//objeto.atributo
console.log (carro.ano + ' - ' + carro.modelo)

//Adicionando o objeto carro ao vetor Listacarros
Listacarros.push(carro)

console.log (Listacarros.length)

//Novo objeto
carro = {
    ano: '2022',
    modelo: 'Onix',
    marca:'GM'
}
//Adicionando novo objeto carro ao vetor Listacarros
Listacarros.push(carro)
console.log (Listacarros)
//Exibindo uma lista apenas com o modelo do carro
for (var pos in Listacarros){
    //Acessando o indice do vetor e o atributo modelo
    console.log (Listacarros[pos].modelo)
}
