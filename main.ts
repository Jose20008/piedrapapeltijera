let Icono = 0
input.onGesture(Gesture.Shake, function () {
    Icono = randint(0, 2)
    if (Icono == 0) {
        basic.showIcon(IconNames.Chessboard)
    }
    if (Icono == 1) {
        basic.showIcon(IconNames.Square)
    }
    if (Icono == 2) {
        basic.showIcon(IconNames.Scissors)
    }
})
