// Used to download all needed resources from the web server
var manifest = [
    { id: "graphDataA", src: "graphData/1FUF_modified" },
    { id: "graphDataB", src: "graphData/3CGP_modified" },
    { id: "background", src: "images/Background/bg.png" },
    { id: "treeOfLife", src: "images/Tree Of Life/treeOfLife.png" },
    { id: "cave", src: "images/Cave/cave.png" },
    { id: "cityBase", src: "images/City/cityBase.png" },
    { id: "towerBase", src: "images/Tower/towerBase.png" },
    { id: "baseSelected1", src: "images/City/selection1.png" },
    { id: "baseSelected2", src: "images/City/selection2.png" },
    { id: "baseSelected3", src: "images/City/selection3.png" },
    { id: "baseSelected4", src: "images/City/selection4.png" },
    { id: "baseSelected5", src: "images/City/selection5.png" },
    { id: "baseSelected6", src: "images/City/selection6.png" },
    { id: "road", src: "images/Road/sampleRoad.png" }
];
// List of all Images
var bgImage;
var treeOfLifeImage;
var caveImage;
var cityBaseImage;
var towerBaseImage;
var cityBaseSelectedImage1;
var cityBaseSelectedImage2;
var cityBaseSelectedImage3;
var cityBaseSelectedImage4;
var cityBaseSelectedImage5;
var cityBaseSelectedImage6;
var roadImage;

//general public function for creating resources(called once for every resource)
function createResource(id) {
    return preload.getResult(id).result;
}

//general public function for scale and translation of bitmaps
function transformBitmap(bitmap, x, y, scale) {
    // Adjust the bitmap scale to fit the canvas size
    bitmap.scaleX = (canvas.width / bitmap.image.width) * scale;
    bitmap.scaleY = (canvas.height / bitmap.image.height) * scale;
    // Position the bitmap (x,y) coordinates on canvas
    bitmap.x = x;
    bitmap.y = y;
}

function loadImages() {
    bgImage = createResource("background");
    treeOfLifeImage = createResource("treeOfLife");
    caveImage = createResource("cave");
    cityBaseImage = createResource("cityBase");
    towerBaseImage = createResource("towerBase");
    cityBaseSelectedImage1 = createResource("baseSelected1");
    cityBaseSelectedImage2 = createResource("baseSelected2");
    cityBaseSelectedImage3 = createResource("baseSelected3");
    cityBaseSelectedImage4 = createResource("baseSelected4");
    cityBaseSelectedImage5 = createResource("baseSelected5");
    cityBaseSelectedImage6 = createResource("baseSelected6");
    roadImage = createResource("road");
}
