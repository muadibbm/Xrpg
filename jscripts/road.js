/**
* This class contains all the image and game logic for a corresponding edge
* @param roadLayer - the Container of bitmaps of the graph
*/
function Road(roadLayer) {
    
    var roadBitmap = new Bitmap(roadImage);
    var visible = false;

    var pos1 = new Tuple2d(0.0, 0.0);
    var pos2 = new Tuple2d(0.0, 0.0);

    var placed = false;

    roadBitmap.alpha = Const.HIDDEN_ROAD;

    roadLayer.addChild(roadBitmap);

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
            roadBitmap.alpha = Const.VISIBLE_ROAD;
        else
            roadBitmap.alpha = Const.HIDDEN_ROAD;
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

    this.getPos1 = function () { return pos1; }
    this.getPos2 = function () { return pos2; }

    //applies all the transformations
    this.transform = function () {
        roadBitmap.setTransform(pos1.x, pos1.y, pos1.getDistanceFrom(pos2) / roadImage.width, Const.ROAD_WIDTH);
        roadBitmap.rotation = Math.atan2(pos2.y - pos1.y, pos2.x - pos1.x)*180/Math.PI;
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