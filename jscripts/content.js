// Used to download all needed resources from the web server
var manifest = [
    { id: "graphDataA",    src: "graphData/1FUF_modified.txt" },
    { id: "graphDataB",    src: "graphData/3CGP_modified.txt" },
    { id: "background",    src: "images/Background/bg.png" },
    { id: "cave",          src: "images/Cave/cave.png" },
    { id: "tree",          src: "images/Background/treeVer2.png" },
    { id: "treeShadow",    src: "images/Background/tree_shadow.png" },
    { id: "cityBase", src: "images/City/cityBase.png" },
    { id: "cityIcon", src: "images/City/cityIcon.png" },
    { id: "palaceIcon", src: "images/City/palaceIcon.png" },
    { id: "bazarIcon", src: "images/City/bazarIcon.png" },
    { id: "wallIcon", src: "images/City/wallIcon.png" },
    { id: "towerBase", src: "images/Tower/towerBase.png" },
    { id: "tower1Icon", src: "images/Tower/tower1Icon.png" },
    { id: "range", src: "images/Tower/range.png" },
    { id: "arrow", src: "images/Tower/arrow.png" },
    { id: "caravan",       src: "images/Caravan/Caravan.png" },
    { id: "deeve",         src: "images/Deeve/deeve.png"},
    { id: "baseSelected1", src: "images/City/selection1.png" },
    { id: "baseSelected2", src: "images/City/selection2.png" },
    { id: "baseSelected3", src: "images/City/selection3.png" },
    { id: "baseSelected4", src: "images/City/selection4.png" },
    { id: "baseSelected5", src: "images/City/selection5.png" },
    { id: "baseSelected6", src: "images/City/selection6.png" },
    { id: "road",          src: "images/Road/sampleRoad.png" },
    { id: "mapping0",      src: "images/Road/mapping0.png" },
    { id: "mapping1",      src: "images/Road/mapping1.png" },
    { id: "mapping2", src: "images/Road/mapping2.png" },
    { id: "mapping3", src: "images/Road/mapping3.png" },
    { id: "mapping4", src: "images/Road/mapping4.png" },
    { id: "mapping5", src: "images/Road/mapping5.png" },
    { id: "mapping6", src: "images/Road/mapping6.png" },
    { id: "n1",            src: "images/UI/1.png" },
    { id: "n2",            src: "images/UI/2.png" },
    { id: "n3",            src: "images/UI/3.png" },
    { id: "n4",            src: "images/UI/4.png" },
    { id: "n5",            src: "images/UI/5.png" },
    { id: "n6",            src: "images/UI/6.png" },
    { id: "n7",            src: "images/UI/7.png" },
    { id: "n8",            src: "images/UI/8.png" },
    { id: "n9",            src: "images/UI/9.png" },
    { id: "n0",            src: "images/UI/0.png" },
    { id: "infoPanel", src: "images/UI/infoPanel.png" },
    { id: "population", src: "images/UI/population.png" },
    { id: "uiKey", src: "images/UI/uiKey.png" },
    { id: "constructionPane", src: "images/UI/constructionPane.png" },
    { id: "selectedConstructionPane", src: "images/UI/selectedConstructionPane.png" },
    { id: "palaceUi", src: "images/UI/palaceUi.png" },
    { id: "bazarUi", src: "images/UI/bazarUi.png" },
    { id: "wallUi", src: "images/UI/wallUi.png" },
    { id: "tower1Ui", src: "images/UI/tower1Ui.png" }
];
// List of all Images
var bgImage;
var caveImage;
var treeImage;
var treeShadowImage;
var cityBaseImage;
var cityIconImage;
var palaceIconImage;
var bazarIconImage;
var wallIconImage;
var towerBaseImage;
var tower1IconImage;
var rangeImage;
var arrowImage;
var caravanImage;
var deeveImage;
var cityBaseSelectedImage1;
var cityBaseSelectedImage2;
var cityBaseSelectedImage3;
var cityBaseSelectedImage4;
var cityBaseSelectedImage5;
var cityBaseSelectedImage6;
var roadImage;
var mappingImage0;
var mappingImage1;
var mappingImage2;
var mappingImage3;
var mappingImage4;
var mappingImage5;
var mappingImage6;
var n1Image;
var n2Image;
var n3Image;
var n4Image;
var n5Image;
var n6Image;
var n7Image;
var n8Image;
var n9Image;
var n0Image;
var infoPanelImage;
var populationImage;
var uiKeyImage;
var constructionPaneImage;
var selectedConstructionPaneImage;
var palaceUiImage;
var bazarUiImage;
var wallUiImage;
var tower1UiImage;

//general public function for creating resources(called once for every resource)
function createResource(id) {
    return preload.getResult(id).result;
}

// CommentAuthor: Andrey - This method does not do anything, according to my observation
// reply: Mehrdad - For now its being used to fit the background onto the canvas
function resizeOnZoom(bitmap) {
    bitmap.scaleX = bitmap.scaleX * (canvas.width / bitmap.image.width);
    bitmap.scaleY = bitmap.scaleY * (canvas.height / bitmap.image.height);
}

function loadImages() {
    bgImage = createResource("background");
    caveImage = createResource("cave");
    treeImage = createResource("tree");
    treeShadowImage = createResource("treeShadow");
    cityBaseImage = createResource("cityBase");
    cityIconImage = createResource("cityIcon");
    palaceIconImage = createResource("palaceIcon");
    bazarIconImage = createResource("bazarIcon");
    wallIconImage = createResource("wallIcon");
    towerBaseImage = createResource("towerBase");
    tower1IconImage = createResource("tower1Icon");
    rangeImage = createResource("range");
    arrowImage = createResource("arrow");
    caravanImage = createResource("caravan");
    deeveImage = createResource("deeve");
    cityBaseSelectedImage1 = createResource("baseSelected1");
    cityBaseSelectedImage2 = createResource("baseSelected2");
    cityBaseSelectedImage3 = createResource("baseSelected3");
    cityBaseSelectedImage4 = createResource("baseSelected4");
    cityBaseSelectedImage5 = createResource("baseSelected5");
    cityBaseSelectedImage6 = createResource("baseSelected6");
    roadImage = createResource("road");
    mappingImage0 = createResource("mapping0");
    mappingImage1 = createResource("mapping1");
    mappingImage2 = createResource("mapping2");
    mappingImage3 = createResource("mapping3");
    mappingImage4 = createResource("mapping4");
    mappingImage5 = createResource("mapping5");
    mappingImage6 = createResource("mapping6");
    n1Image = createResource("n1");
    n2Image = createResource("n2");
    n3Image = createResource("n3");
    n4Image = createResource("n4");
    n5Image = createResource("n5");
    n6Image = createResource("n6");
    n7Image = createResource("n7");
    n8Image = createResource("n8");
    n9Image = createResource("n9");
    n0Image = createResource("n0");
    infoPanelImage = createResource("infoPanel");
    populationImage = createResource("population");
    uiKeyImage = createResource("uiKey");
    constructionPaneImage = createResource("constructionPane");
    selectedConstructionPaneImage = createResource("selectedConstructionPane");
    palaceUiImage = createResource("palaceUi");
    bazarUiImage = createResource("bazarUi");
    wallUiImage = createResource("wallUi");
    tower1UiImage = createResource("tower1Ui");
}
