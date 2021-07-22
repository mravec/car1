input.onButtonPressed(Button.A, function () {
    lavyMotor = 50
    pravyMotor = 50
    cuteBot.motors(50, 50)
    soundExpression.spring.play()
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
})
<<<<<<< HEAD
function vypis () {
    aktualny_cas = input.runningTime()
    if (aktualny_cas - stary_cas > 1000) {
        stary_cas = aktualny_cas
        serial.writeLine("rychlost" + rychlost + ", kompas=" + kompas)
=======
function vypis (text: string) {
    s += 1
    if (s > 1) {
        s = 0
        serial.writeLine("lavyMotor" + lavyMotor + ", pravyMotor=" + pravyMotor + ", time=" + input.runningTime() + ", prekazka=" + prekazka + text)
>>>>>>> parent of f7dcba5 (Aktualizovať pxt.json, main.blocks, main.ts)
    }
}
input.onButtonPressed(Button.B, function () {
    lavyMotor = -50
    pravyMotor = -50
    cuteBot.motors(-50, -50)
    soundExpression.slide.play()
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
})
radio.onReceivedValue(function (name, value) {
    if (name == "lv") {
        lavyMotor = value
    }
    if (name == "pv") {
        pravyMotor = value
    }
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    lavyMotor = 0
    pravyMotor = 0
    cuteBot.motors(0, 0)
    soundExpression.spring.play()
})
<<<<<<< HEAD
let kompas = 0
let stary_cas = 0
let aktualny_cas = 0
let rychlost = 0
=======
let prekazka = 0
let s = 0
let pravyMotor = 0
let lavyMotor = 0
>>>>>>> parent of f7dcba5 (Aktualizovať pxt.json, main.blocks, main.ts)
serial.redirectToUSB()
radio.setGroup(1)
basic.showLeds(`
    . . . . .
    . # # # .
    . # # # .
    . # # # .
    . . . . .
    `)
lavyMotor = 0
pravyMotor = 0
s = 0
soundExpression.happy.play()
basic.forever(function () {
<<<<<<< HEAD
    cuteBot.motors(0, -65)
    basic.pause(100)
=======
    prekazka = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
    if (prekazka < 30 && (lavyMotor > 0 || pravyMotor > 0)) {
        vypis("  prekazka ")
        cuteBot.motors(0, 0)
        basic.pause(500)
        cuteBot.motors(-42, -42)
        basic.pause(200)
        cuteBot.motors(19, -42)
        basic.pause(200)
        cuteBot.motors(0, 0)
        basic.pause(200)
    } else {
        cuteBot.motors(lavyMotor, pravyMotor)
        vypis("  normal ")
        basic.pause(100)
    }
>>>>>>> parent of f7dcba5 (Aktualizovať pxt.json, main.blocks, main.ts)
})
