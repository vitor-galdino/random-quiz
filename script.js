import { questionArray, answerArray } from "./questions.js"

let questionNum = 1
let countQuestion = 0
let score = 0

const maxTime = parseInt(prompt("Bem vindo ao Quiz ! Entre 2 a 25, deseja responder quantas questões:\n"))
if (maxTime < 2 || maxTime > 25) {
    alert("Escolha inválida ! Escolha um número entre 2 a 25.")
    maxTime = undefined
}
for (let i = 0; i < maxTime; i++) {
    let randomNum = parseInt(Math.random() * questionArray.length)
    let userAnswer = prompt(`${questionNum++})  ${questionArray[randomNum]}`)
    if (userAnswer.toUpperCase() == answerArray[randomNum]) {
        alert("Resposta correta!")
        countQuestion++
        score += 10
    }
    else {
        alert("Resposta errada.")
    }
    questionArray.splice(randomNum, 1)
    answerArray.splice(randomNum, 1)
}
const avg = score / maxTime

if (avg % 1 === 0 && score >= 1) {
    alert(`Parabéns, você acertou ${countQuestion}/${maxTime} questões e teve uma média de ${Math.trunc(avg)}.`)
} else if (avg % 1 !== 0 && score >= 1) {
    alert(`Parabéns, você acertou ${countQuestion}/${maxTime} questões e teve uma média de ${avg.toFixed(2)}.`)
} else {
    alert("Infelizmente você não acertou nenhuma questão. Tente novamente !")
}