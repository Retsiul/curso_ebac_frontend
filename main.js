const form = document.getElementById("form")
let linhas = ""
const nome = document.getElementById("nome")
const ddd = document.getElementById("ddd")
const num = document.getElementById("num")

form.addEventListener("submit", function (e) {
    e.preventDefault()

    verificarTipo()

    let linha = "<tr>"
    linha += `<td>${nome.value}</td>`
    linha += `<td>(${ddd.value})-${num.value}</td>`

    linha += "</tr>"
    linhas += linha

    const corpoTabela = document.querySelector("tbody")
    corpoTabela.innerHTML = linhas

    nome.value = ""
    ddd.value = ""
    num.value = ""
})

function verificarTipo() {

    if (isNaN(num.value) || num.value.trim() === "") {
        document.getElementsById("button").disbled == true
    }
}

function dadosValidos() {

    num.addEventListener("keyup", function (e) {
        if (isNaN(num.value)) {

            const styleErro = document.querySelector(".button")
            styleErro.style.backgroundColor = " rgb(255, 8, 8)"
            styleErro.style.display = "block"
            const mesError = document.querySelector(".error")
            mesError.style.display = "block"
        }

        else {
            const styleValida = document.querySelector(".valid")
            styleValida.style.display = "block"
            styleValida.style.backgroundColor = "rgba(7, 87, 156, 0.849)"
            const mesError = document.querySelector(".error")
            mesError.style.display = "none"
        }
    })
}

dadosValidos()