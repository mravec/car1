function vypis (text: string) {
    s += 1
    if (s > 1) {
        s = 0
        serial.writeLine("lavyMotor" + lavyMotor + ", pravyMotor=" + pravyMotor + ", time=" + input.runningTime() + ", prekazka=" + prekazka + text)
    }
}
radio.onReceivedString(function (receivedString) {
    if (receivedString == "A") {
        lavyMotor = 100
        pravyMotor = 100
    } else if (receivedString == "B") {
        lavyMotor = -100
        pravyMotor = -100
    } else if (receivedString == "AB") {
        lavyMotor = 0
        pravyMotor = 0
    } else if (receivedString == "C") {
    	
    } else if (receivedString == "D") {
    	
    } else if (receivedString == "E") {
    	
    } else if (receivedString == "F") {
    	
    }
})
radio.onReceivedValue(function (name, value) {
    if (name == "lv") {
        lavyMotor = value
    } else if (name == "pv") {
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
    if (prekazka < 40 && (lavyMotor > 0 || pravyMotor > 0)) {
        vypis("  prekazka ")
        cuteBot.motors(-10, -10)
        basic.pause(200)
        cuteBot.motors(-55, -60)
        basic.pause(500)
        cuteBot.motors(-23, -50)
        basic.pause(200)
        cuteBot.motors(0, 0)
        basic.pause(500)
    } else {
        cuteBot.motors(lavyMotor, pravyMotor)
        vypis("  normal ")
    }
    basic.pause(100)
})
