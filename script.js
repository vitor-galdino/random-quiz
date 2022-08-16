const questionArray = [
    "Qual o meio de comunicação é a forma que temos de nos comunicar-mos com outras pessoas?\n\n(A) Rádio\n(B) CD-ROM\N(C) TV-Digital\n(D) NTICs\n(E) Internet\n",
    "Quantas tiras há na bandeira dos Estados Unidos?\n\n(A) 13\n(B) 7\n(C) 14\n(D) 9\n(E) 16\n",
    "Quantos dias são necessários para a Terra orbitar o sol?\n\n(A) 366\n(B) 354\n(C) 355\n(D) 365\n(E) 364\n",
]
const answerArray = ["E", "A", "D"]
let countQuestion = 0
let score = 0

const maxTime = parseInt(prompt("Bem vindo ao Quiz ! Entre 2 a 3, deseja responder quantas questões?\n"))
if (maxTime < 2 || maxTime > 3) {
    alert("Escolha inválida ! Escolha um número entre 2 a 3.")
    maxTime = undefined
}
for (let i = 0; i < maxTime; i++) {
    let randomNum = parseInt(Math.random() * questionArray.length)
    let userAnswer = prompt(questionArray[randomNum])
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

if (score >= 1) {
    alert(`Parabéns, você acertou ${countQuestion}/${maxTime} questões e teve uma média de ${avg.toFixed(2)}.`)
} else {
    alert("Infelizmente você não acertou nenhuma questão. Tente novamente !")
}