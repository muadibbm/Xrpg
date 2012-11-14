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

    var self = this;

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

    //Mapping Score Propagation Logic
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
    }

    //Unmapping Score Propagation Logic
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
    }

    this.toString = function () {
        return "id:" + id + ", " + "nucleotide:" + nucleotide + ", " + "neighbors:" + neighbors.length + ", " + "x:" + coordinates.x + ", " + "y:" + coordinates.y + ", " + "graph_id:" + graph_id + ", " + "placed:" + placed;
    }

    this.addMouseClick = function (graph, player) {
        //base.getBitmap.onMouse
    }

    this.addOnMouseOut = function (graph, player) {
        base.getBitmap().onMouseOut = function (event) { //Called when the mouse leaves a Bitmap.
            if ((player.getSelectedNode() == null & player.getNodeToBeMapped() == null) ||
                    (player.getSelectedNode() != null & player.getSelectedNode() != self) ||
                    (player.getNodeToBeMapped() != null & player.getNodeToBeMapped() != self)) {
                self.getBase().setVisible(false);
                neighbors = self.getNeighbors();
                for (var j = 0; j < neighbors.length; j++)
                    if (player.getSelectedNode() != neighbors[j] & player.getNodeToBeMapped() != neighbors[j])
                        neighbors[j].getBase().setVisible(false);
                //Set all edges of the selected node invisible
                for (var j = 0; j < graph.getEdges().length; j++) {
                    edge = graph.getEdges()[j];
                    if (id == graph.getNode1(edge).getID()) {
                        edge.getRoad().setVisible(false);
                        self.getBase().setHoverSelection(false);
                    }
                }
            }
        }

            //gui.hidePopulation();

            if (player.getSelectedNode() != null) {
                //Show population
                /* switch(player.getSelectedNode().getNodeLevel()) {
                     case 1 : gui.setPopulation(player.getSelectedNode().getNodeLevel(), environment.getUILayer(), Const.N1_IMAGE); break;
                     case 2 : gui.setPopulation(player.getSelectedNode().getNodeLevel(), environment.getUILayer(), Const.N2_IMAGE); break;
                     case 3 : gui.setPopulation(player.getSelectedNode().getNodeLevel(), environment.getUILayer(), Const.N3_IMAGE); break;
                     case 4 : gui.setPopulation(player.getSelectedNode().getNodeLevel(), environment.getUILayer(), Const.N4_IMAGE); break;
                     case 5 : gui.setPopulation(player.getSelectedNode().getNodeLevel(), environment.getUILayer(), Const.N5_IMAGE); break;
                     case 6 : gui.setPopulation(player.getSelectedNode().getNodeLevel(), environment.getUILayer(), Const.N6_IMAGE); break;
                     case 7 : gui.setPopulation(player.getSelectedNode().getNodeLevel(), environment.getUILayer(), Const.N7_IMAGE); break;
                     case 8 : gui.setPopulation(player.getSelectedNode().getNodeLevel(), environment.getUILayer(), Const.N8_IMAGE); break;
                     case 9 : gui.setPopulation(player.getSelectedNode().getNodeLevel(), environment.getUILayer(), Const.N9_IMAGE); break;
                     default : gui.setPopulation(player.getSelectedNode().getNodeLevel(), environment.getUILayer(), Const.N0_IMAGE); break;
                 }
             }
             if (player.getNodeToBeMapped() != null) {
                 //Show population
                 /*switch(player.getNodeToBeMapped().getNodeLevel()) {
                     case 1 : gui.setPopulation(player.getNodeToBeMapped().getNodeLevel(), environment.getUILayer(), Const.N1_IMAGE); break;
                     case 2 : gui.setPopulation(player.getNodeToBeMapped().getNodeLevel(), environment.getUILayer(), Const.N2_IMAGE); break;
                     case 3 : gui.setPopulation(player.getNodeToBeMapped().getNodeLevel(), environment.getUILayer(), Const.N3_IMAGE); break;
                     case 4 : gui.setPopulation(player.getNodeToBeMapped().getNodeLevel(), environment.getUILayer(), Const.N4_IMAGE); break;
                     case 5 : gui.setPopulation(player.getNodeToBeMapped().getNodeLevel(), environment.getUILayer(), Const.N5_IMAGE); break;
                     case 6 : gui.setPopulation(player.getNodeToBeMapped().getNodeLevel(), environment.getUILayer(), Const.N6_IMAGE); break;
                     case 7 : gui.setPopulation(player.getNodeToBeMapped().getNodeLevel(), environment.getUILayer(), Const.N7_IMAGE); break;
                     case 8 : gui.setPopulation(player.getNodeToBeMapped().getNodeLevel(), environment.getUILayer(), Const.N8_IMAGE); break;
                     case 9 : gui.setPopulation(player.getNodeToBeMapped().getNodeLevel(), environment.getUILayer(), Const.N9_IMAGE); break;
                     default : gui.setPopulation(player.getNodeToBeMapped().getNodeLevel(), environment.getUILayer(), Const.N0_IMAGE); break;
                 }
             }*/
            }
    }

    this.addOnMouseOver = function(graph, player) {
        base.getBitmap().onMouseOver = function (event) { //Called when the mouse enters a Bitmap.

            if ((player.getSelectedNode() == null & player.getNodeToBeMapped() == null) ||
                (player.getSelectedNode() != null & player.getSelectedNode() != self) ||
                (player.getNodeToBeMapped() != null & player.getNodeToBeMapped() != self)) {
                //Set the node and neighbors visible
                self.getBase().setVisible(true);
                neighbors = self.getNeighbors();
                for (var j = 0; j < neighbors.length; j++)
                    neighbors[j].getBase().setVisible(true);
                //Set all edges of the selected node visible
                for (var j = 0; j < graph.getEdges().length; j++) {
                    edge = graph.getEdges()[j];

                    if (id == graph.getNode1(edge).getID()) {
                        edge.getRoad().setVisible(true);
                        self.getBase().positionHoverSelection(self.getPos());
                        self.getBase().setHoverSelection(true);
                    }
                }
                //Set the mapping of the selected node visible
                if (self.getMapping() != null)
                    self.getMapping().setVisible(true);

                //Show population
                /*switch(node.getNodeLevel()) {
                    case 1 : gui.setPopulation(node.getNodeLevel(), environment.getUILayer(), Const.N1_IMAGE); break;
                    case 2 : gui.setPopulation(node.getNodeLevel(), environment.getUILayer(), Const.N2_IMAGE); break;
                    case 3 : gui.setPopulation(node.getNodeLevel(), environment.getUILayer(), Const.N3_IMAGE); break;
                    case 4 : gui.setPopulation(node.getNodeLevel(), environment.getUILayer(), Const.N4_IMAGE); break;
                    case 5 : gui.setPopulation(node.getNodeLevel(), environment.getUILayer(), Const.N5_IMAGE); break;
                    case 6 : gui.setPopulation(node.getNodeLevel(), environment.getUILayer(), Const.N6_IMAGE); break;
                    case 7 : gui.setPopulation(node.getNodeLevel(), environment.getUILayer(), Const.N7_IMAGE); break;
                    case 8 : gui.setPopulation(node.getNodeLevel(), environment.getUILayer(), Const.N8_IMAGE); break;
                    case 9 : gui.setPopulation(node.getNodeLevel(), environment.getUILayer(), Const.N9_IMAGE); break;
                    default : gui.setPopulation(node.getNodeLevel(), environment.getUILayer(), Const.N0_IMAGE); break;
                }*/
            }
        }
    }
}