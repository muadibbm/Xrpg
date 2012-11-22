/* Constant object containing constant game values implemented in a JavaScript object literal */
function Constants() {
    this.UPDATE_RATE = 60;
    this.WINDOW_WIDTH = (0.75) * screen.width;
    this.WINDOW_HEIGHT = (0.75) * screen.height;
    this.WORLD_WIDTH = this.WINDOW_WIDTH;
    this.WORLD_HEIGHT = this.WINDOW_HEIGHT;
    this.WORLD_ORIGIN_X = 0.0;
    this.WORLD_ORIGIN_Y = 0.0;
    this.ZOOM_DEFAULT = 1.0;
    this.BACKGROUND_ALPHA = 0.93;
    this.GRAPH_X = this.WORLD_WIDTH / 45.0;
    this.GRAPH_Y = this.WORLD_HEIGHT / 45.0;
    this.GRAPH_GAP = this.WORLD_WIDTH / 10.0;
    this.STARTING_GOLD = 1000;
    this.BASE_CITY_SCALE = 0.45;
    this.BASE_TOWER_SCALE = 0.3;
    this.CITY_SELECTION_SCALE1 = 0.17;
    this.CITY_SELECTION_SCALE2 = 0.12;
    this.CARAVAN_SCALE = 0.02;
    this.CARAVAN_MOVING_TIME = 200;
    this.CARAVAN_TRADING_TIME = 5000;
    this.CAMP_SELECTION_SCALE = 0.14;
    this.SELECTION_ALPHA = 0.75;
    this.SELECTED_BASE_ALPHA = 1.0;
    this.BASE_SELECTION_SPEED = 1000;
    this.MIN_CITY_DISTANCE = this.WORLD_WIDTH / 30.0;
    this.MAX_CITY_DISTANCE = this.WORLD_WIDTH - 100.0;
    this.CITY_GRAPH_WIDTH = this.WORLD_WIDTH / 3.0;
    this.CITY_GRAPH_HEIGHT = this.WORLD_HEIGHT - this.WORLD_HEIGHT / 10.0;
    this.MIN_TOWER_DISTANCE = this.WORLD_WIDTH / 50.0;
    this.TOWER_GRAPH_WIDTH = this.WORLD_WIDTH / 3.0;
    this.TOWER_GRAPH_HEIGHT = this.WORLD_HEIGHT - this.WORLD_HEIGHT / 10;
    this.DEEVE_CAVE_SCALE = 0.17;
    this.DEEVE_WAVE_WAITING_TIME = 5000,
    this.DEEVE_SCALE = 0.8,
    this.DEEVE_SPEED = 20,
    this.TREE_SCALE = 0.81,
    this.MAX_TREE_NUMBER = 1800,
    this.MIN_INBETWEEN_TREE_DISTANCE = 10.0,
    this.MIN_CAVE_TREE_DISTANCE = this.WORLD_WIDTH / 10.0,
    this.MIN_NODE_TREE_DISTANCE = this.WORLD_WIDTH / 30.0,
    this.ROAD_WIDTH = 0.31;
    this.MAPPING_WIDTH = 0.32;
    this.SHADOW = 0.45;
    this.HIDDEN_MAPPING = 0.3;
    this.VISIBLE_MAPPING = 0.9;
    this.HIDDEN_ROAD = 0.1;
    this.VISIBLE_ROAD = 0.8;
    this.BASE_ALPHA = 0.5;
    this.VISIBLE_BASE = 0.9;
    this.HIDDEN_CARAVAN = 0.0;
    this.VISIBLE_CARAVAN = 1.0;
    this.HIDDEN_DEEVE = 0.0;
    this.VISIBLE_DEEVE = 1.0;

    // Key codes for key events
    this.KEYCODE_DOWN = 40;
    this.KEYCODE_UP = 38;
    this.KEYCODE_LEFT = 37;
    this.KEYCODE_RIGHT = 39;
    this.KEYCODE_W = 87;
    this.KEYCODE_A = 65;
    this.KEYCODE_D = 68;
    this.KEYCODE_S = 83;
}

var EdgeType = {
    W: 1,
    w: 2,
    H: 3,
    h: 4,
    S: 5,
    s: 6
}
Object.freeze(EdgeType);

var Isomer = {
    cis: 1,
    c: 2,
    trans: 3,
    t: 4
}
Object.freeze(Isomer);

var Nucleotide = {
    A: 1,
    a: 2,
    ADENINE: 3,
    T: 4,
    t: 5,
    THYMINE: 6,
    U: 7,
    u: 8,
    URACIL: 9,
    G: 10,
    g: 11,
    GUANINE: 12,
    C: 13,
    c: 14,
    CYTOSINE: 15
}