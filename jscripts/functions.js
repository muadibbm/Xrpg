function prepareGame() {
    // Preparing stuff
    prepareBG();
    prepareCave();
    prepareTreeOfLife();
    
    // Updates once the game starts but this step is not really necessary
    stage.update();

    // Call the game loop to start
    startGame();
}

function prepareBG() {
    bgImage = preload.getResult("background").result;
    bgBitmap = new Bitmap(bgImage);

    // Adjust the image scale to fit the canvas size
    bgBitmap.scaleX = canvas.width / bgImage.width;
    bgBitmap.scaleY = canvas.height / bgImage.height;

    // Add a CSS style to center the canvas onto the middle of the screen
    $('#gameCanvas').css('margin-left', -canvas.width / 2);

    stage.addChild(bgBitmap);
}

function prepareTreeOfLife() {
    treeOfLifeImage = preload.getResult("treeOfLife").result;
    treeOfLifeBitmap = new Bitmap(treeOfLifeImage);

    // Adjust the image scale to fit the canvas size
    treeOfLifeBitmap.scaleX = treeOfLifeImage.width / canvas.width;
    treeOfLifeBitmap.scaleY = treeOfLifeImage.height / canvas.height; // Scale adjustments

    // Position the tree at the bottom center of the canvas
    treeOfLifeBitmap.x = canvas.width / 2 - treeOfLifeImage.width / 6; // Scale adjustments
    treeOfLifeBitmap.y = canvas.height - treeOfLifeImage.height / 3; // Scale adjustments

    stage.addChild(treeOfLifeBitmap);
}

function prepareCave() {
    caveImage = preload.getResult("cave").result;
    caveBitmap = new Bitmap(caveImage);

    // Adjust the image scale to fit the canvas size
    caveBitmap.scaleX = (caveImage.width / canvas.width) / 4.5; // Scale adjustments
    caveBitmap.scaleY = (caveImage.height / canvas.height) / 4.5; // Scale adjustments

    // Position the tree at the bottom center of the canvas
    caveBitmap.x = canvas.width / 2 - caveImage.width / 10; // Scale adjustments
    caveBitmap.y = 0; // Scale adjustments

    stage.addChild(caveBitmap);
}