function cifrarCFB(result){
	let encrypted = CryptoJS.AES.encrypt(result, "Secret Passphrase", {
            mode: CryptoJS.mode.CFB,
            }).toString(); //funcion cifrar

    return encrypted;
}
