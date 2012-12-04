/**
* This class contains all the image and game logic for a Mapping
* @param graphLayer - the Container of the mappings
* @param pos1 - the coordinates of the node the mapping is starting from
* @param pos2 - the coordinates of the node the mapping goes to
* @param score - the mapping score
*/
function Mapping(uiLayer, mappingLayer, _pos1, _pos2, _score)
{	
    var mapBitmap = new Bitmap(mappingImage);
    mapBitmap.alpha = Const.VISIBLE_MAPPING;
    var visible = true;
    
    var score = _score;

    var pos1 = _pos1;
    var pos2 = _pos2;

    var scoreImage = new Digits(uiLayer, Const.MAPPING_POINT_X + (pos2.x + pos1.x) / 2.0, Const.MAPPING_POINT_Y + (pos2.y + pos1.y) / 2.0, Const.MAPPING_POINT_SCALE);

    mappingLayer.addChild(mapBitmap);

    //@return the visible flag
    this.isVisible = function() {
        return visible;
    }

    this.getScoreImage = function() {
        return scoreImage;
    }

    /**
    * sets the visibility(transparency level) of the Mapping bitmap according to the given visibility flag
    * @param visible - the boolean flag
    */
    this.setVisible = function(visible) {
        this.visible = visible;
        if (visible) {
            mapBitmap.alpha = Const.VISIBLE_MAPPING;
            scoreImage.setAlpha(Const.VISIBLE_SCORE);
        }
        else {
            mapBitmap.alpha = Const.HIDDEN_MAPPING;
            scoreImage.setAlpha(Const.HIDDEN_SCORE);
        }
    }

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
        mapBitmap.setTransform(pos1.x, pos1.y, pos1.getDistanceFrom(pos2) / mappingImage.width, Const.MAPPING_WIDTH);
        mapBitmap.rotation = Math.atan2(pos2.y - pos1.y, pos2.x - pos1.x) * 180 / Math.PI;
    }

    //@return the points this mapping has
    this.getScore = function() {
        return score;
    }

    /**
    * Sets the points of this mapping to the given value
    * @param points - integer
    */
    this.setScore = function (newScore) {
        if (newScore < 0)
            score = 0;
        else
            score = newScore;
        scoreImage.setDigits(score);
    }

    //destroys the mapping bitmap
    this.destroy = function() {
        visible = false;
        mappingLayer.removeChild(mapBitmap);
        scoreImage.destroy();
        scoreImage = null;
    }

    this.toString = function () {
        return "scoreImage:" + scoreImage + ", " + "score:" + score + ", " + "pos1:" + pos1 + ", " + "pos2:" + pos2;
    }
}