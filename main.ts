let timer_ = 0
let Yvalue = 0
input.onButtonPressed(Button.A, function () {
    timer_ = 0
    for (let index = 0; index < 5; index++) {
        led.plot(timer_, 0)
        basic.pause(100)
        timer_ += 1
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
    Yvalue = 0
    for (let index = 0; index < 5; index++) {
        led.plot(0, Yvalue)
        basic.pause(100)
        Yvalue += 1
        basic.clearScreen()
    }
})
basic.forever(function () {
	
})
