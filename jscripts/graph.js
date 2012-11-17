/**
 * This class contains the nodes and edges of the given graph read from the file system
 */
function Graph(id, isCity, xOffset, yOffset, width, height) {

    var nodes = new Hashtable();
    var edges = new Hashtable();

    var nodesArray = [];
    var edgesArray = [];

    var id = id;
    var isCity = isCity;
    var Offset = new Tuple2d(xOffset, yOffset);
    var width = width;
    var height = height;

    var caravanList = [];

    var self = this;

    var graphLayer = new Container();
    var roadLayer = new Container();

    this.getGraphLayer = function () {
        return graphLayer;
    }

    this.getRoadLayer = function () {
        return roadLayer;
    }

    //@return {Boolean} true if this graph instance is a city type and false otherwise
    this.isCity = function () {
        return isCity;
    }

    /*this.isAllPlaced = function() {
        return allPlaced;
    }*/

    this.getCaravanList = function () {
        return caravanList;
    }

    this.setCaravanList = function (newCaravanList) {
        caravanList = newCaravanList;
    }

    // @return {Double} the graph width
    this.getWidth = function () {
        return width;
    }

    // @return {Double} the graph height
    this.getHeight = function () {
        return height;
    }

    // @return {Tuple2d} the graph offset
    this.getOffset = function () {
        return offset;
    }

    // @return {Integer} the graph id
    this.getId = function () {
        return id;
    }

    addNode = function (node) {
        nodes.put(node.getID(), node);
    }

    getNode = function (nodeID) {
        return nodes.get(nodeID);
    }

    addEdge = function (edge) {
        edges.put(edge.getID(), edge);
    }

    contains = function (id) {
        if (nodes.containsKey(id))
            return true;
        return false;
    }

    //@return {Array} the list of nodes in this graph
    this.getNodes = function () {
        return nodesArray;
    }

    //@return {Array} the list of edges in this graph
    this.getEdges = function () {
        return edgesArray;
    }

    /**
    * return the Node instance of the node1 of the given edge
    * @param edge - a given Edge instance
    * @return {Node} the Node instance
    */
    this.getNode1 = function (edge) {
        return getNode(edge.getN1());
    }

    /**
	 * return the Node instance of the node2 of the given edge
	 * @param edge - a given Edge instance
	 * @return {node} the Node instance
	 */
    this.getNode2 = function (edge) {
        return getNode(edge.getN2());
    }

    isSeperated = function (test_coordinates) {
        var distance = 0.0;
        for(var i = 0; i < nodesArray.length; i++) {
            if (nodesArray[i].isPlaced()) {
                distance = nodesArray[i].getPos().getDistanceFrom(test_coordinates);
                if (isCity)
                {
                    if(distance < Const.MIN_CITY_DISTANCE)// || distance > Const.MAX_CITY_DISTANCE
                        return false;
                }
                else
                {
                    if(distance < Const.MIN_TOWER_DISTANCE)// || distance > Const.MAX_TOWER_DISTANCE
                        return false;
                }
            }
        }
        return true;
    }

    placeNodes = function () {
        var tempNodeX = 0.0;
        var tempNodeY = 0.0;
        var placedNodesList = [];
        var node;
        var node2;

        // First, place the nodes onto the graph
        for (var i = 0; i < nodesArray.length; i++) {
            node = nodesArray[i];

            while (!node.isPlaced()) {
                tempNodeX = Math.random() * width + xOffset;
                tempNodeY = Math.random() * height + yOffset;
                if (isSeperated(new Tuple2d(tempNodeX, tempNodeY)))
                    node.placeNode(tempNodeX, tempNodeY);
            }
            placedNodesList.push(node);
        }

        for (var i = 0; i < placedNodesList.length; i++) {
            node = placedNodesList[i];
            for (var i = 0; i < placedNodesList.length; i++) {
                node2 = placedNodesList[i];
                if (node != node2) {
                    var distance = node.getPos().getDistanceFrom(node2.getPos());
                    if (isCity) {
                        if (distance < Const.MIN_CITY_DISTANCE && tempNodeX > xOffset && tempNodeY > yOffset) {
                            tempNodeX = Math.random() * width + xOffset;
                            tempNodeY = Math.random() * height + yOffset;
                            node.placeNode(tempNodeX, tempNodeY);
                        }
                    } else if (distance < Const.MIN_TOWER_DISTANCE && tempNodeX > xOffset && tempNodeY > yOffset) {
                        tempNodeX = Math.random() * width + xOffset;
                        tempNodeY = Math.random() * height + yOffset;
                        node.placeNode(tempNodeX, tempNodeY);
                    }
                }
            }

        }
    }

    placeEdges = function () {
        var n1;
        var n2;
        for (var i = 0; i < edgesArray.length; i++) {
            if (!edgesArray[i].getRoad().isPlaced()) {
                n1 = self.getNode1(edgesArray[i]);
                n2 = self.getNode2(edgesArray[i]);
                edgesArray[i].getRoad().placeRoad(n1.getPos(), n2.getPos());
            }
            edgesArray[i].getRoad().setVisible(edgesArray[i].getRoad().isVisible());
        }
    }

    setNodeLevels = function () {
        for (var i = 0; i < nodesArray.length; i++) {
            nodesArray[i].setNodeLevel();
        }
    }

    movingCaravans = function () {
        /*for (Entry<Integer, Node> entry: nodes.entrySet()) {
            Node node = entry.getValue();
            if (node.getBase() instanceof City) {
                City c1 = (City) node.getBase(); 
                if (c1.hasBazaar()) {
                    List<Node> neighbours = node.getNeighbors();
                    for (Node neighbour: neighbours) {
                        City c2 = (City) neighbour.getBase();
                        if (c2.hasBazaar()) {
                            if (!c1.hasCaravan() || !c2.hasCaravan()) {
                                c1.setHasCaravan(true);
                                c2.setHasCaravan(true);
                                caravanList.add(new Caravan(node.getGraphLayer(), node.getPos(), neighbour.getPos(), node.getBase().getBaseLayer().scaledWidth() / 10));
                            }
                        }
                    }
                }
            }
        }
*/
    }

    //sets the transformations of all the bitmaps in this graph instance after placement
    transform = function () {
        for (var i = 0; i < nodesArray.length; i++) {
            nodesArray[i].getBase().transform();
        }
        for (var i = 0; i < edgesArray.length; i++) {
            edgesArray[i].getRoad().transform();
        }
    }

    /**
	 * Fill all the nodes and edges of the graph
	 * @param data - the file containing the graph raw data
	 * @param player_id - the unique integer value of the player assigned to this graph's elements
	 */
    this.generateGraph = function (data, player_id) {
        parseGraphFile(data, player_id);
        nodesArray = nodes.values();
        edgesArray = edges.values();
        placeNodes();
        setNodeLevels();
        placeEdges();
        transform();
    }

    // updates all the positions of the moving instances associated with the graph
    this.updateAll = function () {
        movingCaravans();
    }

    if (typeof String.prototype.startsWith != 'function') {
        String.prototype.startsWith = function (str) {
            return this.indexOf(str) == 0;
        };
    }

    //parses the file containing the raw graph data and creates all the nodes and edges instances
    parseGraphFile = function (data, player_id) {

        // Check for the various File API support.
        if (!window.File || !window.FileReader)
            alert('The File APIs are not fully supported in this browser.');

        var entries = [];
        var subEntries = [];

        var n1 = null;
        var n2 = null;
        var nucl = null;

        var e = null;
        var edgeComponents = null;
        iso = null;
        et1 = null;
        et2 = null;

        var nodeID, neighborID;
        var edgeID; //line number in file

        entries = data.split("\n");

        for (var i = 0; i < entries.length; i++) {
            var s1 = entries[i];
            if (entries[i].startsWith("%")) continue;

            s1 = s1.replace(/\\s+/g, "");
            s1 = s1.replace(/([0-9]*)([ATUGCatugc])([0-9]*)(\\([A-Z0-9]\\))-([ATUGCatugc])([0-9]*)(\\([A-Z0-9]\\))-([a-zA-Z]*)-([0-9]*)/g, "$1 $2 $3 $4 $5 $6 $7 $8 $9");

            //99 A 99 (A) A 99 (A) cWW 99
            subEntries = s1.split(" ");
            subEntries.splice(0, 2);
            subEntries.splice(7, 3);
            subEntries.splice(8, 1);
            subEntries.splice(9, 3);

            //parse edge
            edgeID = parseInt(subEntries[0]);
            edgeComponents = subEntries[7];
            switch (edgeComponents.charAt(0)) {
                case 'c':
                    iso = Isomer.c;
                    break;
                case 't':
                    iso = Isomer.t;
                    break;
            }
            switch (edgeComponents.charAt(1)) {
                case 'W':
                    et1 = EdgeType.W;
                    break;

                case 'w':
                    et1 = EdgeType.w;
                    break;

                case 'H':
                    et1 = EdgeType.H;
                    break;

                case 'h':
                    et1 = EdgeType.h;
                    break;

                case 'S':
                    et1 = EdgeType.S;
                    break;

                case 's':
                    et1 = EdgeType.s;
                    break;
            }
            switch (edgeComponents.charAt(2)) {
                case 'W':
                    et2 = EdgeType.W;
                    break;

                case 'w':
                    et2 = EdgeType.w;
                    break;

                case 'H':
                    et2 = EdgeType.H;
                    break;

                case 'h':
                    et2 = EdgeType.h;
                    break;

                case 'S':
                    et2 = EdgeType.S;
                    break;

                case 's':
                    et2 = EdgeType.s;
                    break;
            }

            nodeID = parseInt(subEntries[2]);
            neighborID = parseInt(subEntries[5]);

            e = new Edge(edgeID, iso, nodeID, neighborID, et1, et2, roadLayer)
            addEdge(e);

            //parse first node
            switch (subEntries[1].charAt(0)) {
                case 'A':
                    nucl = Nucleotide.A;
                    break;

                case 'T':
                    nucl = Nucleotide.T;
                    break;

                case 'U':
                    nucl = Nucleotide.U;
                    break;

                case 'G':
                    nucl = Nucleotide.G;
                    break;

                case 'C':
                    nucl = Nucleotide.C;
                    break;
            }

            if (!contains(nodeID)) {
                n1 = new Node(nodeID, nucl, isCity, graphLayer, id, player_id);
                addNode(n1);
            } else {
                n1 = getNode(nodeID);
            }

            //parse second node (neighbor) and assign neighbor
            switch (subEntries[4].charAt(0)) {
                case 'A':
                    nucl = Nucleotide.A;
                    break;

                case 'T':
                    nucl = Nucleotide.T;
                    break;

                case 'U':
                    nucl = Nucleotide.U;
                    break;

                case 'G':
                    nucl = Nucleotide.G;
                    break;

                case 'C':
                    nucl = Nucleotide.C;
                    break;
            }

            if (!contains(neighborID)) {
                n2 = new Node(neighborID, nucl, isCity, graphLayer, id, player_id);
                addNode(n2);
            } else {
                n2 = getNode(neighborID);
            }
            n1.addNeighbor(n2);

        }
    }
}