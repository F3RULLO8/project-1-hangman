window.onload=function(){
    let input = document.querySelector("#word-box")
    let button = document.querySelector("#submit-word")

    button.addEventListener('click', function(event) {
        let inputArray = input.value.split("")
        for (i = 0; i < inputArray.length; i++) {
            let box = document.createElement('div')
            box.className = 'box'
            box.innerHTML = inputArray[i];
            document.querySelector("main").appendChild(box);
        }
        event.preventDefault()
    })
  }
