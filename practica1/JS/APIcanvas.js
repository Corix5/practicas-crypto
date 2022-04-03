const imageObj  = new Image();
const canvas = document.getElementById( 'canvas' );
var context = canvas.getContext( '2d' );

function canvasObj(src){

	//Constructor de canvasObj
	//Contiene la ruta de la imagen
	// el ancho y alto de canvas
	this.srcImg = src;
	this.width = 0;
	this.height = 0;
}


//Asigna la ruta de la imagen a objeto imagen
//También asigna el ancho y el alto de la imagen al objeto canvasObj 
canvasObj.prototype.loadImg = function (){
	
	imageObj.src = this.srcImg;
	this.width = imageObj.width;
	this.height = imageObj.height;
};


//Al canvas que se tiene en HTML se le asigna el alto del objeto canvas 
canvasObj.prototype.resize = function (){

	canvas.setAttribute('width',this.width+"px");
	canvas.setAttribute('height',this.height+"px");

};

//Lo que hace es dibujar el objeto imagen en canvas
canvasObj.prototype.drawImg = function (){

	context.drawImage(imageObj, 0, 0, canvas.width, canvas.height);

};

//Devuelve información sobre la imagen que esta en el canvas
//Entre la información esta el arreglo de pixeles
canvasObj.prototype.getImgData = function () {

   return context.getImageData( 0, 0, canvas.width, canvas.height);

};


canvasObj.prototype.replace = function (arr) {

	console.log(arr);

	let imageData = canvasM.getImgData(),
    pixels = imageData.data,
    numPixels = pixels.length;

    console.log(canvasM.getImgData());
	console.log("pixels" + pixels);

   for ( var i = 0; i < numPixels; i++ ) {
   		pixels[i]=arr[i];
     }

     console.log("Cambio de arreglo de pixeles");
     //Aquí imageData, información de una imagen, que tiene el arreglo de pixeles de la imagen cifrada
     //reemplaza a la información de la imagen del canvas
     //pero a la hora de reemplazar el arreglo, este cambia sus valores
     context.putImageData(imageData,0,0);
     console.log(pixels);
     console.log(canvasM.getImgData());
     return pixels;
};


canvasObj.prototype.save = function (arr) {

	console.log(canvasM.getImgData());


	var link = window.document.createElement( 'a' ),
        url = canvas.toDataURL(),
        filename = 'screenshot.jpg';

        console.log(canvas.toDataURL());
 
        link.setAttribute( 'href', url );
        link.setAttribute( 'download', filename );
        link.style.visibility = 'hidden';
        window.document.body.appendChild( link );
        link.click();
        window.document.body.removeChild( link );
}


async function main(src,opc,modeOp){

	//Se crea un objeto canvasObj
	canvasM = new canvasObj(src);
	//Carga la imagen
	canvasM.loadImg();
	//Ajusta el tamaño del canvas
	canvasM.resize();
	//Dibuja imagen en canvas
	canvasM.drawImg();

	//Tomamos la información de la imagen que esta en canvas
	let imagData = canvasM.getImgData();
	//Arreglo de pixeles
    let pixels = imagData.data;
    //Tamaño del arrglo de pixeles
    numPixels = pixels.length;

	let arr = [];


	console.log("Cifrar");
	//Mandamos a cifrar (imagenes.js)
	arr = mainI(pixels, numPixels, modeOp, opc);

	//Esperamos a tener el nuevo a arreglo de pixeles
	await arr;


	let p =[];
	p = await canvasM.replace(arr);

}

