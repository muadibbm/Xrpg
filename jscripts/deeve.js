/** This class contains the attributes for the deeve object.
 * @author Andrey
 *
 */
function Deeve(_pointsList) {
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
    var currentTimer = null;
    var resumeTimer = null;
    var pointsList = _pointsList.slice(0); // Clone the argument array into a local copy
    
    deeveBitmap.alpha = Const.HIDDEN_DEEVE;
    environment.getCreatureLayer().addChild(deeveBitmap);

    var setMapPoints = function () {
        // Return a random number between 1 and Const.WINDOW_HEIGHT
        pointsList.push(new Tuple2d(0, Math.floor((Math.random() * Const.WINDOW_HEIGHT) + 1)));
    }
    
    setMapPoints();

    // Check if the pointsList is empty
    if (pointsList.length != 0) {
        initialPosition = pointsList[index];
        currentPosition = initialPosition;
        finalPosition = pointsList[index + 1];
    }

    deeveLevel = 1;
    stoppingDist = 1;
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
            index++;
            if (index == (pointsList.length - 1)) {
                // Reached the end of the list. Stop the interval.
                hasArrived = true;
                clearInterval(currentTimer);
            } else {
                // Set the next point in the list as the new final destination, from the current position
                initialPosition = finalPosition;
                currentPosition = initialPosition;
                finalPosition = pointsList[index + 1];
                reeval();

                if (index == 2) {
                    // "The wave" points start here. The first two points are only to place the deeves in front of the cave, waiting for the wave timer to go off.
                    clearInterval(currentTimer);
                    resumeTimer = setInterval(resume, Const.DEEVE_SPAWN_RATE * Const.DEEVE_NUMBER * 1000);
                }
            }
        }
    }

    var setPosition = function (_position) {
        currentPosition = _position;
        deeveBitmap.x = currentPosition.x;
        deeveBitmap.y = currentPosition.y;
    }

    currentTimer = setInterval(moveDeeve, Const.DEEVE_SPEED);

    var resume = function () {
        clearInterval(resumeTimer);
        currentTimer = setInterval(moveDeeve, Const.DEEVE_SPEED);
    }

    this.hasArrived = function () {
        return hasArrived;
    }

    this.setHasArrived = function (_hasArrived) {
        hasArrived = _hasArrived;
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
