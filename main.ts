let moisture = 0
basic.forever(function () {
    moisture = pins.analogReadPin(AnalogPin.P1)
    if (moisture <= 400) {
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.sad), SoundExpressionPlayMode.InBackground)
        images.iconImage(IconNames.No).showImage(0)
    } else {
        images.iconImage(IconNames.Heart).showImage(0)
    }
    basic.pause(12 * (60*60*60*60))
})
