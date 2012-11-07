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
var cityGraphB;
var campGrpahA;
var campGrpahB;

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

    // Construction of game objects
    environment = new Environment();
    player = new Player(1, "player 1");
    cityGraphA = new Graph(1, true, Const.WORLD_WIDTH / 35, Const.GRAPH_Y, Const.WORLD_WIDTH / 5, Const.CITY_GRAPH_HEIGHT);
    //cityGraphB = new Graph(4, true, 25 * Const.WORLD_WIDTH / 35, Const.GRAPH_Y, Const.WORLD_WIDTH / 5, Const.CITY_GRAPH_HEIGHT);
    //campGraphA = new Graph(2, false, 2 * Const.WORLD_WIDTH / 35 + Const.CAMP_GRAPH_GAP, 2 * Const.GRAPH_Y, Const.WORLD_WIDTH / 5, Const.CAMP_GRAPH_HEIGHT - Const.GRAPH_Y);
    //campGraphB = new Graph(3, false, 4 * Const.WORLD_WIDTH / 35 - Const.CAMP_GRAPH_GAP, 2 * Const.GRAPH_Y, Const.WORLD_WIDTH / 5, Const.CAMP_GRAPH_HEIGHT - Const.GRAPH_Y);

    // Use PreloadJS to make sure sound and images are loaded before we begin processing
    // (Especially important for large/remote resources)
    preload.onComplete = prepareGame;
    preload.loadManifest(manifest);
}

// Preparing and loading game resources
function prepareGame() {
    loadImages();
    environment.prepare();
    graphDataA = createResource("graphDataA");
    graphDataB = createResource("graphDataB");
    cityGraphA.generateGraph(graphDataA, environment.getGraphLayer(), player.getId());
    //cityGraphB.generateGraph(graphDataA, environment.getGraphLayer(), player.getId());
    //campGraphA.generateGraph(graphDataB, environment.getGraphLayer(), player.getId());
    //campGraphB.generateGraph(graphDataB, environment.getGraphLayer(), player.getId());

    stage.addChild(environment.getGraphLayer());
    stage.addChild(environment.getUiLayer());

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