const questionArray = [
    "Qual o meio de comunicação é a forma que temos de nos comunicar-mos com outras pessoas:\n\n(A) Rádio\n(B) TV-Digital\n(C) NTICs\n(D) Internet\n",
    "Quantas tiras há na bandeira dos Estados Unidos:\n\n(A) 13\n(B) 7\n(C) 14\n(D) 9\n",
    "Quantos dias são necessários para a Terra orbitar o sol:\n\n(A) 366\n(B) 354\n(C) 355\n(D) 365\n",
    "Atualmente, quantos elementos químicos a tabela periódica possui:\n\n(A) 112\n(B) 118\n(C) 109\n(D) 108\n",
    "Qual é a rede social mais usada no mundo:\n\n(A) Instagram \n(B) Tiktok \n(C) Twitter \n(D) Facebook \n",
    "Quanto tempo a luz do Sol demora para chegar à Terra:\n\n(A) 8 minutos \n(B) 1 dia \n(C) Segundos \n(D) 12 Minutos \n",
    "Qual é o maior músculo do corpo humano:\n\n(A) Biceps \n(B) Coxa \n(C) Abdômen \n(D) Peitoral \n",
    "Qual a velocidade da luz:\n\n(A) 300 000 000 metros por segundo (m/s) \n(B) 299 792 458 metros por segundo (m/s) \n(C) 199 792 458 metros por segundo (m/s) \n(D) 30 000 000 metros por segundo (m/s) \n",
    "Qual destes países é transcontinental:\n\n(A) Marrocos \n(B) Groenlândia \n(C) Filipinas \n(D) Rússia \n",
    "Qual foi a primeira religião que surgiu no mundo:\n\n(A) Hinduísmo  \n(B) Cristianismo  \n(C) Budismo \n(D) Islamismo \n",
    "Qual o maior animal terrestre:\n\n(A) Baleia Azul  \n(B) Girafa  \n(C) Urso Polar \n(D) Elefante Africano \n",
    "Quem é ou foi considerado o(a) maior artista do mundo:\n\n(A) Stevie Wonder \n(B) Madonna  \n(C) Michael Jackson \n(D) Elvis Presley \n",
    "Qual o livro mais vendido no mundo após a Bíblia:\n\n(A) O Senhor dos Anéis \n(B) Harry Potter \n(C) Dom Quixote \n(D) Um Conto de Duas Cidades \n",
    "Qual dos impérios a seguir não possui um idioma escrito:\n\n(A) Inca\n(B) Azteca\n(C) Egípcio\n(D) Romano\n",
    "Qual é o menor país do mundo:\n\n(A) Mônaco\n(B) Vaticano\n(C) Nauru\n(D) Ilhas Marshall\n",
]
const answerArray = ["D", "A", "D", "B", "D", "A", "B", "B", "D", "A", "C", "C", "C", "A", "B"]
let questionNum = 1
let countQuestion = 0
let score = 0

const maxTime = parseInt(prompt("Bem vindo ao Quiz ! Entre 2 a 15, deseja responder quantas questões:\n"))
if (maxTime < 2 || maxTime > 15) {
    alert("Escolha inválida ! Escolha um número entre 2 a 15.")
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

if (score >= 1) {
    alert(`Parabéns, você acertou ${countQuestion}/${maxTime} questões e teve uma média de ${avg.toFixed(2)}.`)
} else {
    alert("Infelizmente você não acertou nenhuma questão. Tente novamente !")
}