/**
 * This class contains all the image and game logic for a corresponding node
 */
function Base(graphLayer, _id, _isCity) {
    var population = 0;//degree of the node
    var position = new Tuple2d(0.0, 0.0);
    var id = _id;
    var isCity = _isCity;
    var hasBazaar = false;
    var hasCaravan = false;
    var baseBitmap;

    //Selection Bitmaps
    var selectionLayer1 = new Bitmap(cityBaseSelectedImage1);
    var selectionLayer2 = new Bitmap(cityBaseSelectedImage2);
    var selectionLayerM1 = new Bitmap(cityBaseSelectedImage3);//selection for mapping node
    var selectionLayerM2 = new Bitmap(cityBaseSelectedImage4);//selection for mapping node
    var selectionLayerH1 = new Bitmap(cityBaseSelectedImage5);//selection for hover node
    var selectionLayerH2 = new Bitmap(cityBaseSelectedImage6);//selection for hover node

    selectionLayer1.alpha = Const.SELECTION_ALPHA;
    selectionLayer2.alpha = Const.SELECTION_ALPHA;
    selectionLayerM1.alpha = Const.SELECTION_ALPHA;
    selectionLayerM2.alpha = Const.SELECTION_ALPHA;
    selectionLayerH1.alpha = Const.SELECTION_ALPHA;
    selectionLayerH2.alpha = Const.SELECTION_ALPHA;

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

    /** Toggle the selection around a city or a camp.
     * @param visible
     * @author Andrey
     */
    this.setSelection = function (visible) {
        selectionLayer1.visible = visible;
        selectionLayer2.visible = visible;
    }

    /** Toggle the mapping selection around a city or a camp.
     * @param visible
     * @author Mehrdad
     */
    this.setMappingSelection = function (visible) {
        selectionLayerM1.visible = visible;
        selectionLayerM2.visible = visible;
    }

    /** Toggle the hovering selection around a city or a camp.
     * @param visible
     * @author Mehrdad
     */
    this.setHoverSelection = function (visible) {
        selectionLayerH1.visible = visible;
        selectionLayerH2.visible = visible;
    }

    /** Position the selection around a city or a camp.
     * @param position
     * @author Andrey
     */
    this.positionSelection = function () {
        selectionLayer1.setTransform(position.x - selectionLayer1.image.width / 2 * Const.CITY_SELECTION_SCALE1, position.y - selectionLayer1.image.height / 2 * Const.CITY_SELECTION_SCALE1, Const.CITY_SELECTION_SCALE1, Const.CITY_SELECTION_SCALE1);
        selectionLayer2.setTransform(position.x - selectionLayer2.image.width / 2 * Const.CITY_SELECTION_SCALE2, position.y - selectionLayer2.image.height / 2 * Const.CITY_SELECTION_SCALE2, Const.CITY_SELECTION_SCALE2, Const.CITY_SELECTION_SCALE2);
    }

    /** Position the mapping selection around a city or a camp.
     * @param position
     * @author Mehrdad
     */
    this.positionMappingSelection = function () {
        selectionLayerM1.setTransform(position.x - selectionLayerM1.image.width / 2 * Const.CITY_SELECTION_SCALE1, position.y - selectionLayerM1.image.height / 2 * Const.CITY_SELECTION_SCALE1, Const.CITY_SELECTION_SCALE1, Const.CITY_SELECTION_SCALE1);
        selectionLayerM2.setTransform(position.x - selectionLayerM2.image.width / 2 * Const.CITY_SELECTION_SCALE2, position.y - selectionLayerM2.image.height / 2 * Const.CITY_SELECTION_SCALE2, Const.CITY_SELECTION_SCALE2, Const.CITY_SELECTION_SCALE2);
    }

    /** Position the hovering selection around a city or a camp.
     * @param position
     * @author Mehrdad
     */
    this.positionHoverSelection = function () {
        selectionLayerH1.setTransform(position.x - selectionLayerH1.image.width / 2 * Const.CITY_SELECTION_SCALE1, position.y - selectionLayerH1.image.height / 2 * Const.CITY_SELECTION_SCALE1, Const.CITY_SELECTION_SCALE1, Const.CITY_SELECTION_SCALE1);
        selectionLayerH2.setTransform(position.x - selectionLayerH2.image.width / 2 * Const.CITY_SELECTION_SCALE2, position.y - selectionLayerH2.image.height / 2 * Const.CITY_SELECTION_SCALE2, Const.CITY_SELECTION_SCALE2, Const.CITY_SELECTION_SCALE2);
    }

    //@return {Bitmap} the base Bitmap
    this.getBitmap = function () {
        return baseBitmap;
    }

    this.getBaseLayer = function () {
        return baseLayer;
    }

    this.setSelection(false);
    this.setMappingSelection(false);
    this.setHoverSelection(false);

    /**
    * sets the visibility(transparency level) of the base bitmap according to the given visibility flag
    * @param visible - the boolean flag
    */
    this.setVisible = function (visible) {
        if (visible)
            baseBitmap.alpha = Const.SELECTED_BASE_ALPHA;
        else
            baseBitmap.alpha = Const.BASE_ALPHA;
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
        baseBitmap.alpha = Const.BASE_ALPHA;
    } else {
        baseBitmap = new Bitmap(towerBaseImage);
        baseBitmap.alpha = Const.BASE_ALPHA;
    }

    graphLayer.addChild(baseBitmap);
    graphLayer.addChild(selectionLayer1);
    graphLayer.addChild(selectionLayer2);
    graphLayer.addChild(selectionLayerM1);
    graphLayer.addChild(selectionLayerM2);
    graphLayer.addChild(selectionLayerH1);
    graphLayer.addChild(selectionLayerH2);

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
        } else {
            baseBitmap.setTransform(position.x - baseBitmap.image.width / 2 * Const.BASE_TOWER_SCALE, position.y - baseBitmap.image.height / 2 * Const.BASE_TOWER_SCALE, Const.BASE_TOWER_SCALE, Const.BASE_TOWER_SCALE);
        }
        this.positionSelection();
        this.positionMappingSelection();
        this.positionHoverSelection();
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