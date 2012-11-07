/**
 * This class contains all the image and game logic for a corresponding node
 */
function Base(graphLayer, _id, _isCity)
{
    var population = 0;//degree of the node
    var position = new Tuple2d(0.0, 0.0);
    var id = _id;
    var baseBitmap;
    //Selection Bitmaps
    var selectionLayer1 = new Bitmap(cityBaseSelectedImage1);
    var selectionLayer2 = new Bitmap(cityBaseSelectedImage2);
    var selectionLayerM1 = new Bitmap(cityBaseSelectedImage3);//selection for mapping node
    var selectionLayerM2 = new Bitmap(cityBaseSelectedImage4);//selection for mapping node
    var selectionLayerH1 = new Bitmap(cityBaseSelectedImage5);//selection for hover node
    var selectionLayerH2 = new Bitmap(cityBaseSelectedImage6);//selection for hover node

    transformBitmap(selectionLayer1, selectionLayer1.image.width/2, selectionLayer1.image.height/2, Const.CITY_SELECTION_SCALE1);
    transformBitmap(selectionLayer2, selectionLayer2.image.width/2, selectionLayer2.image.height/2, Const.CITY_SELECTION_SCALE2);
    transformBitmap(selectionLayerM1, selectionLayerM1.image.width/2, selectionLayerM1.image.height/2, Const.CITY_SELECTION_SCALE1);
    transformBitmap(selectionLayerM2, selectionLayerM2.image.width/2, selectionLayerM2.image.height/2, Const.CITY_SELECTION_SCALE2);
    transformBitmap(selectionLayerH1, selectionLayerH1.image.width/2, selectionLayerH1.image.height/2, Const.CITY_SELECTION_SCALE1);
    transformBitmap(selectionLayerH2, selectionLayerH2.image.width/2, selectionLayerH2.image.height/2, Const.CITY_SELECTION_SCALE2);

    graphLayer.addChild(selectionLayer1);
    graphLayer.addChild(selectionLayer2);
    graphLayer.addChild(selectionLayerM1);
    graphLayer.addChild(selectionLayerM2);
    graphLayer.addChild(selectionLayerH1);
    graphLayer.addChild(selectionLayerH2);

    /** Toggle the selection around a city or a camp.
     * @param visible
     * @author Andrey
     */
    this.setSelection = function(visible) {
        if(visible) {
            selectionLayer1.alpha = Const.SELECTION_ALPHA;
            selectionLayer2.alpha = Const.SELECTION_ALPHA;
        } else {
            selectionLayer1.alpha = Const.INVISIBLE;
            selectionLayer2.alpha = Const.INVISIBLE;
        }
    }

    /** Toggle the mapping selection around a city or a camp.
     * @param visible
     * @author Mehrdad
     */
    this.setMappingSelection = function(visible) {
        if(visible) {
            selectionLayerM1.alpha = Const.SELECTION_ALPHA;
            selectionLayerM2.alpha = Const.SELECTION_ALPHA;
        } else {
            selectionLayerM1.alpha = Const.INVISIBLE;
            selectionLayerM2.alpha = Const.INVISIBLE;
        }
    }

    /** Toggle the hovering selection around a city or a camp.
     * @param visible
     * @author Mehrdad
     */
    this.setHoverSelection = function(visible) {
        if(visible) {
            selectionLayerH1.alpha = Const.SELECTION_ALPHA;
            selectionLayerH2.alpha = Const.SELECTION_ALPHA;
        } else {
            selectionLayerH1.alpha = Const.INVISIBLE;
            selectionLayerH2.alpha = Const.INVISIBLE;
        }
    }

    /** Position the selection around a city or a camp.
     * @param position
     * @author Andrey
     */
    this.positionSelection = function (position) {
        selectionLayer1.setTransform(position.x, position.y);
		selectionLayer2.setTransform(position.x, position.y);
    }

    /** Position the mapping selection around a city or a camp.
     * @param position
     * @author Mehrdad
     */
    this.positionMappingSelection = function(position) {
        selectionLayerM1.setTransform(position.x, position.y);
        selectionLayerM2.setTransform(position.x, position.y);
    }

    /** Position the hovering selection around a city or a camp.
     * @param position
     * @author Mehrdad
     */
    this.positionHoverSelection = function(position) {
        selectionLayerH1.setTransform(position.x, position.y);
        selectionLayerH2.setTransform(position.x, position.y);
    }

    //@return {Bitmap} the base Bitmap
    this.getBaselayer = function() {
        return baseLayer;
    }

    this.setSelection(false);
    this.setMappingSelection(false);
    this.setHoverSelection(false);

    var isCity = _isCity;

    //@return true if the base is a city and false if its a tower
    this.isCity = function() {
        return isCity;
    }

    if(isCity) 
    {
        baseBitmap = new Bitmap(cityBaseImage);
        baseBitmap.alpha = Const.VISIBLE;
        //baseBitmap.setTransform(baseBitmap.image.width / 2, baseBitmap.image.height / 2, Const.BASE_CITY_SCALE, Const.BASE_CITY_SCALE);
        graphLayer.addChild(baseBitmap);
    }
    else 
    {
        baseBitmap = new Bitmap(towerBaseImage);
        baseBitmap.alpha = Const.VISIBLE;
        //baseBitmap.setTransform(baseBitmap.image.width / 2, baseBitmap.image.height / 2, Const.CAMP_CITY_SCALE, Const.CAMP_CITY_SCALE);
        graphLayer.addChild(baseBitmap);
    }

    this.getPosition = function() {
        return position;
    }

    this.setPosition = function (_position) {
        this.position = _position;
    }

    /**
    * transforms the base at the given coordinates
    * @param x - float x coordinate
    * @param y - float y coordinate
    */
    this.transform = function() {
        if (isCity) {
            baseBitmap.setTransform(this.position.x, this.position.y, Const.BASE_CITY_SCALE, Const.BASE_CITY_SCALE);
        } else {
            baseBitmap.setTransform(this.position.x, this.position.y, Const.CAMP_CITY_SCALE, Const.CAMP_CITY_SCALE);
        }
    }

    /**
     * Sets the population of this node to the given number
     * @param population - int
     */
    this.setPopulation = function(_population) {
		this.population = _population;
    }

    //@return {integer} the population of this node
    this.getPopulation = function() {
        return population;
    }
}