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
            box.innerHTML = "___"
            buttonLetter.addEventListener('click', function(event){
                if (inputLetter.value === boxLetter) {
                    box.innerHTML = boxLetter
                    winScore = winScore + 1
                    lossScore = lossScore - (inputWordArray.length - 1)
                } else {
                    guessedLettersArray.push(inputLetter.value)
                    lossScore = lossScore + 1
                    let UguessedLettersArray = guessedLettersArray.filter(function(elem, index, self){
                        return index == self.indexOf(elem);
                    })
                    guessedLetters.innerHTML = UguessedLettersArray
                }
                if (winScore === inputWordArray.length) {
                    alert('You Win!')
                }
                if (lossScore  === (6 * inputWordArray.length)) {
                    alert('You Lost!')
                }
                event.preventDefault()
            })
        }
        inputWord.value = "Good Luck!"
        event.preventDefault()
    })
}