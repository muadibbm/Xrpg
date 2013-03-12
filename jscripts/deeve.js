/** This class contains the attributes for the deeve object.
 * @author Andrey
 *
 */
function Deeve(_pointsList, _deeveList) {
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
    var damage = 0;
    var hasArrived = false;
    var currentTimer = null;
    var resumeTimer = null;
    var pointsList = _pointsList.slice(0); // Clone the argument array into a local copy

    var deeveSpriteSheet = new SpriteSheet({
        images: [deeveImage],
        // width, height & registration point of each sprite
        frames: { width: 20, height: 32, regX: 10, regY: 16 },
        animations: {
            walk: [0, 2, "walk", 6]
        }
    });

    var deeveBmpAnimation = new BitmapAnimation(deeveSpriteSheet);    deeveBmpAnimation.gotoAndPlay("walk");
    deeveBmpAnimation.name = "deeve";
    deeveBmpAnimation.direction = -90;
    deeveBmpAnimation.currentFrame = 1;

    stage.addChild(deeveBmpAnimation);

    deeveBitmap.alpha = Const.HIDDEN_DEEVE;
    environment.getCreatureLayer().addChild(deeveBitmap);

    // Moves this deeve away from any other, so that there is no overlap of deeves
    // The second position is the position where all the deeves are in front of the cave space, 
    // before they attack.
    var placeInPlace = function () {
        var min = -60;
        var max = 40;
        var range1 = Math.floor(Math.random() * (max - min) + min);
        var range2 = Math.floor(Math.random() * (max - min) + min);
        var x = pointsList[2].x + range1;
        var y = pointsList[2].y + range2;
        var choice = Math.floor(Math.random() * 3);
        pointsList.push(new Tuple2d(x, y));
    }

    // Places a random point at the end of the points list to denote final destination.
    var setMapPoint = function () {
        // Return a random number between 1 and Const.WINDOW_HEIGHT
        pointsList.push(new Tuple2d(0, Math.floor((Math.random() * Const.WINDOW_HEIGHT) + 1)));
    }

    placeInPlace();
    setMapPoint();

    // Check if the pointsList is empty
    if (pointsList.length != 0) {
        initialPosition = pointsList[index];
        currentPosition = initialPosition;
        finalPosition = pointsList[index + 1];
    }

    deeveBmpAnimation.x = currentPosition.x;
    deeveBmpAnimation.y = currentPosition.y;
    deeveBmpAnimation.setTransform(currentPosition.x, currentPosition.y, Const.DEEVE_SCALE, Const.DEEVE_SCALE);

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
                // Reached the end of the list. Final stopping of the interval.
                hasArrived = true;
                clearInterval(currentTimer);
            } else {
                // Set the next point in the list as the new final destination, from the current position
                initialPosition = finalPosition;
                currentPosition = initialPosition;
                finalPosition = pointsList[index + 1];
                reeval();

                if (index == 3) {
                    // "The wave" points start here. The first two points are only to place the deeves in front of the cave, waiting for the wave timer to go off.
                    clearInterval(currentTimer);
                    deeveBmpAnimation.gotoAndStop("walk");
                    resumeTimer = setInterval(resume, Const.DEEVE_SPAWN_RATE * Const.DEEVE_NUMBER * 1000);
                }
            }
        }
    }

    var setPosition = function (_position) {
        currentPosition = _position;
        deeveBitmap.x = currentPosition.x;
        deeveBitmap.y = currentPosition.y;
        deeveBmpAnimation.x = currentPosition.x;
        deeveBmpAnimation.y = currentPosition.y;
    }

    currentTimer = setInterval(moveDeeve, Const.DEEVE_SPEED);

    var resume = function () {
        clearInterval(resumeTimer);
        currentTimer = setInterval(moveDeeve, Const.DEEVE_SPEED);
        deeveBmpAnimation.gotoAndPlay("walk");
    }

    this.getBmpAnimationObj = function () {
        return 
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

    this.kill = function () {
        deeveBitmap.alpha = Const.HIDDEN_DEEVE;
        deeveBmpAnimation.alpha = Const.HIDDEN_DEEVE;
        clearInterval(resumeTimer);
    }
}
