/**
 * This class contains all the image and game logic for a corresponding node
 */
function Base(graphLayer, _id, _isCity, gui) {
    var population = 0;//degree of the node
    var position = new Tuple2d(0.0, 0.0);
    var id = _id;
    var isCity = _isCity;
    var hasBazaar = false;
    var hasCaravan = false;
    var baseBitmap;
    var cityBitmap;

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
            baseBitmap.alpha = Const.SELECTED_BASE_ALPHA;
            if (isCity) {
                cityBitmap.alpha = 1.0;
            }
            else {

            }
        } else {
            baseBitmap.alpha = Const.BASE_ALPHA;
            if (isCity) {
                cityBitmap.alpha = Const.SELECTED_BASE_ALPHA;
            }
            else {

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
        baseBitmap = new Bitmap(cityBaseImage);
        cityBitmap = new Bitmap(cityIconImage);
        baseBitmap.alpha = Const.BASE_ALPHA;
        cityBitmap.alpha = Const.SELECTED_BASE_ALPHA;
    } else {
        baseBitmap = new Bitmap(towerBaseImage);
        baseBitmap.alpha = Const.BASE_ALPHA;
    }

    graphLayer.addChild(baseBitmap);
    graphLayer.addChild(cityBitmap);

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
            baseBitmap.setTransform(position.x - baseBitmap.image.width / 2 * Const.BASE_CITY_SCALE, position.y - baseBitmap.image.height / 2 * Const.BASE_CITY_SCALE, Const.BASE_CITY_SCALE, Const.BASE_CITY_SCALE);
            cityBitmap.setTransform(position.x - cityBitmap.image.width / 2 * Const.CITY_ICON_SCALE, position.y - cityBitmap.image.height / 2 * Const.CITY_ICON_SCALE, Const.CITY_ICON_SCALE, Const.CITY_ICON_SCALE);
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

	// Additional set of functions for a city
    this.hasBazaar = function () {
        return hasBazaar;
    }

    this.setHasBazaar = function (_hasBazaar) {
        hasBazaar = _hasBazaar;
    }

    this.hasCaravan = function () {
        return hasCaravan;
    }

    this.setHasCaravan = function (_hasCaravan) {
        hasCaravan = _hasCaravan;
    }

    this.buildBazaar = function () {
        // TODO: Build bazaar. This will contain all there types of market we have so far.
    }
}