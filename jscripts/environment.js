
function Environment() {

    // private bitmap variables for the environment bitmap elements
    var bgBitmap;
    var caveBitmap;
    // private container for the graph bitmap objects
    var graphLayer = new Container();
    // private container for the road bitmap objects
    var roadLayer = new Container();
    // private container for the mapping bitmap objects
    var mappingLayer = new Container();
    // private container which has all the bitmaps for the game UI
    var uiLayer = new Container();
    // private container which holds the tree bitmaps
    var treeLayer = new Container();

    var creatureLayer = new Container();

    // used for camera movement
    var offset = new Tuple2d(Const.WORLD_ORIGIN_X, Const.WORLD_ORIGIN_Y);

    // used of LOD (Level of Detail)
    var zoomLevel = Const.ZOOM_DEFAULT;

    // prepares all the environment resources
    this.prepare = function () {
        //TODO: make the background bitmap to be drawn repeatedly OR add a higher quality background (larger image 4x)
        bgBitmap = new Bitmap(bgImage);
        bgBitmap.alpha = Const.BACKGROUND_ALPHA;
        caveBitmap = new Bitmap(caveImage);
        resizeOnZoom(bgBitmap);
        caveBitmap.setTransform(Const.WORLD_WIDTH - caveBitmap.image.width / 2.0 * Const.DEEVE_CAVE_SCALE - Const.WORLD_WIDTH/30.0, Const.WORLD_HEIGHT / 2.0 - caveBitmap.image.height / 1.5 * Const.DEEVE_CAVE_SCALE, Const.DEEVE_CAVE_SCALE, Const.DEEVE_CAVE_SCALE);
        stage.addChild(bgBitmap);
        stage.addChild(caveBitmap);
    }

    // set the environment X offset 
    this.setX = function (x) {
        offset.x = x;
    }

    // set the environment Y offset
    this.setY = function (y) {
        offset.y = y;
    }

    // @return {Point} the environment offset
    this.getOffset = function () {
        return offset;
    }

    // @return {Container} the graph layer
    this.getGraphLayer = function () {
        return graphLayer;
    }

    // @return {Container} the road layer
    this.getRoadLayer = function () {
        return roadLayer;
    }

    // @return {Container} the mapping layer
    this.getMappingLayer = function () {
        return mappingLayer;
    }

    // @return {Container} the UI layer
    this.getUiLayer = function () {
        return uiLayer;
    }

    // @return {Container} the tree layer
    this.getTreeLayer = function () {
        return treeLayer;
    }

    this.getCreatureLayer = function () {
        return creatureLayer;
    }

    // sets the zoom level while changing the bitmaps details based on the new level
    this.setZoomLevel = function (newLevel) {
        zoomLevel = newLevel;
        //TODO: add level of detail method based on zoom level
    }

    // Getters for the bitmaps
    this.getBgBitmap = function () {
        return bgBitmap;
    }

    this.getCaveBitmap = function () {
        return caveBitmap;
    }
}