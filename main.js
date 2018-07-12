window.onload=function(){
    let inputWord = document.querySelector("#word-box")
    let buttonWord = document.querySelector("#submit-word")
    let inputLetter = document.querySelector("#letter-box")
    let buttonLetter = document.querySelector("#submit-letter")
    let guessedLetters = document.querySelector("#guessedLetters")
    let stick = document.querySelector('#stick')

    buttonWord.addEventListener('click', function(event) {
        let winScore = 0
        let usedLetterArray = []
        let lossScore = 0
        stick.src = ""
        let guessedLettersArray = []
        let inputWordArray = inputWord.value.split("")
        for (i = 0; i < inputWordArray.length; i++) {
            let box = document.createElement('div')
            let boxLetter = inputWordArray[i]
            box.className = 'box'
            document.querySelector("#main").appendChild(box)
            if (inputWordArray[i] === " ") {
                box.innerHTML = " "
                winScore = winScore + 1
            } else {
                box.innerHTML = "___"
            }
            buttonLetter.addEventListener('click', function(event){
                if (inputLetter.value === boxLetter && inputLetter.value != usedLetterArray) {
                    usedLetterArray.push(inputLetter.value)
                    box.innerHTML = boxLetter
                    winScore = winScore + 1
                    lossScore = lossScore - (inputWordArray.length - 1)
                    if (winScore === inputWordArray.length) {
                        alert("Winner!")
                    }
                } else {
                    if (inputLetter.value === boxLetter){
                        usedLetterArray.push(inputLetter.value)
                        box.innerHTML = boxLetter
                        winScore = winScore + 1
                    }
                    guessedLettersArray.push(inputLetter.value)
                    lossScore = lossScore + 1
                    let UguessedLettersArray = guessedLettersArray.filter(function(elem, index, self){
                        return index == self.indexOf(elem);
                    })
                    if (lossScore  === (6 * inputWordArray.length)) {
                        console.log(lossScore)
                        alert("Loser!")
                    }
                    guessedLetters.innerHTML = UguessedLettersArray
                }
                stickFigure (lossScore)
                event.preventDefault()
            })
        }
        function stickFigure (lossScore){
            if (lossScore === inputWordArray.length) {
                stick.src = "hangman-16.png"
            }
            if (lossScore === (2 * inputWordArray.length)) {
                stick.src = "hangman-26.png"
            }
            if (lossScore === (3 * inputWordArray.length)) {
                stick.src = "hangman-36.png"
            }
            if (lossScore === (4 * inputWordArray.length)) {
                stick.src = "hangman-46.png"
            }
            if (lossScore === (5 * inputWordArray.length)) {
                stick.src = "hangman-56.png"
            }
            if (lossScore === (6 * inputWordArray.length)) {
                stick.src = "hangman-66.png"
            }
        }
        buttonLetter.addEventListener('click', function(event){
            inputLetter.value = ""
            event.preventDefault()
        })
        inputWord.value = "Good Luck!"
        event.preventDefault()
    })
}
// Losing BUg if u try the same letter u wont loss at 6 mistakes