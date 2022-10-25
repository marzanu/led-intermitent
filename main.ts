basic.forever(function () {
    led.plot(3, 0)
    basic.pause(1000)
    led.unplot(3, 0)
    basic.pause(1000)
})
basic.forever(function () {
    led.toggle(4, 4)
    basic.pause(1000)
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        for (let index = 0; index < 8; index++) {
            for (let index = 0; index <= 4; index++) {
                basic.pause(1000)
                led.toggle(index, 4)
            }
            basic.pause(1000)
        }
    }
})
