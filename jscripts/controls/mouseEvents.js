addMouseEvents = function (env) {
    env.getBgBitmap().onPress = function () {
        console.log("BG click!");
    }

    env.getCaveBitmap().onPress = function () {
        console.log("Cave click!");
    }
}