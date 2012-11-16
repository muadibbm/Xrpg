/** This class contains the attributes for the deeve object.
 * @author Andrey
 *
 */
function Deeve(graphLayer, pointsList) {
    var deeveBitmap = new Bitmap(deeveImage);
    var initialPosition;
    var currentPosition;
    var finalPosition;
    var stoppingDist;
    var deeveLevel;
    var dx, dy, err, sx, sy;
    var index = 0;
    var visible = false;
    var health = 100; // 100 % full
    var damage = 10; // Level 1 == 10 units of damage
    var hasArrived = false;
    var isFirstTime = true;
    var currentTimer = null;

    deeveBitmap.alpha = Const.HIDDEN_DEEVE;
    graphLayer.addChild(deeveBitmap);

    deeveLevel = 1;
    initialPosition = pointsList[index];
    currentPosition = initialPosition;
    finalPosition = pointsList[index + 1];
    stoppingDist = 15;
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

    currentTimer = new setInterval(moveDeeve, Const.DEEVE_SPEED);

    var moveDeeve = function () {
        var e2 = 2 * err;
        var newPosition = new Tuple2d(currentPosition.x, currentPosition.y);

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
            if (index == (pointsList.length - 1)) {
                hasArrived = true;
                deeveStopMoving();
            } else {
                initialPosition = finalPosition;
                currentPosition = initialPosition;
                index++;
                finalPosition = pointsList[index];
                reeval();
            }
        }
    }

    this.hasArrived = function () {
        return hasArrived;
    }

    this.setHasArrived = function (_hasArrived) {
        hasArrived = _hasArrived;
    }

    this.deeveStopMoving = function () {
        clearInterval(currentTimer);
    }

    this.getDeeveLevel = function () {
        return deeveLevel;
    }

    this.setDeeveLevel = function (_deeveLevel) {
        deeveLevel = _deeveLevel;
    }

    this.getPosition = function () {
        return currentPosition;
    }

    this.setPosition = function (_position) {
        currentPosition = _position;
    }

    this.isVisible = function () {
        return visible;
    }

    this.setVisible = function (_visible) {
        visible = _visible;

        if (visible) {
            deeveBitmap.alpha = Const.VISIBLE_DEEVE;
        } else {
            deeveBitmap.alpha = Const.HIDDEN_DEEVE;
        }
    }

    this.getBitmap = function () {
        return deeveBitmap;
    }

    this.transform = function () {
        deeveBitmap.setTransform(currentPosition.x - deeveBitmap.image.width / 2 * Const.DEEVE_SCALE, currentPosition.y - deeveBitmap.image.height / 2 * Const.DEEVE_SCALE, Const.DEEVE_SCALE, Const.DEEVE_SCALE);
    }

    this.getHealth = function () {
        return health;
    }

    this.setHealth = function (_health) {
        health = _health;
    }

    this.getDamage = function () {
        return damage;
    }

    this.setDamage = function (_damage) {
        damage = _damage;
    }
}
