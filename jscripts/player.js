/**
* The Class contains all the game logic required for the player 
* @param player_id - the unique integer associated with this player
* @param player_name - the name of the player
*/
function Player(player_id, player_name) {
    var id = player_id;
    var name = player_name;
    var gold = Const.STARTING_GOLD;
    var selected_node = null;
    var nodeTobeMapped = null;

    //@return the amount of gold the player has
    this.getGold = function() {
        return gold;
    }

    //Sets player's gold to the given amount
    //@param amount - integer
    this.setGold = function(amount) {
        gold = amount;
    }

    //@return the unique integer id
    this.getId = function() {
        return player_id;
    }

    //@return the name of the player
    this.getName = function () {
        return name;
    }

    //Sets the selected node to the given node
    //@param node - instance of Node
    this.selectNode = function (node) {
        selected_node = node;
    }

    //Sets the node to be mapping to the given node
    //@ node - instance of Node
    this.setNodeToBeMapped = function (node) {
        nodeToBeMapped = node;
    }

    //@return the node instance selected by the player
    this.getSelectedNode = function () {
        return selected_node;
    }

    //@return the node instance the player has selected from mapping
    this.getNodeToBeMapped = function () {
        return nodeTobeMapped;
    }
}