# Hangman 
My project is a hangman game that can be played by two people. It can play the basics of hangman with setting a word then trying to guess the word without getting 6 mistakes while it keeps track of what you guessed and shows a graphic of the person. 

This is a code snippet to show the way I went about creating the graphic to show the word you choose. It creates each letter from your word as a div and shows up as a box.

```
for (i = 0; i < inputWordArray.length; i++) {
            let box = document.createElement('div')
            let boxLetter = inputWordArray[i]
            box.className = 'box'
            document.querySelector("#main").appendChild(box)
```
List of features 
* User inputs a word and blanked spaces appear
* Another user can guess letters they'll go into a array displayed of guessed lettters
* If correct the letter will appear accordingly and fill the blank spot
* If wrong it will add to the drawing of hangman
* Once hangman is fully drawn you loss
* Or if the word is complete you win!

Technologies used
* Html
* CSS
* Javascript

