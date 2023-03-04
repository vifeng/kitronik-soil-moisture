let moisture = 0
basic.forever(function () {
    moisture = pins.analogReadPin(AnalogPin.P1)
    if (moisture <= 400) {
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.sad), SoundExpressionPlayMode.InBackground)
        images.iconImage(IconNames.Sad).showImage(0)
    } else {
        images.iconImage(IconNames.Happy).showImage(0)
    }
    basic.pause(300000)
})
