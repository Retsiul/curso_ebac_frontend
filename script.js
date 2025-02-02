const form = document.getElementById("form-valid")
const user = document.getElementById('user')
const primeiraCred = document.getElementById('primeira-credencial');
const segundaCred = document.getElementById('segunda-credencial');
const mensagemDeValidacao = document.querySelector(".messege-sucess")

let formValido = false

function validaForm(primeiraCredencial, segundaCredencial) {

    const num1ComoArray = primeiraCredencial.split('');
    const num2ComoArray = segundaCredencial.split('');
    return num1ComoArray.length == 1 && num2ComoArray.length >= 2;


}

form.addEventListener("submit", function (e) {

    e.preventDefault();

    mensagemValida = `Olá <b>${user.value}</b>,suas credenciais foram aceitas,pode continuar!`;
    formValido = validaForm(primeiraCred.value, segundaCred.value)


    if (formValido) {

        mensagemDeValidacao.innerHTML = mensagemValida;
        mensagemDeValidacao.style.display = "block"

        user.value = ''
        user.placeholder = "Para um novo acesso digite seu nome"

        primeiraCred.value = 'null'
        primeiraCred.placeholder = "Para um novo acesso digite sua credencial simples"

        segundaCred.value = "null"
        segundaCred.placeholder = "Para um novo acesso digite sua credencial composta"

        document.querySelector('.message-error-1').style.display = 'none'
        document.querySelector('.message-error-2').style.display = 'none'

    }

    else {

        mensagemDeValidacao.style.display = "none"

    }

})

validacao1 = document.getElementById("primeira-credencial")

validacao1.addEventListener("keyup", function (e) {
    const tipoArray = validacao1.value.split('')
    const tipoBoleean = tipoArray.length == 1

    if (tipoBoleean) {

        const mensagem = document.querySelector('.message-error')
        mensagem.style.display = "none"

        const estiloErro = document.querySelector('.error-1')
        estiloErro.style.background = "none"
        estiloErro.style.bdowboxSha = "none"

        const estiloCerto = document.querySelectorAll('.credenciais').forEach(input => {
            input.style.background = ' #70787e48'
            input.style.boxShadow = ' 0px 0px 7px rgb(217, 223, 241)'
        })

        estiloCerto.style.display = "block"

    }

    else {

        const mensagem = document.querySelector('.message-error')
        mensagem.style.display = "block"

        const estiloErro = document.querySelectorAll('.error-1').forEach(input => {
            input.style.background = ' rgba(235, 1, 1, 0.359)'
            input.style.boxShadow = ' 0px 0px 7px rgb(235, 129, 129)'

        })
        estiloErro.style.display = "block"

    }

})

validacao2 = document.getElementById("segunda-credencial")

validacao2.addEventListener("keyup", function (e) {
    const tipoArray = validacao2.value.split('')
    const tipoBoleean = tipoArray.length >= 2

    if (tipoBoleean) {

        const mensagem = document.querySelector('.message-error')
        mensagem.style.display = "none"

        const mensagem2 = document.querySelector('.message-error-2')
        mensagem2.style.display = "none"

        const estiloErro = document.querySelector('.error-2')
        estiloErro.style.background = "none"
        estiloErro.style.bdowboxSha = "none"

        const estiloCerto = document.querySelectorAll('.credenciais').forEach(input => {
            input.style.background = ' #70787e48'
            input.style.boxShadow = ' 0px 0px 7px rgb(217, 223, 241)'
        })

        estiloCerto.style.display = "block"

    }

    else {

        const mensagem2 = document.querySelector('.message-error-2')
        mensagem2.style.display = "block"

        const estiloErro = document.querySelectorAll('.error-2').forEach(input => {
            input.style.background = ' rgba(235, 1, 1, 0.359)'
            input.style.boxShadow = ' 0px 0px 7px rgb(235, 129, 129)'

        })
        estiloErro.style.display = "block"

    }

})


























// ======================================================================================



















//     if (formValido) {
//         const mensagemDeSucesso = document.querySelector('.sucess-menseger')
//         mensagemDeSucesso.innerHTML = mensagemValida;
//         mensagemDeSucesso.style.display = "block"

//         nomeBeneficiario.value = '';
//         numConta.value = ' ';
//         valorDepo.value = ' ';
//     }

//     else {
//         document.querySelector('.erro-menseger').style.display = 'block'
//         nomeBeneficiario.style.border = 'solid red 1px '
//     }
// })

// nomeBeneficiario.addEventListener('keyup', function (e) {
//     console.log(e.target.value)
//     formValido = validaNome(e.target.value)

//     if (!formValido) {
//         // nomeBeneficiario.style.border = 'solid red 1px '
//         nomeBeneficiario.classList.add('error')
//         document.querySelector('.erro-menseger').style.display = 'block'
//         document.querySelector('.sucess-menseger').style.display = 'none'

//     }

//     else {
//         //  nomeBeneficiario.style.border = ' '
//         nomeBeneficiario.classList.remove('error')
//         document.querySelector('.erro-menseger').style.display = 'none'

//     }
// })



// console.log("hello");