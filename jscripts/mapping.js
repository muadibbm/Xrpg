/**
* This class contains all the image and game logic for a Mapping
* @param graphLayer - the Container of the mappings
* @param pos1 - the coordinates of the node the mapping is starting from
* @param pos2 - the coordinates of the node the mapping goes to
* @param score - the mapping score
*/
function Mapping(mappingLayer, _pos1, _pos2, _score)
{	
    var mapBitmap = new Bitmap(mapImage);
    mapBitmap.alpha = Const.VISIBLE_MAPPING;
    var visible = true;
    
    var score = _score;

    var pos1 = _pos1;
    var pos2 = _pos2;

    //TODO
    //scoreImage = new Digits(graphLayer, Const.MAPPING_POINT_X + (pos2.getX() + pos1.getX())/2.0f, Const.MAPPING_POINT_Y + (pos2.getY() + pos1.getY())/2.0f, Const.MAPPING_POINT_SCALE, Const.MAPPING_DEPTH+1.0f);
    //scoreImage.setAlpha(Const.VISIBLE);


    //@return the visible flag
    this.isVisible = function() {
        return visible;
    }

    /**
    * sets the visibility(transparency level) of the Mapping bitmap according to the given visibility flag
    * @param visible - the boolean flag
    */
    this.setVisible = function(visible) {
        this.visible = visible;
        if(visible)
            mapBitmap.alpha = Const.VISIBLE_MAPPING;
        else
            mapBitmap.alpha = Const.HIDDEN_MAPPING;
    }

    /*
    private void paintScore() {
        if(!scoreImage.destroyed()) {
            scoreImage.setDigits(this.score);
        }
    }*/

    /**
    * places the positions of the mapping
    * @param pos1 - the coordinates of node1
    * @param pos2 - the coordinates of node2
    */
    this.placeMapping = function(_pos1, _pos2)	{
        pos1 = _pos1;
        pos2 = _pos2;
    }

    this.getPos1 = function () { return pos1; }
    this.getPos2 = function () { return pos2; }


    //applies all the transformations
    this.transform = function () {
        //TODO add paintScore(); transofrm for digits
        mapBitmap.setTransform(pos1.x, pos1.y, pos1.getDistanceFrom(pos2) / mappingImage.width, Const.MAPPING_WIDTH);
        mapBitmap.rotation = Math.atan2(pos2.y - pos1.y, pos2.x - pos1.x)*180/Math.PI;
    }


    //@return {Integer} the points this mapping has
    this.getScore = function() {
        return score;
    }

    /**
    * Sets the points of this mapping to the given value
    * @param points - integer
    */
    this.setScore = function(_score) {
        if(_score < 0)
            score = 0;
        else
            score = _score;
    }

    /**
    * destroys the mapping layer
    */
    this.destroy = function() {
        visible = false;
        //TODO : how to remove the bitmap
        //TODO scoreImage.destroy();
    }
}