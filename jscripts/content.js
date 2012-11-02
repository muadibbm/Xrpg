// Used to download all needed resources from the web server
var manifest = [
    { id: "background", src: "images/Background/bg.png" },
    { id: "treeOfLife", src: "images/Tree Of Life/treeOfLife.png" },
    { id: "cave", src: "images/Cave/cave.png" }
];

//general public function for creating bitmaps
function createBitmap(id) {
    var image = preload.getResult(id).result;
    return new Bitmap(image);
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


