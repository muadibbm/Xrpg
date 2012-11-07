/**
* Contains all the research-based data for a node and also the game logic required for every node
* @param id - the unique integer associated with this node read from the raw data
* @param nucl - type of Nucleotide read from raw data
* @param isCity - boolean value determining whether this node is city or camp
* @param graphLayer - the GroupLayer of the graph
* @param player_id - the unique integer value of the player assigned to this graph
*/
function Node(_id, _nucl, isCity, graphLayer, _graph_id, _player_id) {

    var id = _id
    var nucleotide = _nucl;
    var neighbors = [];
    var coordinates = new Tuple2d(0.0, 0.0);
    var graph_id = _graph_id;
    var player_id = _player_id;
    var placed = false;

    var mapped_node = null;
    var mapping = null;

    var base = new Base(graphLayer, id, isCity);

    /**
	* places the node at the given (x,y) coordinates and flag placed to true
	* @param x - float x coordinate
	* @param y - float y coordinate
	*/
    this.placeNode = function (x, y) {
        coordinates.x = x;
        coordinates.y = y;
        base.setPosition(coordinates);
        placed = true;
    }

    // @return true if node is place and false otherwise
    this.isPlaced = function () {
        return placed;
    }

    /**
	* Adds the specific node to the list of neighbors
	* @param n - instance of Node
	*/
    this.addNeighbor = function (n) {
        neighbors.push(n);
    }

    //@return list of neighbors of type Array
    this.getNeighbors = function () {
        return neighbors;
    }

    /**
	* Automatically sets the population of this node to its degree
	* @param node - of type Node
	* @return true if the given node is one of this node's neighbors
	*/
    this.isNeighbor = function (node) {
        return (neighbors.indexOf(node) != -1);
    }


    //Automatically sets the population of this node to its degree
    this.setNodeLevel = function () {
        base.setPopulation(neighbors.length);
    }

    //@return the degree(population) of this node
    this.getNodeLevel = function () {
        return base.getPopulation();
    }

    // @return the unique integer id
    this.getID = function () {
        return id;
    }

    //@return the coordinates of this node of type Point
    this.getPos = function () {
        return coordinates;
    }

    //@return the nucleotide value
    this.getNucleotide = function () {
        return nucleotide;
    }

    //@return the base instance of this node
    this.getBase = function () {
        return base;
    }

    setMapping = function(mapping) {
        this.mapping = mapping;
    }

    /**
	* Returns the mapping this node has
	* @return mapping - the instance of Mapping
	*/
    this.getMapping = function() {
        return mapping;
    }

    removeMapping = function() {
        mapped_node = null;
        mapping = null;
    }

    /**
    * Sets a mapping from this node to the given node
    * @param node - the node to be mapped to
    * @param score - the mapping score
    */
    this.setMapping = function(node, score) {
	    mapped_node = node;
        //mapped_node.setMappedNode(this);
        //mapping = new Mapping(graphLayer, coordinates, mapped_node.getPos(), score);
        //mapped_node.setMapping(mapping);
        //propagateMapping(score-1);
    }

    /**
    * Removes the existing mapping from this node to the given node
    * Note : If used on a node with no mapping will cause a NullPointerException
    */
    this.unMap = function(score) {
        propagateUnmapping(score-1);
        mapped_node.removeMapping();
        mapping.destroy();
        removeMapping();
    }

    /* Mapping Score Propagation Logic
    propagateMapping = function(score) {
        for(var i=0; i < neighbors.length; i++) {
            if(neighbors[i].getMapping() != null) {
                if(mapped_node!=null & neighbors[i].getMappedNode() != null) {
                    if(neighbors[i].getMappedNode().isNeighbor(mapped_node))
                        neighbors[i].getMapping().setScore(neighbors[i].getMapping().getScore()+score+1);
		        }
		        else
                    neighbors[i].getMapping().setScore(neighbors[i].getMapping().getScore()+score);
		    }
	    }
    }*/

    /* Unmapping Score Propagation Logic
    propagateUnmapping = function(score) {
        if(score > 0)
            for(var i=0; i < neighbors.length; i++) {
                if(neighbor.getMapping() != null) {
                    if(mapped_node!=null & neighbors[i].getMappedNode() != null) {
                        if(neighbors[i].getMappedNode().isNeighbor(mapped_node))
                            neighbors[i].getMapping().setScore(neighbors[i].getMapping().getScore()-score-1);
                    }
                    else
                        neighbors[i].getMapping().setScore(neighbors[i].getMapping().getScore()-score);
                }
            }
    }*/
}