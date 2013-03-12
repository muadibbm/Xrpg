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
	
    //this.BACKGROUND_WORLD_WIDTH = (7 / 3) * this.WORLD_WIDTH;
    //this.BACKGROUND_WORLD_HEIGHT = (7 / 3) * this.WORLD_HEIGHT;
    //this.BACKGROUND_WORLD_ORIGIN_X = this.WORLD_ORIGIN_X - this.WORLD_WIDTH / 3;
    //this.BACKGROUND_WORLD_ORIGIN_Y = this.WORLD_ORIGIN_Y - this.WORLD_HEIGHT / 3;
    this.BACKGROUND_ALPHA = 0.99;

    this.GRAPH_X = this.WORLD_WIDTH / 45.0;
    this.GRAPH_Y = this.WORLD_HEIGHT / 45.0;
    this.GRAPH_GAP = this.WORLD_WIDTH / 10.0;

    this.STARTING_GOLD = 100;
    this.GOLD_SCALE = 0.3;
    this.INFO_PANEL_SCALE = 0.15;
    this.POPULATION_SCALE = 0.4;
    this.POPULATION_INBETWEEN = 65.0;
    this.UI_KEY_SCALE = 0.5;
    this.BUILD_UI_SCALE = 0.13;
    this.CP_SCALE = 0.5;
    this.CONSTRUCTION_UNAVAILABLE = 0.3;
    
    //this.BASE_CITY_SCALE = 0.5;
    this.BASE_TOWER_SCALE = 0.23;

    this.CITY_SELECTION_SCALE1 = 0.25;
    this.CITY_SELECTION_SCALE2 = 0.19;
    this.CARAVAN_SCALE = 0.06;
    this.CARAVAN_MOVING_TIME = 100;
    this.CARAVAN_TRADING_TIME = 40000;
    this.CARAVAN_GOLD_EARNED = 2;
    this.CAMP_SELECTION_SCALE = 0.15;
    this.SELECTION_ALPHA = 0.68;
    this.SELECTED_BASE_ALPHA = 0.5;
    this.BASE_SELECTION_SPEED = 1000;

    //this.BASE_SELECTION_SPEED = 1000;
    
    this.MIN_CITY_DISTANCE = this.WORLD_WIDTH / 20.0;
    this.MAX_CITY_DISTANCE = this.WORLD_WIDTH - 100.0;
    this.CITY_GRAPH_WIDTH = this.WORLD_WIDTH / 3.0;
    this.CITY_GRAPH_HEIGHT = this.WORLD_HEIGHT - this.WORLD_HEIGHT / 8.0;

    this.CITY_ICON_SCALE = 0.45;
    this.PALACE_ICON_SCALE = 0.43;
    this.PALACE_ICON_X = -1.0;
    this.PALACE_ICON_Y = -10.0;
    this.BAZAR_ICON_SCALE = 0.45;
    this.BAZAR_ICON_X = 0.0;
    this.BAZAR_ICON_Y = 19.0;
    this.WALL_ICON_SCALE = 0.27;
    this.WALL_ICON_X = 0.0;
    this.WALL_ICON_Y = 6.0;

    this.PALACE_COST = 200;
    this.BAZAR_COST = 40;
    this.WALL_COST = 100;

    this.PALACE_GOLD_INCREASE = 8;

    this.CITY_HITPOINT = 500;
    this.PALACE_HITPOINT = 200;
    this.BAZAR_HITPOINT = 100;
    this.WALL_HITPOINT = 300;
    
    this.MIN_TOWER_DISTANCE = this.WORLD_WIDTH / 20.0;
    this.TOWER_GRAPH_WIDTH = this.WORLD_WIDTH / 3.0;
    this.TOWER_GRAPH_HEIGHT = this.WORLD_HEIGHT - this.WORLD_HEIGHT / 8.0;

    this.TOWER1_ICON_SCALE = 0.54;
    this.TOWER1_ICON_X = 0.0;
    this.TOWER1_ICON_Y = -7.0;

    this.TOWER1_COST = 10;
    this.TOWER2_COST = 30;
    this.TOWER3_COST = 50;

    this.TOWER1_HITPOINT = 200;
    this.TOWER2_HITPOINT = 300;
    this.TOWER3_HITPOINT = 400;

    this.TOWER1_DAMAGE = 10;
    this.TOWER2_DAMAGE = 20;
    this.TOWER3_DAMAGE = 30;

    this.RANGE_ALPHA = 0.5;
    this.TOWER1_RANGE_SCALE = this.WORLD_WIDTH / 7500;
    this.TOWER2_RANGE_SCALE = this.WORLD_WIDTH / 6300;
    this.TOWER3_RANGE_SCALE = this.WORLD_WIDTH / 5200;

    this.ARROW_SCALE = 0.12;
    this.ARROW_SPEED = 13;
    this.ARROW_COOLDOWN = 100;
    this.ARROW_KILL_DISTANCE = 10.0;
    this.ARROW_OFFSET = 8.0;
    this.ARROW_MISS_DISTANCE = 10.0;

    this.DEEVE_SPAWN_RATE = 1.0; // seconds
    this.DEEVE_NUMBER = 10;
    this.DEEVE_CAVE_SCALE = 0.17;
    this.DEEVE_WAVE_WAITING_TIME = 5000,
    this.DEEVE_SCALE = 0.6,
    this.DEEVE_SPEED = 130,
    this.DEEVE_KILLED_GOLD = 1;

    this.TREE_SCALE = 0.63,
    this.MAX_TREE_NUMBER = 300,
    this.MIN_INBETWEEN_TREE_DISTANCE = this.WORLD_WIDTH / 20.0,
    this.MIN_CAVE_TREE_DISTANCE = this.WORLD_WIDTH / 6.5,
    this.MIN_CITY_TREE_DISTANCE = this.WORLD_WIDTH / 11.0,
    this.MIN_TOWER_TREE_DISTANCE = this.WORLD_WIDTH / 15.0,

    this.MAPPING_POINT_X = 0.0;
    this.MAPPING_POINT_Y = 0.0;
    this.MAPPING_POINT_SCALE = 0.43;

    this.ROAD_WIDTH = 0.31;
    this.MAPPING_WIDTH = 0.32;

    this.SHADOW = 0.45;
    this.HIDDEN_MAPPING = 0.3;
    this.VISIBLE_MAPPING = 0.9;
    this.HIDDEN_SCORE = 0.27;
    this.VISIBLE_SCORE = 1.0;
    this.HIDDEN_ROAD = 0.1;
    this.VISIBLE_ROAD = 0.8;
    this.BASE_ALPHA = 0.39;
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