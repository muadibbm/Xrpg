/**
 * This class manages all the user interface
 */
function Gui(uiLayer) {

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
    uiLayer.addChild(infoPanel);
    var goldAmount = new Digits(uiLayer, Const.WINDOW_WIDTH / 2.0 - infoPanel.image.width / 7.0 * Const.INFO_PANEL_SCALE, Const.WORLD_HEIGHT - infoPanel.image.height / 2.0 * Const.INFO_PANEL_SCALE, Const.GOLD_SCALE);

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
}