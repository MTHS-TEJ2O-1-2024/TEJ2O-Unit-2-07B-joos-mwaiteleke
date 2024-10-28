/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Joos
 * Created on: Oct 2024
 * This program plays cookie clicker
*/

let score = 0
basic.showIcon(IconNames.Happy)
//adds number to score and shows it
input.onButtonPressed(Button.A, function() {
    score = score + 1
    basic.showNumber(score)
})
//resets score
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    score = 0
    basic.showNumber(score)
})

