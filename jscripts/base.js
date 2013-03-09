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
        var palaceBitmap;
        var bazarBitmap;
        var wallBitmap;
    }
    else {
        var tower1Bitmap;
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
        palaceBitmap = new Bitmap(palaceIconImage);
        bazarBitmap = new Bitmap(bazarIconImage);
        wallBitmap = new Bitmap(wallIconImage);
        baseBitmap.alpha = Const.SELECTION_ALPHA;
        bazarBitmap.alpha = Const.SELECTION_ALPHA;
        wallBitmap.alpha = Const.SELECTION_ALPHA;
    } else {
        baseBitmap = new Bitmap(towerBaseImage);
        tower1Bitmap = new Bitmap(tower1IconImage);
        tower1Bitmap.alpha = Const.SELECTION_ALPHA;
        baseBitmap.alpha = Const.BASE_ALPHA;
    }

    if (isCity) {
        graphLayer.addChild(wallBitmap);
        graphLayer.addChild(bazarBitmap);
        graphLayer.addChild(palaceBitmap);
        wallBitmap.visible = false;
        bazarBitmap.visible = false;
        palaceBitmap.visible = false;
    }
    else {
        graphLayer.addChild(tower1Bitmap);
        tower1Bitmap.visible = false;
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

    this.hasPalace = function () {
        return palaceBitmap.visible;
    }

    this.hasBazar = function () {
        return bazarBitmap.visible;
    }

    this.hasWall = function () {
        return wallBitmap.visible;
    }

    this.hasTower1 = function () {
        return tower1Bitmap.visible;
    }

    this.buildPalace = function () {
        palaceBitmap.visible = true;
    }

    this.buildBazar = function () {
        bazarBitmap.visible = true;
    }

    this.buildWall = function () {
        wallBitmap.visible = true;
    }

    this.buildTower1 = function () {
        tower1Bitmap.visible = true;
    }
}