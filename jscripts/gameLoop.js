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
var trees;
var player;
var gui;
var graphDataA;
var graphDataB;
var cityGraphA;
var campGraphA;
var hover_node;//global variable for MouseOver and MouseOut

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
    stage.enableMouseOver();

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
    gui = new Gui(environment.getUiLayer());

    graphDataA = createResource("graphDataA");
    graphDataB = createResource("graphDataB");

    cityGraphA = new Graph(1, true, Const.GRAPH_X, Const.GRAPH_Y, Const.CITY_GRAPH_WIDTH, Const.CITY_GRAPH_HEIGHT, gui);
    cityGraphA.generateGraph(graphDataA, player.getId());

    campGraphA = new Graph(2, false, Const.GRAPH_X + Const.GRAPH_GAP + Const.CITY_GRAPH_WIDTH, Const.GRAPH_Y, Const.TOWER_GRAPH_WIDTH, Const.TOWER_GRAPH_HEIGHT, gui);
    campGraphA.generateGraph(graphDataB, player.getId());

    trees = [];
    plantTrees(0, 0, Const.WORLD_WIDTH, Const.WORLD_HEIGHT, Const.MAX_TREE_NUMBER, cityGraphA, campGraphA, environment.getTreeLayer(), trees);

    environment.getRoadLayer().addChild(cityGraphA.getRoadLayer(), campGraphA.getRoadLayer())
    environment.getGraphLayer().addChild(cityGraphA.getGraphLayer(), campGraphA.getGraphLayer());

    stage.addChild(environment.getRoadLayer());
    stage.addChild(environment.getMappingLayer());
    stage.addChild(environment.getTreeLayer());
    stage.addChild(environment.getGraphLayer());
    stage.addChild(environment.getCreatureLayer());
    stage.addChild(environment.getUiLayer());

    for (var i = 0; i < cityGraphA.getNodes().length; i++) {
        cityGraphA.getNodes()[i].addMouseClick(cityGraphA, campGraphA, player);
        cityGraphA.getNodes()[i].addMouseDoubleClick(cityGraphA, campGraphA, player);
        cityGraphA.getNodes()[i].addOnMouseOut(cityGraphA, player);
        cityGraphA.getNodes()[i].addOnMouseOver(cityGraphA, player);
    }

    for (var i = 0; i < campGraphA.getNodes().length; i++) {
        campGraphA.getNodes()[i].addMouseClick(campGraphA, cityGraphA, player);
        campGraphA.getNodes()[i].addMouseDoubleClick(campGraphA, cityGraphA, player);
        campGraphA.getNodes()[i].addOnMouseOut(campGraphA, player);
        campGraphA.getNodes()[i].addOnMouseOver(campGraphA, player);
    }

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
    cityGraphA.updateAll();
    stage.update();
    player.setGold(player.getGold() - 1);
    gui.setGold(player.getGold());
}