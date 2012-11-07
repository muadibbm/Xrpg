handleKeyDownEvents = function (e) {
    switch (e.keyCode) {
        case Const.KEYCODE_A:
        case Const.KEYCODE_LEFT:
            console.log("Left");
            break;
        case Const.KEYCODE_D:
        case Const.KEYCODE_RIGHT:
            console.log("Right");
            break;
        case Const.KEYCODE_W:
        case Const.KEYCODE_UP:
            console.log("Up");
            break;
        case Const.KEYCODE_S:
        case Const.KEYCODE_DOWN:
            console.log("Down");
            break;
    }
}