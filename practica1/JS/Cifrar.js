function cifrarCFB(result){
	let encrypted = CryptoJS.AES.encrypt(result, "Secret Passphrase", {
            mode: CryptoJS.mode.CFB,
            }).toString(); //funcion cifrar

    return encrypted;
}

function cifrarCBC(result){
	let encrypted = CryptoJS.AES.encrypt(result, "Secret Passphrase", {
            mode: CryptoJS.mode.CBC,
            }).toString(); //funcion cifrar

    return encrypted;
}

function cifrarECB(result){
	let encrypted = CryptoJS.AES.encrypt(result, "Secret Passphrase", {
            mode: CryptoJS.mode.ECB,
            }).toString(); //funcion cifrar

    return encrypted;
}

function cifrarOFB(result){
	let encrypted = CryptoJS.AES.encrypt(result, "Secret Passphrase", {
            mode: CryptoJS.mode.OFB,
            }).toString(); //funcion cifrar

    return encrypted;
}