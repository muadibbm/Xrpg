/* Constant object containing constant game values implemented in a JavaScript object literal */
function Constants () {
    
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
    this.BACKGROUND_ALPHA = 0.93;

    this.GRAPH_X = this.WORLD_WIDTH / 45.0;
    this.GRAPH_Y = this.WORLD_HEIGHT/ 45.0;
    this.GRAPH_GAP = this.WORLD_WIDTH / 10.0;
    
    this.STARTING_GOLD = 1000;
    
    this.BASE_CITY_SCALE = 0.45;
    this.BASE_TOWER_SCALE = 0.3;

    this.CITY_SELECTION_SCALE1 = 0.17;
    this.CITY_SELECTION_SCALE2 = 0.12;
    this. SELECTION_ALPHA = 0.75;
    this.SELECTED_BASE_ALPHA = 1.0;
    this.BASE_SELECTION_SPEED = 1000;
    
    this.MIN_CITY_DISTANCE = this.WORLD_WIDTH / 30.0;
    this.MAX_CITY_DISTANCE = this.WORLD_WIDTH - 100.0;
    this.CITY_GRAPH_WIDTH = this.WORLD_WIDTH / 3.0;
    this.CITY_GRAPH_HEIGHT = this.WORLD_HEIGHT - this.WORLD_HEIGHT / 10.0;
    
    /*PALACE_X : 0.0,
	PALACE_Y : -23.0,
	PALACE_DEPTH : 3.2,
	PALACE_SCALE : 0.048,
	BAZAR_X : -17.5,
	BAZAR_Y : -2.0,
	BAZAR_DEPTH : 3.43,
	BAZAR_SCALE : 0.015,
	BAZAR_FOOD_X : -17.5,
	BAZAR_FOOD_Y : -2.0,
	BAZAR_FOOD_DEPTH : 3.42,
	BAZAR_FOOD_SCALE : 0.015,
	BAZAR_CHINA_X : -16.0,
	BAZAR_CHINA_Y : -9.5,
	BAZAR_CHINA_DEPTH : 3.41,
	BAZAR_CHINA_SCALE : 0.014,
	BAZAR_CARPET_X : -20.0,
	BAZAR_CARPET_Y : 7.0,
	BAZAR_CARPET_DEPTH : 3.43,
	BAZAR_CARPET_SCALE : 0.016,
	GARDEN_X : 18.8,
	GARDEN_Y : -5.0,
	GARDEN_DEPTH : 3.3,
	GARDEN_SCALE : 0.029,
	SMITHY_X : 21.0,
	SMITHY_Y : 15.0,
    SMITHY_DEPTH : 3.4,
	SMITHY_SCALE : 0.021,
	TOWER1_X : 29.0,
	TOWER1_Y : 19.0,
	TOWER2_X : -29.0,
	TOWER2_Y : 19.0,
	TOWER3_X : 20.0,
	TOWER3_Y : -24.0,
	TOWER4_X : -20.0,
	TOWER4_Y : -24.0,
	TOWER_GATE1_X : 12.0,
	TOWER_GATE1_Y : 19.0,
	TOWER_GATE2_X : -11.0,
	TOWER_GATE2_Y : 19.0,
	TOWER_GATE_SCALE : 0.017,
	TOWER_FRONT_DEPTH : 3.7,
	TOWER_FRONT_SCALE : 0.015,
	TOWER_BACK_DEPTH : 3.2,
	TOWER_BACK_SCALE : 0.0072,
	WALL_FRONT_X : 0.0,
	WALL_FRONT_Y : 22.0,
	WALL_BACK_X : 0.0,
	WALL_BACK_Y : -23.2,
	WALL_LEFT_X : -29.29,
	WALL_LEFT_Y : 1.67,
	WALL_RIGHT_X : 29.29,
	WALL_RIGHT_Y : 1.67,
	WALL_FRONT_DEPTH : 3.9,
	WALL_FRONT_SCALE : 0.01333*3,
	WALL_FRONT_SCALE_VERTICAL : 0.0223*3,
	WALL_BACK_DEPTH : 3.1,
	WALL_BACK_SCALE : 0.00812*3,
	WALL_BACK_SCALE_VERTICAL : 0.0109*3,
	WALL_SIDE_SCALE : 0.016,
	WALL_SIDE_SCALE_VERTICAL : 0.029,*/ 
	/*CARAVAN_DEPTH : 4.0,
	CARAVAN_ALPHA : 0.93,
	CARAVAN_SCALE : 0.023,
	CARAVAN_TRADING_TIME : 5000,
	CARAVAN_SPEED : 100,*/
	/*PALACE_COST : 100,
	BAZAR_FOOD_COST : 40,
	BAZAR_CHINA_COST : 50,
	BAZAR_CARPET_COST : 60,
	GARDEN_COST : 80,
	SMITHY_COST : 70,
	TOWER_COST : 60,
	WALL_COST : 50,*/
    
    this.MIN_TOWER_DISTANCE = this.WORLD_WIDTH / 50.0;
    this.TOWER_GRAPH_WIDTH = this.WORLD_WIDTH / 3.0;
    this.TOWER_GRAPH_HEIGHT = this.WORLD_HEIGHT - this.WORLD_HEIGHT / 10;
    
    /*COMMAND_TENT_X : 0.0,
	COMMAND_TENT_Y : 0.0,
	COMMAND_TENT_DEPTH : 3.3,
	COMMAND_TENT_SCALE : (0.075)*this.CAMP_SCALE,
	COMMAND_TENT_COST : 90,*/
	
    //this.TREE_OF_LIFE_SCALE = 0.1;
    
	this.DEEVE_CAVE_SCALE = 0.17;
    //DEEVE_WAVE_WAITING_TIME : 5000,
    //DEEVE_INITIAL_POS_X : this.WORLD_WIDTH/2.0,
    //DEEVE_INITIAL_POS_Y : this.WORLD_HEIGHT/10.0,
    //DEEVE_SCALE : 0.17,
    //DEEVE_ALPHA : 1.0,
    //DEEVE_DEPTH : 3.0,
    //DEEVE_SPEED : 10,

    this.TREE_SCALE = 0.81,
    this.MAX_TREE_NUMBER = 1800,
    this.MIN_INBETWEEN_TREE_DISTANCE = 10.0,
    this.MIN_CAVE_TREE_DISTANCE = this.WORLD_WIDTH / 10.0,
    this.MIN_NODE_TREE_DISTANCE = this.WORLD_WIDTH / 30.0,
    
    //UI_DEPTH : 3.0,
    //CONSTRUCTION_PANEL_X : 0.0,
    //CONSTRUCTION_PANEL_Y : this.WINDOW_WIDTH/13.0,
    //CONSTRUCTION_PANEL_SCALE : 0.15,
    //INFO_PANEL_X : 0.0,
    //INFO_PANEL_Y : 0.0,
    //INFO_PANEL_SCALE : 0.3/1.9,
    //POPULATION_SCALE : 0.7/1.9,
    //GOLD_SCALE : 0.6/1.9,
    /* TODO : Must be set in the initialize script
	POPULATION_X : INFO_PANEL_X + 2*assets().getImage("images/UI/infoPanel.png").width()/3*INFO_PANEL_SCALE,
	POPULATION_Y : assets().getImage("images/UI/infoPanel.png").height()/3*INFO_PANEL_SCALE,
	GOLD_X : INFO_PANEL_X + assets().getImage("images/UI/infoPanel.png").width()/3*INFO_PANEL_SCALE,
	GOLD_Y : assets().getImage("images/UI/infoPanel.png").height()/3*INFO_PANEL_SCALE, */
    
    this.ROAD_WIDTH = 0.31;
    this.MAPPING_WIDTH = 0.32;

    this.SHADOW = 0.45;
    this.HIDDEN_MAPPING = 0.3;
    this.VISIBLE_MAPPING = 0.9;
	this.HIDDEN_ROAD = 0.1;
	this.VISIBLE_ROAD = 0.8;
	this.BASE_ALPHA = 0.5;
	this.VISIBLE_BASE = 0.9;

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