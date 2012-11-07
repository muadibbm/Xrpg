/**
* Class of the Edge
* @param id - the unique integer associated with this edge read from the raw data
* @param isomer - type of Isomer read from raw data
* @param n1 - the unique integer id of node1 read from raw data
* @param n2 - the unique integer id of node2 read from raw data
* @param e1 - the EdgeType read from raw data
* @param e2 - the EdgeType read from raw data
* @param graphLayer - the graph bitmaps Container
*/
function Edge (_id, _isomer, _n1, _n2, _e1, _e2, graphLayer) {
    
    var id = _id;
    var isomer = _isomer;
    var n1 = _n1;
    var n2 = _n2;
    var e1 = _e1;
    var e2 = _e2;

    var road = new Road(graphLayer);

    //@return the unique integer id
    this.getID = function() {
        return id;
    }

    //@return the unique integer id of node1 of this edge
    this.getN1 = function() {
        return n1;
    }

    //@return the unique integer id of node2 of this edge
    this.getN2 = function() {
        return n2;
    }

    //@return the road instance which contains all the image for this edge
    this.getRoad = function() {
        return road;
    }

    //@override
    this.toString = function () {
        return "Edge ID: " + id + "\t(" + isomer + e1 + e2 + " between " + n1 + " - " + n2 + ")";
    }
}