// Used to download all needed resources from the web server
var manifest = [
    { id: "graphDataA", src: "graphData/1FUF_modified.txt" },
    { id: "graphDataB", src: "graphData/3CGP_modified.txt" },
    { id: "background", src: "images/Background/bg.png" },
    { id: "cave", src: "images/Cave/cave.png" },
    { id: "tree", src: "images/Background/tree.png" },
    { id: "treeShadow", src: "images/Background/tree_shadow.png" },
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
var caveImage;
var treeImage;
var treeShadowImage;
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

// CommentAuthor: Andrey - This method does not do anything, accoding to my observation
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
    towerBaseImage = createResource("towerBase");
    cityBaseSelectedImage1 = createResource("baseSelected1");
    cityBaseSelectedImage2 = createResource("baseSelected2");
    cityBaseSelectedImage3 = createResource("baseSelected3");
    cityBaseSelectedImage4 = createResource("baseSelected4");
    cityBaseSelectedImage5 = createResource("baseSelected5");
    cityBaseSelectedImage6 = createResource("baseSelected6");
    roadImage = createResource("road");
}
