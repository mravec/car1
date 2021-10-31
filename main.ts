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
function vypis (text: string) {
    s += 1
    if (s > 1) {
        s = 0
        serial.writeLine("lavyMotor" + lavyMotor + ", pravyMotor=" + pravyMotor + ", time=" + input.runningTime() + ", prekazka=" + prekazka + text)
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
let prekazka = 0
let s = 0
let pravyMotor = 0
let lavyMotor = 0
serial.redirectToUSB()
radio.setGroup(1)
cuteBot.singleheadlights(cuteBot.RGBLights.RGB_L, 78, 49, 115)
cuteBot.singleheadlights(cuteBot.RGBLights.RGB_R, 179, 152, 58)
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
    prekazka = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
    if (prekazka < 20 && (lavyMotor > 0 || pravyMotor > 0)) {
        vypis("  prekazka ")
        cuteBot.motors(0, 0)
        basic.pause(500)
        cuteBot.motors(-55, -60)
        basic.pause(2000)
        cuteBot.motors(0, -60)
        basic.pause(500)
        cuteBot.motors(0, 0)
        basic.pause(1000)
    } else {
        cuteBot.motors(lavyMotor, pravyMotor)
        vypis("  normal ")
    }
    basic.pause(100)
})
