/** 
* Contains any interaction with the layers in the game's graphs and the corresponding game logic. 
* @param graph - the associated graph object
* @param otherGraph - the associated graph object
* @param player - the associated player with the mouse click
* @param gui - the user interface corresponding to the player
*/
function MouseEvents (graph, otherGraph, player, gui) {
    
    var node;
    var edge;

    //sets the edges of the given graph invisible
    HideEdges = function() {
        for(var i = 0; i <  graph.getEdges().length; i++)
            graph.getEdges()[i].getRoad().setVisible(false);
    }

    //sets all the edges invisible
    HideAllEdges = function() {
        HideEdges(graph);
        HideEdges(otherGraph);
    }

    //sets the edges of the given nodes invisible
    HideNodes = function() {
        for(var i = 0; i <  graph.getNodes().length; i++)
            graph.getNodes()[i].getBase().setVisible(false);
    }

    //sets all the nodes invisible
    HideAllNodes = function() {
        HideNodes(graph);
        HideNodes(otherGraph);
    }

    //sets the mappings of the nodes in the given graph invisible
    HideMappings = function() {
        for(var i = 0; i <  graph.getNodes().length; i++){
            node = graph.getNodes()[i];
            if (node.getMapping() != null)
                node.getMapping().setVisible(false);
            node.getBase().setSelection(false);
            node.getBase().setMappingSelection(false);
            node.getBase().setHoverSelection(false);
        }
    }

    //sets all the mappings invisible
    HideAllMappings = function() {
        HideMappings(graph);
        HideMappings(otherGraph);
    }

    var hover_node;
    var neighbors;


        /*
        node.getBase().getBitmap().onClick = function(event) { //Called when the mouse is pressed.
            hover_node = null;
            if (event.type == "onClick") {
                //Hide previous selections
                HideAllNodes();
                HideAllEdges();
                HideAllMappings();
                //Select New Node and set new neighbors visible
                player.selectNode(node);
                node.getBase().setVisible(true);
                neighbors = node.getNeighbors();
                for(var j = 0; j < neighbors.length; j++)
                    neighbors[j].getBase().setVisible(true);
                //Set all edges of the selected node visible
                for(var j = 0; j < graph.getEdges().length; j++) {
                    if (node.equals(graph.getNode1(graph.getEdges()[j]))) {
                        graph.getEdges()[j].getValue().getRoad().setVisible(true);
                        node.getBase().positionSelection(node.getPos());
                        node.getBase().setSelection(true);
                    }
                }

                if (node.getPlayer() == player.getId()) {
                    //Create Mapping if a Node is already set to be mapped
                    if (player.getNodeToBeMapped() != null) {
                        if (player.getId() == player.getSelectedNode().getPlayer() & player.getSelectedNode().getMapping() == null) {
                            if (player.getSelectedNode().getBase().isCity()==true & player.getNodeToBeMapped().getBase().isCity()==false) {
                                //Inefficient mapping occurs when the city population is less than the capacity of a camp, thus the city lacks the required resources for the camp
                                //mapping score : 0 , mapping propagation score : -1
                                if (player.getSelectedNode().getNodeLevel() < player.getNodeToBeMapped().getNodeLevel()) {
                                    player.getSelectedNode().setMapping(player.getNodeToBeMapped(), 0);
                                }
                                    //Acceptable mapping occurs when the city population is more than the capacity of a camp, thus the has the resources for the camp but the camp is too small for the city
                                    //mapping score : 1 , mapping propagation score : 0
                                else if (player.getSelectedNode().getNodeLevel() > player.getNodeToBeMapped().getNodeLevel()) {
                                    player.getSelectedNode().setMapping(player.getNodeToBeMapped(), 1);
                                }
                                    //Efficient mapping occurs when the city population is exactly matches the capacity of a camp
                                    //mapping score : 2 , mapping propagation score : 1
                                else {
                                    player.getSelectedNode().setMapping(player.getNodeToBeMapped(), 2);
                                }
                            } else if (player.getSelectedNode().getBase().isCity()==false & player.getNodeToBeMapped().getBase().isCity()==true) {
                                //Inefficient mapping occurs when the city population is less than the capacity of a camp, thus the city lacks the required resources for the camp
                                //mapping score : 0 , mapping propagation score : -1
                                if (player.getNodeToBeMapped().getNodeLevel() < player.getSelectedNode().getNodeLevel()) {
                                    player.getNodeToBeMapped().setMapping(player.getSelectedNode(), 0);
                                }
                                    //Acceptable mapping occurs when the city population is more than the capacity of a camp, thus the has the resources for the camp but the camp is too small for the city
                                    //mapping score : 1 , mapping propagation score : 0
                                else if (player.getNodeToBeMapped().getNodeLevel() > player.getSelectedNode().getNodeLevel()) {
                                    player.getNodeToBeMapped().setMapping(player.getSelectedNode(), 1);
                                }
                                    //Efficient mapping occurs when the city population is exactly matches the capacity of a camp
                                    //mapping score : 2 , mapping propagation score : 1
                                else {
                                    player.getNodeToBeMapped().setMapping(player.getSelectedNode(), 2);
                                }
                            }
                        }//else --> Andrey remove drag mapping indication HERE <--
                        player.setNodeToBeMapped(null);
                    }
                    //Set the mapping of the selected node visible
                    if (node.getMapping() != null)
                        node.getMapping().setVisible(true);

                    //show the available Constructions for this node
                    //gui.showConstructions(player.getSelectedNode(), graph.isCity(), true);
                } else {//This node does not belong to the player
                    //show the available Constructions for this node
                    //gui.showConstructions(player.getSelectedNode(), graph.isCity(), false);
                    player.setNodeToBeMapped(null);
                }
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
                }
            }
            else if (event.type == "BUTTON_RIGHT") {
                //Hide previous selections
                HideAllNodes();
                HideAllEdges();
                HideAllMappings();
                //Select New Node and set new neighbors visible
                player.selectNode(node);
                node.getBase().setVisible(true);
                for(var j = 0; j < neighbors.length; j++)
                    neighbors[j].getBase().setVisible(true);
                //Set all edges of the selected node visible
                for(var j = 0; j < graph.getEdges().length; j++) {
                    if (node.equals(graph.getNode1(graph.getEdges()[j]))) {
                        graph.getEdges()[j].getValue().getRoad().setVisible(true);
                        if (player.getSelectedNode().getMapping() != null) {
                            node.getBase().positionSelection(node.getPos());
                            node.getBase().setSelection(true);
                        }
                        else {
                            node.getBase().positionMappingSelection(node.getPos());
                            node.getBase().setMappingSelection(true);
                        }
                    }
                }

                if (player.getId() == player.getSelectedNode().getPlayer()) {
                    //remove the previous node to be mapped
                    player.setNodeToBeMapped(null);

                    if (player.getSelectedNode().getMapping() != null) {
                        if (player.getSelectedNode().getBase().isCity())
                            player.getSelectedNode().unMap(player.getSelectedNode().getMapping().getScore());
                        else if (!player.getSelectedNode().getBase().isCity())
                            player.getSelectedNode().getMappedNode().unMap(player.getSelectedNode().getMapping().getScore());
                    } else if (player.getNodeToBeMapped() == null) {
                        if (player.getSelectedNode().getMapping() == null) {
                            player.setNodeToBeMapped(player.getSelectedNode());
                            //TODO : add some graphical indication - Andrey add drag mapping HERE <--
                        }
                    }
                    //Set the mapping of the selected node visible
                    if (node.getMapping() != null)
                        node.getMapping().setVisible(true);

                    //show the available Constructions for this node
                    //gui.showConstructions(player.getSelectedNode(), graph.isCityGraph(), true);

                } else {//This node does not belong to the player
                    //show the available Constructions for this node
                    //gui.showConstructions(player.getSelectedNode(), graph.isCityGraph(), false);
                    //TODO : remove the graphical indication - Andrey add removal drag mapping HERE <--
                }
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
                }
            }
        }*/
}
