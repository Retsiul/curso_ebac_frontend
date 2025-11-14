function Veiculo(velocidade,rodas,tipo){
    this.velocidade = velocidade
    this.rodas = rodas
    this.tipo = tipo

}

function Carro(nome,velocidade,rodas,tipo){
    this.nome=nome
    Veiculo.call(this,velocidade,rodas,tipo)
}

const toyota = new Carro ("Toyota","150Km/h",4,"terrestre")

console.log(toyota)

function Moto(nome,velocidade,rodas,tipo){
    this.nome=nome
    Veiculo.call(this,velocidade,rodas,tipo)
}

const fazer = new Moto("Fazer","120Km/h",2,"terrestre")
fazer.cilindradas="250"
console.log(fazer)

function Aviao(nome,velocidade,rodas,tipo){
    this.nome=nome
    Veiculo.call(this,velocidade,rodas,tipo)
}

const boeing = new Aviao ("Boeing 747 ","920 km/h",18,"aéreo" )


console.log(boeing)