addMouseEvents = function (env) {
    env.getBgBitmap().onPress = function () {
        console.log("BG click!");
    }

    env.getTreeOfLifeBitmap().onPress = function () {
        console.log("Tree click!");
    }

    env.getCaveBitmap().onPress = function () {
        console.log("Cave click!");
    }
}