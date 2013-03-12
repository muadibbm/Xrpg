/**
 * This class manages all the user interface
 */
function Gui(uiLayer, player) {

    //User interface GroupLayer
    var uiGroup = new Container();

    //UiKey Pressed
    var keyPressed = false;

    //Selection Bitmaps
    var selectionLayer1 = new Bitmap(cityBaseSelectedImage1);
    var selectionLayer2 = new Bitmap(cityBaseSelectedImage2);
    var selectionLayerM1 = new Bitmap(cityBaseSelectedImage3);//selection for mapping node
    var selectionLayerM2 = new Bitmap(cityBaseSelectedImage4);//selection for mapping node
    var selectionLayerH1 = new Bitmap(cityBaseSelectedImage5);//selection for hover node
    var selectionLayerH2 = new Bitmap(cityBaseSelectedImage6);//selection for hover node
    
    selectionLayer1.alpha = Const.SELECTION_ALPHA;
    selectionLayer2.alpha = Const.SELECTION_ALPHA;
    selectionLayerM1.alpha = Const.SELECTION_ALPHA;
    selectionLayerM2.alpha = Const.SELECTION_ALPHA;
    selectionLayerH1.alpha = Const.SELECTION_ALPHA;
    selectionLayerH2.alpha = Const.SELECTION_ALPHA;

    uiLayer.addChild(selectionLayer1);
    uiLayer.addChild(selectionLayer2);
    uiLayer.addChild(selectionLayerM1);
    uiLayer.addChild(selectionLayerM2);
    uiLayer.addChild(selectionLayerH1);
    uiLayer.addChild(selectionLayerH2);

    //InfoPanel Bitmaps
    var infoPanel = new Bitmap(infoPanelImage);
    infoPanel.setTransform(Const.WINDOW_WIDTH / 2.0 - infoPanel.image.width / 2 * Const.INFO_PANEL_SCALE, Const.WORLD_HEIGHT - infoPanel.image.height * Const.INFO_PANEL_SCALE, Const.INFO_PANEL_SCALE, Const.INFO_PANEL_SCALE);
    infoPanel.alpha = 1.0;
    uiGroup.addChild(infoPanel);
    var population = [];
    var hoverPopulation = [];
    var goldAmount = new Digits(uiGroup, Const.WINDOW_WIDTH / 2.0 - infoPanel.image.width / 2.0 * Const.INFO_PANEL_SCALE/45.0, Const.WORLD_HEIGHT - infoPanel.image.height / 2.0 * Const.INFO_PANEL_SCALE, Const.GOLD_SCALE);
    var uiKey = new Bitmap(uiKeyImage);
    uiKey.setTransform(Const.WINDOW_WIDTH / 2.0 - uiKey.image.width / 2.1 * Const.UI_KEY_SCALE, Const.WORLD_HEIGHT - 2.75 * uiKey.image.height * Const.UI_KEY_SCALE, Const.UI_KEY_SCALE, Const.UI_KEY_SCALE);
    uiGroup.addChild(uiKey);

    //City Constructions
    var cpPalace = new Bitmap(constructionPaneImage);
    var cpBazar = new Bitmap(constructionPaneImage);
    var cpWall = new Bitmap(constructionPaneImage);
    var cpPalaceSelected = new Bitmap(selectedConstructionPaneImage);
    var cpBazarSelected = new Bitmap(selectedConstructionPaneImage);
    var cpWallSelected = new Bitmap(selectedConstructionPaneImage);
    var palaceUi = new Bitmap(palaceUiImage);
    var bazarUi = new Bitmap(bazarUiImage);
    var wallUi = new Bitmap(wallUiImage);
    cpPalace.setTransform(Const.WINDOW_WIDTH / 2.0 - cpPalace.image.width / 2 * Const.CP_SCALE - 150.0, Const.WORLD_HEIGHT - cpPalace.image.height * Const.CP_SCALE, Const.CP_SCALE, Const.CP_SCALE);
    cpBazar.setTransform(Const.WINDOW_WIDTH / 2.0 - cpPalace.image.width / 2 * Const.CP_SCALE - 245.0, Const.WORLD_HEIGHT - cpPalace.image.height * Const.CP_SCALE, Const.CP_SCALE, Const.CP_SCALE);
    cpWall.setTransform(Const.WINDOW_WIDTH / 2.0 - cpPalace.image.width / 2 * Const.CP_SCALE - 342.5, Const.WORLD_HEIGHT - cpPalace.image.height * Const.CP_SCALE, Const.CP_SCALE, Const.CP_SCALE);
    cpPalaceSelected.setTransform(Const.WINDOW_WIDTH / 2.0 - cpPalace.image.width / 2 * Const.CP_SCALE - 150.0, Const.WORLD_HEIGHT - cpPalace.image.height * Const.CP_SCALE, Const.CP_SCALE, Const.CP_SCALE);
    cpBazarSelected.setTransform(Const.WINDOW_WIDTH / 2.0 - cpPalace.image.width / 2 * Const.CP_SCALE - 245.0, Const.WORLD_HEIGHT - cpPalace.image.height * Const.CP_SCALE, Const.CP_SCALE, Const.CP_SCALE);
    cpWallSelected.setTransform(Const.WINDOW_WIDTH / 2.0 - cpPalace.image.width / 2 * Const.CP_SCALE - 342.5, Const.WORLD_HEIGHT - cpPalace.image.height * Const.CP_SCALE, Const.CP_SCALE, Const.CP_SCALE);
    palaceUi.setTransform(Const.WINDOW_WIDTH / 2.0 - palaceUi.image.width / 2 * Const.BUILD_UI_SCALE - 150.0, Const.WORLD_HEIGHT - palaceUi.image.height * Const.BUILD_UI_SCALE, Const.BUILD_UI_SCALE, Const.BUILD_UI_SCALE);
    bazarUi.setTransform(Const.WINDOW_WIDTH / 2.0 - palaceUi.image.width / 2 * Const.BUILD_UI_SCALE - 245.0, Const.WORLD_HEIGHT - palaceUi.image.height * Const.BUILD_UI_SCALE, Const.BUILD_UI_SCALE, Const.BUILD_UI_SCALE);
    wallUi.setTransform(Const.WINDOW_WIDTH / 2.0 - palaceUi.image.width / 2 * Const.BUILD_UI_SCALE - 343.0, 3.0 + Const.WORLD_HEIGHT - palaceUi.image.height * Const.BUILD_UI_SCALE, Const.BUILD_UI_SCALE, Const.BUILD_UI_SCALE);
    cpPalaceSelected.visible = false;
    cpBazarSelected.visible = false;
    cpWallSelected.visible = false;
    uiGroup.addChild(cpPalace);
    uiGroup.addChild(cpBazar);
    uiGroup.addChild(cpWall);
    uiGroup.addChild(cpPalaceSelected);
    uiGroup.addChild(cpBazarSelected);
    uiGroup.addChild(cpWallSelected);
    uiGroup.addChild(palaceUi);
    uiGroup.addChild(bazarUi);
    uiGroup.addChild(wallUi);

    //Tower Constructions
    var cpTower1 = new Bitmap(constructionPaneImage);
    var cpTower1Selected = new Bitmap(selectedConstructionPaneImage);
    var tower1Ui = new Bitmap(tower1UiImage);
    cpTower1.setTransform(Const.WINDOW_WIDTH / 2.0 - cpPalace.image.width / 2 * Const.CP_SCALE + 150.0, Const.WORLD_HEIGHT - cpPalace.image.height * Const.CP_SCALE, Const.CP_SCALE, Const.CP_SCALE);
    cpTower1Selected.setTransform(Const.WINDOW_WIDTH / 2.0 - cpPalace.image.width / 2 * Const.CP_SCALE + 150.0, Const.WORLD_HEIGHT - cpPalace.image.height * Const.CP_SCALE, Const.CP_SCALE, Const.CP_SCALE);
    tower1Ui.setTransform(Const.WINDOW_WIDTH / 2.0 - palaceUi.image.width / 2 * Const.BUILD_UI_SCALE + 150.0, Const.WORLD_HEIGHT - palaceUi.image.height * Const.BUILD_UI_SCALE, Const.BUILD_UI_SCALE, Const.BUILD_UI_SCALE);
    cpTower1Selected.visible = false;
    uiGroup.addChild(cpTower1);
    uiGroup.addChild(cpTower1Selected);
    uiGroup.addChild(tower1Ui);

    this.setPopulation = function (amount) {
        var tmpBitmap;
        for (var i = 0; i < amount; i++) {
            tmpBitmap = new Bitmap(populationImage);
            tmpBitmap.setTransform(Const.WINDOW_WIDTH / 2.0 + Const.POPULATION_INBETWEEN - i*10.0, Const.WORLD_HEIGHT - infoPanel.image.height / 1.5 * Const.INFO_PANEL_SCALE, Const.POPULATION_SCALE, Const.POPULATION_SCALE);
            uiGroup.addChild(tmpBitmap);
            population.push(tmpBitmap);
        }
    }

    this.setPopulationVisibility = function (bool) {
        for (var i = 0; i < population.length; i++)
            population[i].visible = bool;
    }

    this.removePopulation = function () {
        var tmpBitmap;
        for (var i = 0; i < population.length; i++) {
            uiGroup.removeChild(population[i]);
        }
        population = [];
    }

    this.setHoverPopulation = function (amount) {
        var tmpBitmap;
        for (var i = 0; i < amount; i++) {
            tmpBitmap = new Bitmap(populationImage);
            tmpBitmap.setTransform(Const.WINDOW_WIDTH / 2.0 + Const.POPULATION_INBETWEEN - i * 10.0, Const.WORLD_HEIGHT - infoPanel.image.height / 1.5 * Const.INFO_PANEL_SCALE, Const.POPULATION_SCALE, Const.POPULATION_SCALE);
            uiGroup.addChild(tmpBitmap);
            hoverPopulation.push(tmpBitmap);
        }
    }

    this.removeHoverPopulation = function () {
        var tmpBitmap;
        for (var i = 0; i < hoverPopulation.length; i++) {
            uiGroup.removeChild(hoverPopulation[i]);
        }
        hoverPopulation = [];
    }

    /** 
    *   sets the UI gold to the given amount
    *   @param amount
    */
    this.setGold = function (amount) {
        goldAmount.setDigits(amount);
    }

    /** Toggle the selection around a city or a camp.
     * @param visible
     * @author Andrey
     */
    this.setSelection = function (visible) {
        selectionLayer1.visible = visible;
        selectionLayer2.visible = visible;
    }

    /** Toggle the mapping selection around a city or a camp.
     * @param visible
     * @author Mehrdad
     */
    this.setMappingSelection = function (visible) {
        selectionLayerM1.visible = visible;
        selectionLayerM2.visible = visible;
    }

    /** Toggle the hovering selection around a city or a camp.
     * @param visible
     * @author Mehrdad
     */
    this.setHoverSelection = function (visible) {
        selectionLayerH1.visible = visible;
        selectionLayerH2.visible = visible;
    }

    /** Position the selection around a city or a camp.
     * @param position
     * @author Andrey
     */
    this.positionSelection = function (x, y) {
        selectionLayer1.setTransform(x - selectionLayer1.image.width / 2 * Const.CITY_SELECTION_SCALE1, y - selectionLayer1.image.height / 2 * Const.CITY_SELECTION_SCALE1, Const.CITY_SELECTION_SCALE1, Const.CITY_SELECTION_SCALE1);
        selectionLayer2.setTransform(x - selectionLayer2.image.width / 2 * Const.CITY_SELECTION_SCALE2, y - selectionLayer2.image.height / 2 * Const.CITY_SELECTION_SCALE2, Const.CITY_SELECTION_SCALE2, Const.CITY_SELECTION_SCALE2);
    }

    /** Position the mapping selection around a city or a camp.
     * @param position
     * @author Mehrdad
     */
    this.positionMappingSelection = function (x, y) {
        selectionLayerM1.setTransform(x - selectionLayerM1.image.width / 2 * Const.CITY_SELECTION_SCALE1, y - selectionLayerM1.image.height / 2 * Const.CITY_SELECTION_SCALE1, Const.CITY_SELECTION_SCALE1, Const.CITY_SELECTION_SCALE1);
        selectionLayerM2.setTransform(x - selectionLayerM2.image.width / 2 * Const.CITY_SELECTION_SCALE2, y - selectionLayerM2.image.height / 2 * Const.CITY_SELECTION_SCALE2, Const.CITY_SELECTION_SCALE2, Const.CITY_SELECTION_SCALE2);
    }

    /** Position the hovering selection around a city or a camp.
     * @param position
     * @author Mehrdad
     */
    this.positionHoverSelection = function (x, y) {
        selectionLayerH1.setTransform(x - selectionLayerH1.image.width / 2 * Const.CITY_SELECTION_SCALE1, y - selectionLayerH1.image.height / 2 * Const.CITY_SELECTION_SCALE1, Const.CITY_SELECTION_SCALE1, Const.CITY_SELECTION_SCALE1);
        selectionLayerH2.setTransform(x - selectionLayerH2.image.width / 2 * Const.CITY_SELECTION_SCALE2, y - selectionLayerH2.image.height / 2 * Const.CITY_SELECTION_SCALE2, Const.CITY_SELECTION_SCALE2, Const.CITY_SELECTION_SCALE2);
    }

    this.setSelection(false);
    this.setMappingSelection(false);
    this.setHoverSelection(false);

    uiLayer.addChild(uiGroup);

    uiKey.onClick = function (mouseEvent) {
        if (keyPressed) {
            keyPressed = false;
            uiGroup.setTransform(uiGroup.x, uiGroup.y - infoPanel.image.height * Const.INFO_PANEL_SCALE, 1.0, 1.0);
        }
        else {
            keyPressed = true;
            uiGroup.setTransform(uiGroup.x, uiGroup.y + infoPanel.image.height * Const.INFO_PANEL_SCALE, 1.0, 1.0);
        }
    }

    cpPalace.onPress = function (mouseEvent) {
        if (cpPalace.visible) {
            cpPalace.visible = false;
            cpPalaceSelected.visible = true;

            if (player.getSelectedNode() != null)
                if (player.getSelectedNode().getBase().isCity())
                    if (player.getSelectedNode().getBase().hasPalace() == false)
                        if (player.getGold() >= Const.PALACE_COST) {
                            player.setGold(player.getGold() - Const.PALACE_COST);
                            player.getSelectedNode().getBase().buildPalace();
                        }
        }
        mouseEvent.onMouseUp = function (mouseEvent) {
            if (cpPalace.visible == false) {
                cpPalace.visible = true;
                cpPalaceSelected.visible = false;
            }
        }
    }

    cpBazar.onPress = function (mouseEvent) {
        if (cpBazar.visible) {
            cpBazar.visible = false;
            cpBazarSelected.visible = true;

            if (player.getSelectedNode() != null)
                if (player.getSelectedNode().getBase().isCity())
                    if (player.getSelectedNode().getBase().hasBazar() == false)
                        if (player.getGold() >= Const.BAZAR_COST) {
                            player.setGold(player.getGold() - Const.BAZAR_COST);
                            player.getSelectedNode().getBase().buildBazar();
                        }
        }
        mouseEvent.onMouseUp = function (mouseEvent) {
            if (cpBazar.visible == false) {
                cpBazar.visible = true;
                cpBazarSelected.visible = false;
            }
        }
    }

    cpWall.onPress = function (mouseEvent) {
        if (cpWall.visible) {
            cpWall.visible = false;
            cpWallSelected.visible = true;

            if (player.getSelectedNode() != null)
                if (player.getSelectedNode().getBase().isCity())
                    if (player.getSelectedNode().getBase().hasWall() == false)
                        if (player.getGold() >= Const.WALL_COST) {
                            player.setGold(player.getGold() - Const.WALL_COST);
                            player.getSelectedNode().getBase().buildWall();
                        }
        }
        mouseEvent.onMouseUp = function (mouseEvent) {
            if (cpWall.visible == false) {
                cpWall.visible = true;
                cpWallSelected.visible = false;
            }
        }
    }

    cpTower1.onPress = function (mouseEvent) {
        if (cpTower1.visible) {
            cpTower1.visible = false;
            cpTower1Selected.visible = true;

            if (player.getSelectedNode() != null)
                if (player.getSelectedNode().getBase().isCity()==false)
                    if (player.getSelectedNode().getBase().hasTower1() == false)
                        if (player.getGold() >= Const.TOWER1_COST) {
                            player.setGold(player.getGold() - Const.TOWER1_COST);
                            player.getSelectedNode().getBase().buildTower1();
                        }
        }
        mouseEvent.onMouseUp = function (mouseEvent) {
            if (cpTower1.visible == false) {
                cpTower1.visible = true;
                cpTower1Selected.visible = false;
            }
        }
    }

    this.update = function () {
        palaceUi.alpha = Const.CONSTRUCTION_UNAVAILABLE;
        bazarUi.alpha = Const.CONSTRUCTION_UNAVAILABLE;
        wallUi.alpha = Const.CONSTRUCTION_UNAVAILABLE;
        tower1Ui.alpha = Const.CONSTRUCTION_UNAVAILABLE;
        if (player.getGold() >= Const.PALACE_COST)
            palaceUi.alpha = 1.0;
        if (player.getGold() >= Const.BAZAR_COST)
            bazarUi.alpha = 1.0;
        if (player.getGold() >= Const.WALL_COST)
            wallUi.alpha = 1.0;
        if (player.getGold() >= Const.TOWER1_COST)
            tower1Ui.alpha = 1.0;
    }
}