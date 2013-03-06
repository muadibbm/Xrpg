/**
 * This class contains all the image and game logic for a corresponding node
 */
function Base(graphLayer, _id, _isCity, gui) {
    var population = 0;//degree of the node
    var position = new Tuple2d(0.0, 0.0);
    var id = _id;
    var isCity = _isCity;
    var hasCaravan = false;
    var baseBitmap;
    //var cityBitmap;
    if (isCity) {
        var bazarBitmap;
        var wallBitmap;
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

    this.getBaseLayer = function () {
        return baseLayer;
    }

    /**
    * sets the visibility(transparency level) of the base bitmap according to the given visibility flag
    * @param visible - the boolean flag
    */
    this.setVisible = function (visible) {
        if (visible) {
            if (isCity) {
                baseBitmap.alpha = 1.0;
                bazarBitmap.alpha = 1.0;
                wallBitmap.alpha = 1.0;
            }
            else {
                baseBitmap.alpha = Const.SELECTED_BASE_ALPHA;
            }
        } else {
            if (isCity) {
                baseBitmap.alpha = Const.SELECTED_BASE_ALPHA;
                bazarBitmap.alpha = Const.SELECTED_BASE_ALPHA;
                wallBitmap.alpha = Const.SELECTED_BASE_ALPHA;
            }
            else {
                baseBitmap.alpha = Const.BASE_ALPHA;
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

    this.setIsCity = function(_isCity) {
        isCity = _isCity;
    }

    if (isCity) {
        baseBitmap = new Bitmap(cityIconImage);
        bazarBitmap = new Bitmap(bazarIconImage);
        wallBitmap = new Bitmap(wallIconImage);
        baseBitmap.alpha = Const.SELECTED_BASE_ALPHA;
        bazarBitmap.alpha = Const.SELECTED_BASE_ALPHA;
        wallBitmap.alpha = Const.SELECTED_BASE_ALPHA;
    } else {
        baseBitmap = new Bitmap(towerBaseImage);
        baseBitmap.alpha = Const.BASE_ALPHA;
    }

    if (isCity) {
        graphLayer.addChild(wallBitmap);
        graphLayer.addChild(bazarBitmap);
        wallBitmap.visible = false;
        bazarBitmap.visible = false;
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
            bazarBitmap.setTransform(position.x - bazarBitmap.image.width / 2 * Const.BAZAR_ICON_SCALE + Const.BAZAR_ICON_X, position.y - bazarBitmap.image.height / 2 * Const.BAZAR_ICON_SCALE + Const.BAZAR_ICON_Y, Const.BAZAR_ICON_SCALE, Const.BAZAR_ICON_SCALE);
            wallBitmap.setTransform(position.x - wallBitmap.image.width / 2 * Const.WALL_ICON_SCALE + Const.WALL_ICON_X, position.y - wallBitmap.image.height / 2 * Const.WALL_ICON_SCALE + Const.WALL_ICON_Y, Const.WALL_ICON_SCALE, Const.WALL_ICON_SCALE);
        } else {
            baseBitmap.setTransform(position.x - baseBitmap.image.width / 2 * Const.BASE_TOWER_SCALE, position.y - baseBitmap.image.height / 2 * Const.BASE_TOWER_SCALE, Const.BASE_TOWER_SCALE, Const.BASE_TOWER_SCALE);
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

    this.hasCaravan = function () {
        return hasCaravan;
    }

    this.setHasCaravan = function (_hasCaravan) {
        hasCaravan = _hasCaravan;
    }

    this.hasBazaar = function () {
        return bazarBitmap.visible;
    }

    this.buildBazaar = function () {
        bazarBitmap.visible = true;
    }

    this.buildWall = function () {
        wallBitmap.visible = true;
    }
}