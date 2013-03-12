/**
 * This class contains all the image and game logic for a corresponding node
 */
function Base(graphLayer, _id, _isCity, gui) {
    var population = 0;//degree of the node
    var position = new Tuple2d(0.0, 0.0);
    var hitPoint;
    var id = _id;
    var isCity = _isCity;
    var hasCaravan = false;
    var baseBitmap;
    //var cityBitmap;
    if (isCity) {
        hitPoint = Const.CITY_HITPOINT;
        var palaceBitmap;
        var bazarBitmap;
        var wallBitmap;
    }
    else {
        hitPoint = 0;
        var damage = 0;
        var rangeBitmap;
        var range = 0.0;
        var tower1Bitmap;
        var tower2Bitmap;
        var tower3Bitmap;
        var arrowBitmap;
        var target = null;
    }

    // Instantiate all the animations
    //var mouseOverCity = new SpriteSheet({
    //    // image to use
    //    images: [],
    //    // width, height & registration point of each sprite
    //    frames: { width: 64, height: 64, regX: 32, regY: 32 },
    //    animations: {
    //        walk: [0, 9, "overCity"]
    //    }
    //});

    //@return {Bitmap} the base Bitmap
    this.getBitmap = function () {
        return baseBitmap;
    }

    /**
    * sets the visibility(transparency level) of the base bitmap according to the given visibility flag
    * @param visible - the boolean flag
    */
    this.setVisible = function (visible) {
        if (visible) {
            if (isCity) {
                baseBitmap.alpha = 1.0;
                palaceBitmap.alpha = 1.0;
                bazarBitmap.alpha = 1.0;
                wallBitmap.alpha = 1.0;
            }
            else {
                baseBitmap.alpha = Const.SELECTED_BASE_ALPHA;
                tower1Bitmap.alpha = 1.0;
                if(tower1Bitmap.visible)
                    rangeBitmap.visible = true;
            }
        } else {
            if (isCity) {
                baseBitmap.alpha = Const.SELECTION_ALPHA;
                palaceBitmap.alpha = Const.SELECTION_ALPHA;
                bazarBitmap.alpha = Const.SELECTION_ALPHA;
                wallBitmap.alpha = Const.SELECTION_ALPHA;
            }
            else {
                baseBitmap.alpha = Const.BASE_ALPHA;
                tower1Bitmap.alpha = Const.SELECTION_ALPHA;
                if (tower1Bitmap.visible)
                    rangeBitmap.visible = false;
            }
        }
    }

    //@return true if the base is a city and false if its a tower
    this.isCity = function () {
        return isCity;
    }

    this.getBitmap = function () {
        return baseBitmap;
    }

    this.getHitpoint = function () {
        return hitPoint;
    }

    this.setHitpoint = function (newHitpoint) {
        hitpoint = newHitpoint;
    }

    this.getDamage = function () {
        return damage;
    }

    this.setDamage = function (_damage) {
        damage = _damage;
    }


    this.getRange = function () {
        return range;
    }

    this.setIsCity = function(_isCity) {
        isCity = _isCity;
    }

    if (isCity) {

        baseBitmap = new Bitmap(cityIconImage);
        palaceBitmap = new Bitmap(palaceIconImage);
        bazarBitmap = new Bitmap(bazarIconImage);
        wallBitmap = new Bitmap(wallIconImage);

        baseBitmap.alpha = Const.SELECTION_ALPHA;
        bazarBitmap.alpha = Const.SELECTION_ALPHA;
        wallBitmap.alpha = Const.SELECTION_ALPHA;

        graphLayer.addChild(wallBitmap);
        graphLayer.addChild(bazarBitmap);
        graphLayer.addChild(palaceBitmap);

        wallBitmap.visible = false;
        bazarBitmap.visible = false;
        palaceBitmap.visible = false;

    } else {

        baseBitmap = new Bitmap(towerBaseImage);
        tower1Bitmap = new Bitmap(tower1IconImage);
        rangeBitmap = new Bitmap(rangeImage);
        arrowBitmap = new Bitmap(arrowImage);

        baseBitmap.alpha = Const.BASE_ALPHA;
        tower1Bitmap.alpha = Const.SELECTION_ALPHA;
        rangeBitmap.alpha = Const.RANGE_ALPHA;

        graphLayer.addChild(rangeBitmap);
        graphLayer.addChild(tower1Bitmap);
        graphLayer.addChild(arrowBitmap);

        tower1Bitmap.visible = false;
        rangeBitmap.visible = false;
        arrowBitmap.visible = false;
    }

    graphLayer.addChild(baseBitmap);

    this.getPosition = function () {
        return position;
    }

    this.setPosition = function (_position) {
        position = _position;
    }

    /**
    * transforms the base at the given coordinates and all its selection combinations
    * @param x - float x coordinate
    * @param y - float y coordinate
    */
    this.transform = function () {
        //normalizeOnCanvas(baseBitmap);
        if (isCity) {
            baseBitmap.setTransform(position.x - baseBitmap.image.width / 2 * Const.CITY_ICON_SCALE, position.y - baseBitmap.image.height / 2 * Const.CITY_ICON_SCALE, Const.CITY_ICON_SCALE, Const.CITY_ICON_SCALE);
            palaceBitmap.setTransform(position.x - palaceBitmap.image.width / 2 * Const.PALACE_ICON_SCALE + Const.PALACE_ICON_X, position.y - palaceBitmap.image.height / 2 * Const.PALACE_ICON_SCALE + Const.PALACE_ICON_Y, Const.PALACE_ICON_SCALE, Const.PALACE_ICON_SCALE);
            bazarBitmap.setTransform(position.x - bazarBitmap.image.width / 2 * Const.BAZAR_ICON_SCALE + Const.BAZAR_ICON_X, position.y - bazarBitmap.image.height / 2 * Const.BAZAR_ICON_SCALE + Const.BAZAR_ICON_Y, Const.BAZAR_ICON_SCALE, Const.BAZAR_ICON_SCALE);
            wallBitmap.setTransform(position.x - wallBitmap.image.width / 2 * Const.WALL_ICON_SCALE + Const.WALL_ICON_X, position.y - wallBitmap.image.height / 2 * Const.WALL_ICON_SCALE + Const.WALL_ICON_Y, Const.WALL_ICON_SCALE, Const.WALL_ICON_SCALE);
        } else {
            baseBitmap.setTransform(position.x - baseBitmap.image.width / 2 * Const.BASE_TOWER_SCALE, position.y - baseBitmap.image.height / 2 * Const.BASE_TOWER_SCALE, Const.BASE_TOWER_SCALE, Const.BASE_TOWER_SCALE);
            tower1Bitmap.setTransform(position.x - tower1Bitmap.image.width / 2 * Const.TOWER1_ICON_SCALE + Const.TOWER1_ICON_X, position.y - tower1Bitmap.image.height / 2 * Const.TOWER1_ICON_SCALE + Const.TOWER1_ICON_Y, Const.TOWER1_ICON_SCALE, Const.TOWER1_ICON_SCALE);
            arrowBitmap.scaleX = Const.ARROW_SCALE;
            arrowBitmap.scaleY = Const.ARROW_SCALE;
        }
    }

    /**
     * Sets the population of this node to the given number
     * @param population - int
     */
    this.setPopulation = function (_population) {
        population = _population;
    }

    //@return {integer} the population of this node
    this.getPopulation = function () {
        return population;
    }

    if (isCity) {

        this.hasCaravan = function () {
            return hasCaravan;
        }

        this.setHasCaravan = function (_hasCaravan) {
            hasCaravan = _hasCaravan;
        }

        this.hasPalace = function () {
            return palaceBitmap.visible;
        }

        this.hasBazar = function () {
            return bazarBitmap.visible;
        }

        this.hasWall = function () {
            return wallBitmap.visible;
        }

        this.buildPalace = function () {
            palaceBitmap.visible = true;
            hitPoint = hitPoint + Const.PALACE_HITPOINT;
        }

        this.buildBazar = function () {
            bazarBitmap.visible = true;
            hitPoint = hitPoint + Const.BAZAR_HITPOINT;
        }

        this.buildWall = function () {
            wallBitmap.visible = true;
            hitPoint = hitPoint + Const.WALL_HITPOINT;
        }
    }
    else
    {
        this.hasTower1 = function () {
            return tower1Bitmap.visible;
        }

        this.buildTower1 = function () {
            tower1Bitmap.visible = true;
            hitPoint = Const.TOWER1_HITPOINT;
            damage = damage + Const.TOWER1_DAMAGE;
            range = rangeBitmap.image.width / 2 * Const.TOWER1_RANGE_SCALE;
            rangeBitmap.setTransform(position.x - range, position.y - range, Const.TOWER1_RANGE_SCALE, Const.TOWER1_RANGE_SCALE);
            rangeBitmap.visible = true;
            arrowBitmap.x = position.x;
            position.y = position.y - Const.ARROW_OFFSET;
            arrowBitmap.y = position.y;
            arrowBitmap.visible = false;
        }

        this.isShooting = function () {
            return target;
        }

        this.getTarget = function () {
            return target;
        }
        
        var dx;
        var dy;
        var err;
        var e2;
        var sx;
        var sy;
        var newPosition;
        var currentTimer;

        var reeval = function () {
            dx = Math.abs(target.getPosition().x - position.x);
            dy = Math.abs(target.getPosition().y - position.y);
            err = dx - dy;

            if (arrowBitmap.x < target.getPosition().x) {
                sx = 1;
            } else {
                sx = -1;
            }

            if (arrowBitmap.y < target.getPosition().y) {
                sy = 1;
            } else {
                sy = -1;
            }
        }

        var shoot = function () {
            reeval();
            arrowBitmap.visible = true;
            // Start the timer for the first time
            currentTimer = setInterval(moveArrow, Const.ARROW_SPEED);
        }

        var moveAgain = function () {
            currentTimer = setInterval(moveArrow, Const.ARROW_SPEED);
        }

        var fireAgain = function () {

            arrowBitmap.x = position.x;
            arrowBitmap.y = position.y;

            reeval();

            setTimeout(moveAgain, Const.ARROW_COOLDOWN);
        }

        var moveArrow = function () {
            e2 = 2 * err;
            newPosition = new Tuple2d(arrowBitmap.x, arrowBitmap.y);

            if (e2 > -dy) {
                err -= dy;
                newPosition.x = newPosition.x + sx;
            }

            if (e2 < dx) {
                err += dx;
                newPosition.y = newPosition.y + sy;
            }

            if (target != null) {
                arrowBitmap.visible = true;
                if (position.getDistanceFrom(newPosition) > range + Const.ARROW_MISS_DISTANCE) {
                    arrowBitmap.visible = false;
                    clearInterval(currentTimer);
                    fireAgain();
                }
                else {
                    if (newPosition.getDistanceFrom(target.getPosition()) > Const.ARROW_KILL_DISTANCE) {
                        arrowBitmap.x = newPosition.x;
                        arrowBitmap.y = newPosition.y;
                        arrowBitmap.rotation = Math.atan2(target.getPosition().y - position.y, target.getPosition().x - position.x) * 180 / Math.PI;
                    }
                    else {
                        clearInterval(currentTimer);
                        target.setHealth(target.getHealth() - damage);
                        if (target.getHealth() <= 0) {
                            target = null;
                            arrowBitmap.visible = false;
                        }
                        else { fireAgain(); }
                    }
                }
            }
            else {
                arrowBitmap.visible = false;
                clearInterval(currentTimer);
            }
        }

        this.setTarget = function (deeve) {
            if (deeve == null) {
                target = null;
            }  else {
                target = deeve;
                shoot();
            }
        }
    }
}