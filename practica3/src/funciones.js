function generarFirma(data, privateKey){
        const crypto = require('crypto');
        const buffer = require('buffer');
        const fs = require('fs');
    
        // Sign the data and returned signature in buffer 
        const sign = crypto.sign("SHA256", data , privateKey);

        fs.writeFile('firma.txt', sign, (err) => {
            // throws an error, you could also catch it here
            if (err) throw err;
        });
        return sign;
}

function firmar(){
    const crypto = require('crypto');
    const buffer = require('buffer');
    const fs = require('fs');
    
    console.log("Reading File...\n");
    // Reading file
    const documentName = document.querySelector('#archivoSeleccionado').files[0].name;
    const text = fs.readFileSync(`./${documentName}`);
    console.log(`File content: ${text}`);
    
    // Convert string to buffer 
    const data = Buffer.from(text);
    let datos = data.toString();
    datos = datos.split('----');
    console.log(datos[0]);
    datos[0] = datos[0].toString();
    datos[0] = Buffer.from(datos[0]);
    

    const llavePrivada = document.querySelector('#llavePrivada').files[0].name;
    const llavePriv = fs.readFileSync(`./${llavePrivada}`);
    const privateKeyData = Buffer.from(llavePriv);

    const sign = generarFirma(datos[0], privateKeyData);
    
    fs.writeFile('TextoFirmado.txt', text + sign, (err) => {
        // throws an error, you could also catch it here
        if (err) throw err;
    });

    // Printing the signature 
    console.log(`Signature:\n\n ${sign}`);
    document.getElementById("firma").innerHTML = `Archivo Firmado con éxito`;
}

function verificar(){
    const crypto = require('crypto');
    const buffer = require('buffer');
    const fs = require('fs');
    
    console.log("Reading File...\n");
    // Reading file
    const documentName = document.querySelector('#archivoSeleccionadoV').files[0].name;
    const text = fs.readFileSync(`./${documentName}`);
    console.log(`File content: ${text}`);
    // Convert string to buffer 
    let data = Buffer.from(text);
    let datos = data.toString();
    datos = datos.split('----');
    console.log(datos[0]);
    console.log(datos[1]);

    datos[0] = Buffer.from(datos[0]);
    const firmaAux = Buffer.from(datos[1]);
    
    const documentKey = document.querySelector('#llavePublica').files[0].name;
    const textKey = fs.readFileSync(`./${documentKey}`);
    const publicKeyData = Buffer.from(textKey);
    console.log(`File content: ${textKey}`);

    const aux = fs.readFileSync(`./firma.txt`);
    const auxb = Buffer.from(aux);
    console.log(firmaAux);
    console.log(aux);
    const isVerified = crypto.verify("SHA256", datos[0], publicKeyData, aux);
    
    // Printing the result
    console.log(`Is signature verified: ${isVerified}`);

    if(isVerified){
        alert('firma verificada: Autentico');
    }

    else{
        alert('firma verificada: Mensaje no autentico');
    }
}