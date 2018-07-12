window.onload=function(){
    let inputWord = document.querySelector("#word-box")
    let buttonWord = document.querySelector("#submit-word")
    let inputLetter = document.querySelector("#letter-box")
    let buttonLetter = document.querySelector("#submit-letter")
    let guessedLetters = document.querySelector("#guessedLetters")

    buttonWord.addEventListener('click', function(event) {
        let winScore = 0
        let lossScore = 0
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
                if (inputLetter.value === boxLetter) {
                    box.innerHTML = boxLetter
                    winScore = winScore + 1
                    lossScore = lossScore - (inputWordArray.length - 1)
                    if (winScore === inputWordArray.length) {
                        alert("Winner!")
                    }
                } else {
                    guessedLettersArray.push(inputLetter.value)
                    lossScore = lossScore + 1
                    let UguessedLettersArray = guessedLettersArray.filter(function(elem, index, self){
                        return index == self.indexOf(elem);
                    })
                    if (lossScore  === (6 * inputWordArray.length)) {
                        alert("Hangman!")
                    }
                    guessedLetters.innerHTML = UguessedLettersArray
                }
                event.preventDefault()
            })
        }
        buttonLetter.addEventListener('click', function(event){
            inputLetter.value = ""
            event.preventDefault()
        })
        inputWord.value = "Good Luck!"
        event.preventDefault()
    })
}
// Losing BUg try Starwars and lose