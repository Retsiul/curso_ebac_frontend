const alunos = [
    { nome: 'Luis', nota: 6 },
    { nome: 'Maria', nota: 5 },
    { nome: 'Rafael', nota: 7 },
    { nome: 'Fernando', nota: 5 },
    { nome: 'José', nota: 8 },
    { nome: 'Leonardo', nota: 7 },
    { nome: 'Lucas', nota: 4 }

]

const media = passou=>passou.nota>=6
const filtro = alunos.filter(media)
console.log(filtro)