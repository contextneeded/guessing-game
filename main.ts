let SecondPlace: Sprite = null
let _1st_place: Sprite = null
let input2 = 0
let Value = randint(1, 50)
let numberGuessesLeft = 7
while (numberGuessesLeft > 0) {
    input2 = parseFloat(game.askForString("Guess the number between 1 and 50!"))
    numberGuessesLeft += -1
    if (input2 < Value) {
        game.splash("Too low!")
    } else if (input2 > Value) {
        game.splash("Too high!")
    } else if (input2 == Value) {
        if (numberGuessesLeft >= 3) {
            _1st_place = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . 5 5 5 . . . . . . . 
                . . . . . 5 5 5 5 . . . . . . . 
                . . . . 5 5 5 5 5 . . . . . . . 
                . . . . 5 . 5 5 5 . . . . . . . 
                . . . . . . 5 5 5 . . . . . . . 
                . . . . . . 5 5 5 . . . . . . . 
                . . . . . . 5 5 5 . . . . . . . 
                . . . . . . 1 5 1 . . . . . . . 
                . . . . 5 5 5 5 5 5 5 . . . . . 
                . . . . 5 1 5 5 5 1 5 . . . . . 
                . . . . 5 5 1 1 1 5 5 . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Player)
            _1st_place.say("Awesome!", 2500)
            pause(5000)
            game.over(true, effects.starField)
        } else if (numberGuessesLeft > 2) {
            SecondPlace = sprites.create(img`
                . . . . . . 1 1 1 1 . . . . . . 
                . . . . . 1 1 1 1 1 1 . . . . . 
                . . . . 1 1 1 1 1 1 1 1 . . . . 
                . . . 1 1 1 . . . 1 1 1 1 . . . 
                . . 1 1 1 . . . . . 1 1 1 1 . . 
                . . 1 1 . . . . . . . 1 1 1 . . 
                . . . . . . . . . . . 1 1 1 . . 
                . . . . . . . . . . . 1 1 1 . . 
                . . . . . . . . . . . 1 1 1 . . 
                . . . . . . . . . . 1 1 1 . . . 
                . . . . . . . . . 1 1 1 . . . . 
                . . . . . . . 1 1 1 1 . . . . . 
                . . . . . . 1 1 1 1 . . . . . . 
                . . . . . 1 1 1 1 . . . . . . . 
                . . . . 1 1 1 1 1 1 1 1 1 1 . . 
                . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
                `, SpriteKind.Player)
            SecondPlace.say("Good, you guessed right!", 4500)
            pause(5000)
            game.over(true, effects.confetti)
        } else {
            game.splash("At least you guessed it...")
            game.over(true, effects.clouds)
        }
    }
    game.splash("You have " + numberGuessesLeft + " guesses left")
}
game.over(false, effects.melt)
