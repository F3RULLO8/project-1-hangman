// Declarng the varibles for the html
window.onload=function(){
    let inputWord = document.querySelector("#word-box")
    let buttonWord = document.querySelector("#submit-word")
    let inputLetter = document.querySelector("#letter-box")
    let buttonLetter = document.querySelector("#submit-letter")
    let guessedLetters = document.querySelector("#guessedLetters")
    let stick = document.querySelector('#stick')
// Enter word button to start the code
    buttonWord.addEventListener('click', function(event) {
        // Setting variables to starting values
        let winScore = 0
        let usedLetterArray = []
        let lossScore = 0
        stick.src = ""
        let guessedLettersArray = []
        let inputWordArray = inputWord.value.split("")
        // loop to give each letter a div and set spaces
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
            // button to see if the value entered is equal to any of the values of the word
            buttonLetter.addEventListener('click', function(event){
                // test to see if matches and same letter cant be repeated
                if (inputLetter.value === boxLetter && usedLetterArray.includes(inputLetter.value) === false) {
                    usedLetterArray.push(inputLetter.value)
                    box.innerHTML = boxLetter
                    winScore = winScore + 1
                    lossScore = lossScore - (inputWordArray.length - 1)
                    if (winScore === inputWordArray.length) {
                        alert("Winner!")
                    }
                } else {
                    // if doesnt match adds a losing score and addeds to guessed div
                    if (inputLetter.value === boxLetter){
                        usedLetterArray.push(inputLetter.value)
                        box.innerHTML = boxLetter
                        winScore = winScore + 1
                        if (winScore === inputWordArray.length) {
                            alert("Winner!")
                        }
                    } 
                    guessedLettersArray.push(inputLetter.value)
                    lossScore = lossScore + 1
                    // makes sure no repeating letters in the array
                    let UguessedLettersArray = guessedLettersArray.filter(function(elem, index, self){
                        return index == self.indexOf(elem);
                    })
                    if (lossScore  === (6 * inputWordArray.length)) {
                        console.log(lossScore)
                        alert("Loser!")
                    }
                    guessedLetters.innerHTML = UguessedLettersArray
                }  
                // calls stick figure
                stickFigure (lossScore)
                event.preventDefault()
            })
        }
        // this changes the stick figure to the matching picture to get hangman
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
        // sets input boxes to blanks after you have used them
        buttonLetter.addEventListener('click', function(event){
            inputLetter.value = ""
            event.preventDefault()
        })
        inputWord.value = "Good Luck!"
        event.preventDefault()
    })
}