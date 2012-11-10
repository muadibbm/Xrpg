// Global CreateJS Core variables
var Const;
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
var player;
var graphDataA;
var graphDataB;
var cityGraphA;
var campGraphA;
//var cityGraphB;
//var campGraphB;

function initialize() {
    
    Const = new Constants();

    canvas = document.getElementById("gameCanvas");
    canvas.width = Const.WINDOW_WIDTH;
    canvas.height = Const.WINDOW_HEIGHT;
    $('#gameCanvas').css('margin-left', -canvas.width / 2);

    context = canvas.getContext("2d");

    preload = new PreloadJS();
    graphics = new Graphics();
    stage = new Stage(canvas);

    // Use PreloadJS to make sure sound and images are loaded before we begin processing
    // (Especially important for large/remote resources)
    preload.onComplete = prepareGame;
    preload.loadManifest(manifest);
}

// Preparing and loading game resources
function prepareGame() {
    loadImages();

    // Construction of game objects
    environment = new Environment();
    environment.prepare();

    player = new Player(1, "player 1");

    graphDataA = createResource("graphDataA");
    graphDataB = createResource("graphDataB");

    cityGraphA = new Graph(1, true, Const.GRAPH_X, Const.GRAPH_Y, Const.CITY_GRAPH_WIDTH, Const.CITY_GRAPH_HEIGHT);
    cityGraphA.generateGraph(graphDataA, player.getId());

    campGraphA = new Graph(2, false, Const.GRAPH_X + Const.GRAPH_GAP + Const.CITY_GRAPH_WIDTH, Const.GRAPH_Y, Const.TOWER_GRAPH_WIDTH, Const.TOWER_GRAPH_HEIGHT);
    campGraphA.generateGraph(graphDataB, player.getId());

    environment.getGraphLayer().addChild(cityGraphA.getLayer(), campGraphA.getLayer());

    stage.addChild(environment.getGraphLayer());
    stage.addChild(environment.getUiLayer());

    addMouseEvents(environment);

    // Add key events listeners
    document.onkeydown = function (e) {
        handleKeyDownEvents(e);
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