let _1st_place: Sprite = null
let SecondPlace: Sprite = null
let Value = randint(1, 50)
let input2 = 0
let numberGuessesLeft = 7
while (input2 != Value) {
    input2 = parseFloat(game.askForString("Guess the number between 1 and 50!"))
    if (input2 < Value) {
        game.splash("Too low!")
    } else if (input2 > Value) {
        game.splash("Too high!")
    }
    numberGuessesLeft += -1
    if (numberGuessesLeft <= 0) {
        game.splash("No more guesses left")
        game.over(false, effects.melt)
    }
    game.splash("You have " + numberGuessesLeft + " guesses left")
}
if (numberGuessesLeft < 3) {
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
    SecondPlace.say("Good, you guessed right!", 1200)
    pause(1200)
    game.over(true, effects.clouds)
} else if (numberGuessesLeft < 5) {
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
    _1st_place.say("Great job, you guessed right!", 1200)
    pause(1200)
    game.over(true, effects.starField)
}
