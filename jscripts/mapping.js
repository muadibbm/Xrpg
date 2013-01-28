/**
* This class contains all the image and game logic for a Mapping
* @param graphLayer - the Container of the mappings
* @param pos1 - the coordinates of the node the mapping is starting from
* @param pos2 - the coordinates of the node the mapping goes to
* @param score - the mapping score
*/
function Mapping(uiLayer, mappingLayer, _pos1, _pos2, _score) {
    var mapBitmap0 = new Bitmap(mappingImage0);
    var mapBitmap1 = new Bitmap(mappingImage1);
    var mapBitmap2 = new Bitmap(mappingImage2);
    var mapBitmap3 = new Bitmap(mappingImage3);
    var mapBitmap4 = new Bitmap(mappingImage4);
    var mapBitmap5 = new Bitmap(mappingImage5);
    var mapBitmap6 = new Bitmap(mappingImage6);
    
    mapBitmap0.visible = false;
    mapBitmap1.visible = false;
    mapBitmap2.visible = false;
    mapBitmap3.visible = false;
    mapBitmap4.visible = false;
    mapBitmap5.visible = false;
    mapBitmap6.visible = false;
    var visible = true;

    var score = _score;
    switch (score) {
        case 0: mapBitmap0.visible = true; break;
        case 1: mapBitmap1.visible = true; break;
        case 2: mapBitmap2.visible = true; break;
        case 3: mapBitmap3.visible = true; break;
        case 4: mapBitmap4.visible = true; break;
        case 5: mapBitmap5.visible = true; break;
        default: mapBitmap6.visible = true; break;
    }

    var pos1 = _pos1;
    var pos2 = _pos2;

    mappingLayer.addChild(mapBitmap0);
    mappingLayer.addChild(mapBitmap1);
    mappingLayer.addChild(mapBitmap2);
    mappingLayer.addChild(mapBitmap3);
    mappingLayer.addChild(mapBitmap4);
    mappingLayer.addChild(mapBitmap5);
    mappingLayer.addChild(mapBitmap6);

    //@return the visible flag
    this.isVisible = function () {
        return visible;
    }

    /**
    * sets the visibility(transparency level) of the Mapping bitmap according to the given visibility flag
    * @param visible - the boolean flag
    */
    this.setVisible = function (visible) {
        this.visible = visible;
        if (visible) {
            mapBitmap0.alpha = Const.VISIBLE_MAPPING;
            mapBitmap1.alpha = Const.VISIBLE_MAPPING;
            mapBitmap2.alpha = Const.VISIBLE_MAPPING;
            mapBitmap3.alpha = Const.VISIBLE_MAPPING;
            mapBitmap4.alpha = Const.VISIBLE_MAPPING;
            mapBitmap5.alpha = Const.VISIBLE_MAPPING;
            mapBitmap6.alpha = Const.VISIBLE_MAPPING;
        }
        else {
            mapBitmap0.alpha = Const.HIDDEN_MAPPING;
            mapBitmap1.alpha = Const.HIDDEN_MAPPING;
            mapBitmap2.alpha = Const.HIDDEN_MAPPING;
            mapBitmap3.alpha = Const.HIDDEN_MAPPING;
            mapBitmap4.alpha = Const.HIDDEN_MAPPING;
            mapBitmap5.alpha = Const.HIDDEN_MAPPING;
            mapBitmap6.alpha = Const.HIDDEN_MAPPING;
        }
    }

    /**
    * places the positions of the mapping
    * @param pos1 - the coordinates of node1
    * @param pos2 - the coordinates of node2
    */
    this.placeMapping = function (_pos1, _pos2) {
        pos1 = _pos1;
        pos2 = _pos2;
    }

    this.getPos1 = function () { return pos1; }
    this.getPos2 = function () { return pos2; }


    //applies all the transformations
    this.transform = function () {
        mapBitmap0.setTransform(pos1.x, pos1.y, pos1.getDistanceFrom(pos2) / mappingImage0.width, Const.MAPPING_WIDTH);
        mapBitmap0.rotation = Math.atan2(pos2.y - pos1.y, pos2.x - pos1.x) * 180 / Math.PI;
        mapBitmap1.setTransform(pos1.x, pos1.y, pos1.getDistanceFrom(pos2) / mappingImage1.width, Const.MAPPING_WIDTH);
        mapBitmap1.rotation = Math.atan2(pos2.y - pos1.y, pos2.x - pos1.x) * 180 / Math.PI;
        mapBitmap2.setTransform(pos1.x, pos1.y, pos1.getDistanceFrom(pos2) / mappingImage2.width, Const.MAPPING_WIDTH);
        mapBitmap2.rotation = Math.atan2(pos2.y - pos1.y, pos2.x - pos1.x) * 180 / Math.PI;
        mapBitmap3.setTransform(pos1.x, pos1.y, pos1.getDistanceFrom(pos2) / mappingImage3.width, Const.MAPPING_WIDTH);
        mapBitmap3.rotation = Math.atan2(pos2.y - pos1.y, pos2.x - pos1.x) * 180 / Math.PI;
        mapBitmap4.setTransform(pos1.x, pos1.y, pos1.getDistanceFrom(pos2) / mappingImage4.width, Const.MAPPING_WIDTH);
        mapBitmap4.rotation = Math.atan2(pos2.y - pos1.y, pos2.x - pos1.x) * 180 / Math.PI;
        mapBitmap5.setTransform(pos1.x, pos1.y, pos1.getDistanceFrom(pos2) / mappingImage5.width, Const.MAPPING_WIDTH);
        mapBitmap5.rotation = Math.atan2(pos2.y - pos1.y, pos2.x - pos1.x) * 180 / Math.PI;
        mapBitmap6.setTransform(pos1.x, pos1.y, pos1.getDistanceFrom(pos2) / mappingImage6.width, Const.MAPPING_WIDTH);
        mapBitmap6.rotation = Math.atan2(pos2.y - pos1.y, pos2.x - pos1.x) * 180 / Math.PI;
    }

    //@return the points this mapping has
    this.getScore = function () {
        return score;
    }

    /**
    * Sets the points of this mapping to the given value
    * @param points - integer
    */
    this.setScore = function (newScore) {
        if (newScore < 0)
            score = 0;
        else if (newScore > 6)
            score = 6;
        else
            score = newScore;
        mapBitmap0.visible = false;
        mapBitmap1.visible = false;
        mapBitmap2.visible = false;
        mapBitmap3.visible = false;
        mapBitmap4.visible = false;
        mapBitmap5.visible = false;
        mapBitmap6.visible = false;
        switch (score) {
            case 0: mapBitmap0.visible = true; break;
            case 1: mapBitmap1.visible = true; break;
            case 2: mapBitmap2.visible = true; break;
            case 3: mapBitmap3.visible = true; break;
            case 4: mapBitmap4.visible = true; break;
            case 5: mapBitmap5.visible = true; break;
            default: mapBitmap6.visible = true; break;
        }
    }

    //destroys the mapping bitmap
    this.destroy = function () {
        visible = false;
        mappingLayer.removeChild(mapBitmap0);
        mappingLayer.removeChild(mapBitmap1);
        mappingLayer.removeChild(mapBitmap2);
        mappingLayer.removeChild(mapBitmap3);
        mappingLayer.removeChild(mapBitmap4);
        mappingLayer.removeChild(mapBitmap5);
        mappingLayer.removeChild(mapBitmap6);
    }

    this.toString = function () {
        return "score:" + score + ", " + "pos1:" + pos1 + ", " + "pos2:" + pos2;
    }
}