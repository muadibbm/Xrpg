//the tree instance
function Tree(layer, x, y)
{
    var coordinate = Tuple2d(x,y);
    var treeBitmap = new Bitmap(treeImage);
    treeBitmap.setTransform(x - treeBitmap.image.width / 2.0, y - treeBitmap.image.height / 2.0, Const.TREE_SCALE, Const.TREE_SCALE);
    var treeShadowBitmap = new Bitmap(treeShadowImage);
    treeShadowBitmap.alpha = Const.SHADOW;
    treeShadowBitmap.setTransform(x - treeBitmap.image.width / 3.0, y - treeBitmap.image.height / 30.0, Const.TREE_SCALE, Const.TREE_SCALE);

    layer.addChild(treeBitmap, treeShadowBitmap);
}

//Checks if a tree is as far as a given distance from all the other already placed trees
function isTreeSeperated(graph, posX, posY) {
    var distance = 0.0;
    for (var i = 0; i < graph.getNodes().length; i++) {
        distance = graph.getNodes()[i].getPos().getDistanceFrom(new Tuple2d(posX, posY));
        if (distance < Const.MIN_NODE_TREE_DISTANCE)
            return false;
    }
    var cavePos = new Tuple2d(environment.getCaveBitmap().x, environment.getCaveBitmap().y);
    distance = cavePos.getDistanceFrom(new Tuple2d(posX, posY));
    if (distance < Const.MIN_CAVE_TREE_DISTANCE)
        return false;
    return true;
}

//draws all the background tree bitmaps
function plantTrees(x, y, w, h, max_number, graphA, graphB, treelayer, trees) {
	var number = 0;
    var tmpX = 0.0;
    var tmpY = 0.0;
    var tree;
    while(number < max_number) {
        tmpX = Math.random()*w + x;
        tmpY = Math.random()*h + y;
        if (isTreeSeperated(graphA, tmpX, tmpY) & isTreeSeperated(graphB, tmpX, tmpY)) {
            tree = new Tree(treelayer, tmpX, tmpY);
            trees.push(tree);
            number++;
        }
    }
}