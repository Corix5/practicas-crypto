function imgObj(pixels, numPixels, modeOp){
	//Constructor de imgOnj
	//Tiene arreglo de pixeles, losngitud del arreglo
	//Modo de operación
	this.pixels = pixels;
	this.numPixels = numPixels;
	this.modeOp = modeOp;
}

imgObj.prototype.tranString = function (){

	//result dentra la cadena 
	var result ="";
    let matrix=[];

    for ( var i = 0; i < this.numPixels; i++ ) {    
    	//Se recorre cada elemento del arreglo de pixeles y se guarda es una matriz           
        matrix[i] = this.pixels[i];
        //Se toma cada elemento de la matriz, se tranforma en un char y se concatena a result
        result += String.fromCharCode(matrix[i]);                        
    }

    return result;

};


imgObj.prototype.transUnicode = function(encrypted){
	let arreglo=[];


	//For del tamaño del arreglo de pixeles
    for ( var i = 0; i < this.numPixels; i++ ) {     
    //encrypted es cadena cuyo tamaño es igual al arreglo de pixeles
    //Se toma cada caracter de encrypted y se pasa a un número (unicode)
    //Este número se ingresa a un arreglo             
        arreglo.push(encrypted.charCodeAt(i));  
        if(i<=100){
        console.log(encrypted[i],"-",encrypted.charCodeAt(i),"-",arreglo[i]);    
    }
                                
    }

    console.log(arreglo);

    return arreglo;
}



function mainI(pixels, numPixels, modeOp, opc){

	if(opc==0){
		//Se manda al metodo cifrar poque es la opción 0
		a= cifrar(pixels, numPixels, modeOp);
		console.log("Antes del otro return");
		console.log(a);
		return a;
	}

	if(opc==1){
		//Se manda al metodo descifrar poque es la opción 1
		return descifrar(pixels, numPixels, modeOp);
	}

}



function cifrar(pixels, numPixels, modeOp){

	//Se crea un objeto imagen 
	img = new imgObj(pixels, numPixels, modeOp);
	//Pasamos el arreglo de pixeles a string 
	var str = img.tranString();
	let encrypted;


	switch(modeOp){
		case 0:
			console.log("Caso 0");
			//Se manda a cifrar el string
			encrypted = cifrarECB(str);
			break;
		case 1:
			console.log("Caso 1");
			//Se manda a cifrar el string
			encrypted = cifrarCBC(str);
			break;
		case 2:
			console.log("Caso 2");
			//Se manda a cifrar el string
			encrypted = cifrarCFB(str);
			break;
		case 3:
			console.log("Caso 3");
			//Se manda a cifrar el string
			encrypted = cifrarOFB(str);
			break;
	}

	console.log(str);
	console.log(encrypted);

	//Se pasa el cifrado a un arreglo de unicode (arreglo de pixeles) como el original
	let encryptUni = img.transUnicode(encrypted);
	console.log("Antes del return");
	console.log(encryptUni);

	return encryptUni;
}


function descifrar(pixels, numPixels, modeOp){

	img = new imgObj(pixels, numPixels, modeOp);
	var str = img.tranString();
	let decrypted;

	console.log(str);


	switch(modeOp){
		case 0:
			console.log("Caso 0");
			//Se manda a cifrar el string
			encrypted = descifrarECB(str);
			break;
		case 1:
			console.log("Caso 1");
			//Se manda a cifrar el string
			encrypted = descifrarCBC(str);
			break;
		case 2:
			console.log("Caso 2");
			//Se manda a cifrar el string
			encrypted = descifrarCFB(str);
			break;
		case 3:
			console.log("Caso 3");
			//Se manda a cifrar el string
			encrypted = descifrarOFB(str);
			break;
	}

	console.log(decrypted);

	let encryptUni =0;

	return encryptUni;
}