window.onload=function(){
    let input = document.querySelector("#word-box")
    let button = document.querySelector("#submit-box")

    button.addEventListener('click', function(event) {
        let inputArray = input.value.split("")
        for (i = 0; i <= inputArray.length; i++) {
            console.log(inputArray[i])
        }
        event.preventDefault()
    })
  }