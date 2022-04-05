function cifrarCFB(result){
    const cryptkey = CryptoJS.enc.Utf8.parse('1234567890123456');
	let iv = CryptoJS.enc.Hex.parse('00000000000000000000000000000000');
	let encrypted = CryptoJS.AES.encrypt(result, cryptkey,{
            iv:iv,
            mode: CryptoJS.mode.CFB,
            }).toString(); //funcion cifrar
            console.log("cadena cifrada: " + encrypted);
    return encrypted;
}

function cifrarCBC(result){
    const cryptkey = CryptoJS.enc.Utf8.parse('1234567890123456');
	let iv = CryptoJS.enc.Hex.parse('00000000000000000000000000000000');
	let encrypted = CryptoJS.AES.encrypt(result, cryptkey, {
        iv:iv,
            mode: CryptoJS.mode.CBC,
            }).toString(); //funcion cifrar

    return encrypted;
}

function cifrarECB(result){
    const cryptkey = CryptoJS.enc.Utf8.parse('1234567890123456');
	let iv = CryptoJS.enc.Hex.parse('00000000000000000000000000000000');
	let encrypted = CryptoJS.AES.encrypt(result, cryptkey, {
        iv:iv,
            mode: CryptoJS.mode.ECB,
            }).toString(); //funcion cifrar

    return encrypted;
}

function cifrarOFB(result){
    const cryptkey = CryptoJS.enc.Utf8.parse('1234567890123456');
	let iv = CryptoJS.enc.Hex.parse('00000000000000000000000000000000');
	let encrypted = CryptoJS.AES.encrypt(result, cryptkey, {
        iv:iv,
            mode: CryptoJS.mode.OFB,
            }).toString(); //funcion cifrar

    return encrypted;
}