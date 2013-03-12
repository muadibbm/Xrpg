/**
 * This class contains all the image and game logic for a corresponding caravan
 */
function Caravan(graphLayer, city1, city2, stoppingDistance, player) {
    var caravanBitmap = new Bitmap(caravanImage);
    var visible = false;
    var initialPosition;
    var currentPosition;
    var finalPosition;
    var stoppingDist;
    var caravanLevel;
    var hasArrived;
    var dx, dy, err, sx, sy;
    var e2;
    var newPosition;
    var currentTimer = null;

    caravanBitmap.alpha = Const.HIDDEN_CARAVAN;
    graphLayer.addChild(caravanBitmap);

    caravanLevel = 1;
    initialPosition = city1.getPos();
    currentPosition = city1.getPos();
    finalPosition = city2.getPos();
    stoppingDist = stoppingDistance;
    hasArrived = false;

    var reeval = function () {
        dx = Math.abs(finalPosition.x - initialPosition.x);
        dy = Math.abs(finalPosition.y - initialPosition.y);
        err = dx - dy;

        if (currentPosition.x < finalPosition.x) {
            sx = 1;
        } else {
            sx = -1;
        }

        if (currentPosition.y < finalPosition.y) {
            sy = 1;
        } else {
            sy = -1;
        }
    }

    reeval();

    var moveAgain = function () {
        currentTimer = setInterval(moveCaravan, Const.CARAVAN_MOVING_TIME);
    }

    var swapDestination = function () {
        //Earn Trading Gold
        if (city1.getPos().x == currentPosition.x && city1.getPos().y == currentPosition.y) {
            if (city1.getBase().hasPalace())
                player.setGold(player.getGold() + Const.CARAVAN_GOLD_EARNED + Const.PALACE_GOLD_INCREASE);
            else
                player.setGold(player.getGold() + Const.CARAVAN_GOLD_EARNED);
        }
        else {
            if (city2.getBase().hasPalace())
                player.setGold(player.getGold() + Const.CARAVAN_GOLD_EARNED + Const.PALACE_GOLD_INCREASE);
            else
                player.setGold(player.getGold() + Const.CARAVAN_GOLD_EARNED);
        }

        var temp = finalPosition;
        finalPosition = initialPosition;
        initialPosition = temp;

        reeval();

        setTimeout(moveAgain, Const.CARAVAN_TRADING_TIME);
        hasArrived = false;
    }

    /** Move the caravan from city to city to gain resources. I will implement a path finding algorithm
    * to make the camel/caravan find the right city and going around the cities, the current node is connected to.
    * Declaring the function before call below it. Otherwise, produces an error of undefined. 
    */
    var moveCaravan = function () {
        e2 = 2 * err;
        newPosition = new Tuple2d(currentPosition.x, currentPosition.y);

        if (e2 > -dy) {
            err -= dy;
            newPosition.x = newPosition.x + sx;
        }

        if (e2 < dx) {
            err += dx;
            newPosition.y = newPosition.y + sy;
        }

        if (currentPosition.getDistanceFrom(finalPosition) > stoppingDist) {
            setPosition(newPosition);
        } else {
            hasArrived = true;
            clearInterval(currentTimer);
            swapDestination();
        }
    }

    var setPosition = function (_position) {
        currentPosition = _position;
        caravanBitmap.x = currentPosition.x;
        caravanBitmap.y = currentPosition.y;
    }

    // Start the timer for the first time
    currentTimer = setInterval(moveCaravan, Const.CARAVAN_MOVING_TIME);

    this.hasArrived = function () {
        return hasArrived;
    }

    this.setHasArrived = function (_hasArrived) {
        hasArrived = _hasArrived;
    }

    this.getCaravanLevel = function () {
        return caravanLevel;
    }

    this.setCaravanLevel = function (_caravanLevel) {
        caravanLevel = _caravanLevel;
    }

    this.getPosition = function () {
        return currentPosition;
    }

    this.isVisible = function () {
        return visible;
    }

    this.setVisible = function (_visible) {
        visible = _visible;

        if (visible) {
            caravanBitmap.alpha = Const.VISIBLE_CARAVAN;
        } else {
            caravanBitmap.alpha = Const.HIDDEN_CARAVAN;
        }
    }

    this.getBitmap = function () {
        return caravanBitmap;
    }

    this.transform = function () {
        caravanBitmap.setTransform(currentPosition.x - (caravanBitmap.image.width / 2) * Const.CARAVAN_SCALE, currentPosition.y - (caravanBitmap.image.height / 2) * Const.CARAVAN_SCALE, Const.CARAVAN_SCALE, Const.CARAVAN_SCALE);
    }
}