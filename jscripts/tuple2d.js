function Tuple2d (_x, _y) {
    this.x = _x;
    this.y = _y;

    //Some helper Global functions

    //calculates the distance between points A and B which are of type Tuple2d
    this.getDistanceFrom = function(pointB) {
        return Math.sqrt((this.x - pointB.x) * (this.x - pointB.x) + (this.y - pointB.y) * (this.y - pointB.y));
    }

    //claculates the tangant slope
    this.getSlope = function(pointB) {
        var infinityCheck = this.x - pointB.x;
        if (Math.floor(infinityCheck) != 0)
            return Math.floor((this.y - pointB.y) / (this.x - pointB.x));
        return 0.0;
    }
}