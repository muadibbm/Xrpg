
function Environment() {

    // private bitmap variables for the environment bitmap elements
    var bgBitmap;
    var treeOfLifeBitmap;
    var caveBitmap;
    // private container for the graph bitmap objects
    var graphLayer = new Container();
    // private container which has all the bitmaps for the game UI
    var uiLayer = new Container();

    // used for camera movement
    var offset = new Tuple2d(Const.WORLD_ORIGIN_X, Const.WORLD_ORIGIN_Y);

    // used of LOD (Level of Detail)
    var zoomLevel = Const.ZOOM_DEFAULT;

    // prepares all the environment resources
    this.prepare = function () {
        //TODO: make the background bitmap to be drawn repeatedly
        bgBitmap = new Bitmap(bgImage);
        treeOfLifeBitmap = new Bitmap(treeOfLifeImage);
        caveBitmap = new Bitmap(caveImage);
        transformBitmap(bgBitmap, 0.0, 0.0, 1.0);
        transformBitmap(treeOfLifeBitmap, canvas.width / 2.0 - Const.TREE_OF_LIFE_SCALE * treeOfLifeBitmap.image.width / 5.0, canvas.height - Const.TREE_OF_LIFE_SCALE * treeOfLifeBitmap.image.height * 5.0, Const.TREE_OF_LIFE_SCALE);
        transformBitmap(caveBitmap, canvas.width / 2.0 - Const.TREE_OF_LIFE_SCALE * caveBitmap.image.width / 2.5, 0.0, Const.DEEVE_CAVE_SCALE);
        stage.addChild(bgBitmap);
        stage.addChild(treeOfLifeBitmap);
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

    // @return {Container} the UI layer
    this.getUiLayer = function () {
        return uiLayer;
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

    this.getTreeOfLifeBitmap = function () {
        return treeOfLifeBitmap;
    }

    //TODO: the tree placement method from previous gameLoop should be coded here
}