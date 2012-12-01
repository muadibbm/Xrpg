/**
* Represents a numbering system given by the number images
* @param uiLayer - Container of the user interface
* @param x - the x coordinate at which the digits start(from left)
* @param y - the y coordinate at which the digits start(from left)
* @param scale - the scale of the digits
*/
function Digits(uiLayer, _x, _y, _scale)
{	
    var digit1 = new Bitmap(n0Image);
    var digit2 = null;
    var digit3 = null;
    var digit4 = null;

    var digitsLayer = new Container();

    var x = _x - digit1.image.width / 2.0 * _scale;
    var y = _y - digit1.image.height / 2.0 * _scale;
    var scale = _scale;

    digit1.setTransform(x, y, scale, scale);
    digitsLayer.addChild(digit1);

    uiLayer.addChild(digitsLayer);

    this.getLayer = function() {
        return digitsLayer;
    }

    //@return true if the Bitmap digit1 is destroyed
    this.destroyed = function() {
        return digit1==null;//may cause bug ???
    }

    //destroys the digits layers
    this.destroy = function() {
        if(digit1 != null)
            digitsLayer.removeChild(digit1);
        if(digit2 != null)
            digitsLayer.removeChild(digit2);
        if(digit3 != null)
            digitsLayer.removeChild(digit3);
        if(digit4 != null)
            digitsLayer.removeChild(digit4);
        digit1 = null;
        digit2 = null;
        digit3 = null;
        digit4 = null;
        uiLayer.removeChild(digitsLayer);
        digitsLayer = null;
    }

    /**
    * Sets the transparency of the digits
    * @param alpha - float
    */
    this.setAlpha = function(alpha) {
        digitsLayer.alpha = alpha;
    }

    getNumberImage = function (digit) {
        switch(digit) {
            case 1 : return n1Image;
            case 2 : return n2Image;
            case 3 : return n3Image;
            case 4 : return n4Image;
            case 5 : return n5Image;
            case 6 : return n6Image;
            case 7 : return n7Image;
            case 8 : return n8Image;
            case 9 : return n9Image;
            default : return n0Image;
        }
    }

    reverse = function(string) {
        string = string.split("").reverse().join("");
        return string;
    }

    setFirstDigit = function(digit) {
        digitsLayer.removeChild(digit1);
        digit1 = new Bitmap(getNumberImage(digit));
        digit1.setTransform(x, y, scale, scale);
        digitsLayer.addChild(digit1);
    }

    setSecondDigit = function(digit) {
        digitsLayer.removeChild(digit2);
        digit2 = new Bitmap(getNumberImage(digit));
        digit2.setTransform(x - n0Image.width * 1.44 * scale, y, scale, scale);
        digitsLayer.addChild(digit2);
    }

    setThirdDigit = function(digit) {
        digitsLayer.removeChild(digit3);
        digit3 = new Bitmap(getNumberImage(digit));
        digit3.setTransform(x - n0Image.width * 2.8 * scale, y, scale, scale);
        digitsLayer.addChild(digit3);
    }

    setFourthDigit = function(digit) {
        digitsLayer.removeChild(digit4);
        digit4 = new Bitmap(getNumberImage(digit));
        digit4.setTransform(x - n0Image.width * 4.2 * scale, y, scale, scale);
        digitsLayer.addChild(digit4);
    }

    /**
    * Draws the image of the given number
    * @param digits - integer
    */
    this.setDigits = function (digits) {
	    var sDigits =  reverse(digits.toString());
        var sDigit;
        for(var i = 0; i < sDigits.length; i++) {
            sDigit = sDigits.substring(i, i+1);
            switch(i) {
                case 0 : setFirstDigit(parseInt(sDigit)); break;
                case 1 : setSecondDigit(parseInt(sDigit)); break;
                case 2 : setThirdDigit(parseInt(sDigit)); break;
                case 3 : setFourthDigit(parseInt(sDigit)); break;
                default : break;
            }
        }
        if(sDigits.length == 1 & digit2 != null)
            digit2.visible = false;
        if(sDigits.length == 2 & digit3 != null)
            digit3.visible = false;
        if(sDigits.length == 3 & digit4 != null)
            digit4.visible = false;
        sDigits = null;
        sDigit = null;
    }

    this.toString = function () {
        return "digit1:" + digit1 + ", " + "digit2:" + digit2 + ", " + "digit3:" + digit3 + ", " + "digit4:" + digit4;
    }
}