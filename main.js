window.onload=function(){
    let inputWord = document.querySelector("#word-box")
    let buttonWord = document.querySelector("#submit-word")
    let inputLetter = document.querySelector("#letter-box")
    let buttonLetter = document.querySelector("#submit-letter")

    buttonWord.addEventListener('click', function(event) {
        let inputWordArray = inputWord.value.split("")
        for (i = 0; i < inputWordArray.length; i++) {
            let box = document.createElement('div')
            box = inputWordArray[i]
            box.className = 'box'
            document.querySelector("main").appendChild(box);
        }
        event.preventDefault()
    })
  }

//   box.innerHTML = inputWordArray[i]