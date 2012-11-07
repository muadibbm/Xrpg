/**
* This class contains all the image and game logic for a corresponding edge
* @param graphLayer - the Container of bitmaps of the graph
*/
function Road(graphLayer) {
    
    var roadBitmap = new Bitmap(roadImage);
    var visible = false;

    var pos1 = new Tuple2d(0.0, 0.0);
    var pos2 = new Tuple2d(0.0, 0.0);

    var placed = false;

    roadBitmap.alpha = Const.HIDDEN_ROAD;

    graphLayer.addChild(roadBitmap);

    //@return the visible flag
    this.isVisible = function() {
        return visible;
    }

    /**
    * sets the visibility(transparency level) of the Road bitmap according to the given visibility flag
    * @param visible - the boolean flag
    */
    this.setVisible = function(visible) {
        this.visible = visible;
        if(visible)
            roadBitmap.alpha = Const.VISIBLE;
        else
            roadBitmap.alpha = Const.VISIBLE;
    }

    /**
    * places the positions of the road and set the placed flag to true
    * @param pos1 - the coordinates of node1
    * @param pos2 - the coordinates of node2
    */
    this.placeRoad = function(_pos1, _pos2)	{
        pos1 = _pos1;
        pos2 = _pos2;
        placed = true;
    }

    //applies all the transformations
    this.transform = function() {
        roadBitmap.setTransform(pos1.x, pos1.y, pos1.getDistanceFrom(pos2) / roadImage.width, Const.ROAD_WIDTH, Math.atan2(pos2.y - pos1.y, pos2.x - pos1.x), 0.0, 0.0, 0.0, 0.0);
    }

    //@return the placed flag
    this.isPlaced = function() {
        return placed;
    }

    //@return the road layer of type ImageLayer
    this.getBitmap = function()    {
        return roadBitmap;
    }
}