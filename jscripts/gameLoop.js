// Global CreateJS Core variables
var canvas;
var context;
var preload;
var graphics;
var stage;
/**
*  - stage (root)
*      - canvas
*           - graphs (containers)
*           - background + tree + cave (bitmaps)
*		    - UI (containers)
*/
var environment;

function initialize() {
    canvas = document.getElementById("gameCanvas");
    canvas.width = Const.WINDOW_WIDTH;
    canvas.height = Const.WINDOW_HEIGHT;
    $('#gameCanvas').css('margin-left', -canvas.width / 2);

    context = canvas.getContext("2d");

    preload = new PreloadJS();
    graphics = new Graphics();
    stage = new Stage(canvas);

    // Construction of game objects and initialization goes here
    environment = new Environment();

    // Use PreloadJS to make sure sound and images are loaded before we begin processing
    // (Especially important for large/remote resources)
    preload.onComplete = prepareGame;
    preload.loadManifest(manifest);
}

// Preparing and loading game resources
function prepareGame() {
    environment.prepare();
    addMouseEvents(environment);

    // Add key events listeners
    document.onkeydown = function (e) {
        //.handleKeyDown(e);
    };

    startGame(); // Call the game loop to start
}

function startGame() {
    Ticker.setFPS(Const.UPDATE_RATE);
    Ticker.addListener(window);
}

//The game Loop update function
function tick() {
    stage.update();
}