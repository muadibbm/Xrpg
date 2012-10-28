
function Environment() {

    // public bitmap variables for the environment elements
    this.bgBitmap;
    this.treeOfLifeBitmap;
    this.caveBitmap;

    // public method which prepares all the environment resources
    this.prepare = function () {
        this.bgBitmap = createBitmap("background", this.bgBitmap, preload, canvas);
        this.treeOfLifeBitmap = createBitmap("treeOfLife", this.treeOfLifeBitmap, preload, canvas);
        this.caveBitmap = createBitmap("cave", this.caveBitmap, preload, canvas);
        transformBitmap(this.bgBitmap, 0.0, 0.0, 1.0);
        transformBitmap(this.treeOfLifeBitmap, canvas.width / 2.0 - Const.TREE_OF_LIFE_SCALE * this.treeOfLifeBitmap.image.width / 5.0, canvas.height - Const.TREE_OF_LIFE_SCALE * this.treeOfLifeBitmap.image.height * 5.0, Const.TREE_OF_LIFE_SCALE);
        transformBitmap(this.caveBitmap, canvas.width / 2.0 - Const.TREE_OF_LIFE_SCALE * this.caveBitmap.image.width / 2.5, 0.0, Const.DEEVE_CAVE_SCALE);
        stage.addChild(this.bgBitmap);
        stage.addChild(this.treeOfLifeBitmap);
        stage.addChild(this.caveBitmap);
    }
}