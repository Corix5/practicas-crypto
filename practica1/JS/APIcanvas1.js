var imageObj  = new Image();
var canvas = document.getElementById( 'canvas' );
var context = canvas.getContext( '2d' );

function canvasObj(src){
	this.srcImg = src;
	this.width = 0;
	this.height = 0;
}

canvasObj.prototype.loadImg = function (){
	
	imageObj.src = this.srcImg;
	this.width = imageObj.width;
	this.height = imageObj.height;
};

canvasObj.prototype.resize = function (){

	canvas.setAttribute('width',this.width+"px");
	canvas.setAttribute('height',this.height+"px");

};

canvasObj.prototype.drawImg = function (){

	context.drawImage(imageObj, 0, 0, canvas.width, canvas.height);

};

canvasObj.prototype.getImgData = function () {

   return context.getImageData( 0, 0, canvas.width, canvas.height);

};


canvasObj.prototype.replace = function (arr) {
	console.log(arr);

	let imageData = canvasM.getImgData(),
    pixels = imageData.data,
    numPixels = pixels.length;

    console.log("pixels " + pixels);
	console.log(canvasM.getImgData());

   for ( var i = 0; i < numPixels; i++ ) {
   		pixels[i]=arr[i];

     }
     context.putImageData( imageData, 0, 0 );
     console.log(canvasM.getImgData());
};


canvasObj.prototype.save = function (arr) {

	console.log(canvasM.getImgData());
	var link = window.document.createElement( 'a' ),
        url = canvas.toDataURL(),
        filename = 'screenshot.jpg';
 
        link.setAttribute( 'href', url );
        link.setAttribute( 'download', filename );
        link.style.visibility = 'hidden';
        window.document.body.appendChild( link );
        link.click();
        window.document.body.removeChild( link );
}


async function main(src,opc,modeOp){

	canvasM = new canvasObj(src);
	canvasM.loadImg();
	canvasM.resize();
	canvasM.drawImg();

	var imageData = canvasM.getImgData();
    var pixels = imageData.data;
    numPixels = pixels.length;

	let arr = [];


	console.log("Descifrar");
    console.log("pixels 2 " + pixels);
	arr = mainI(pixels, numPixels, modeOp, opc);
	await arr;


	let p =[];
	p = await canvasM.replace(arr);

}