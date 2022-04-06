function cifrarCFB(result){
    //const cryptkey = CryptoJS.enc.Utf8.parse('1234567890123456');
	//let iv = CryptoJS.enc.Hex.parse('00000000000000000000000000000000');
    let cryptkey = document.getElementById("passwordECFB").value;
    let iv = document.getElementById("VectorECFB").value;
	let encrypted = CryptoJS.AES.encrypt(result, cryptkey,{
            iv:iv,
            mode: CryptoJS.mode.CFB,
            }).toString(); //funcion cifrar
            console.log("cadena cifrada: " + encrypted);
    return encrypted;
}

function cifrarCBC(result){
    let cryptkey = document.getElementById("passwordECBC").value;
    let iv = document.getElementById("VectorECBC").value;
	let encrypted = CryptoJS.AES.encrypt(result, cryptkey, {
        iv:iv,
            mode: CryptoJS.mode.CBC,
            }).toString(); //funcion cifrar

    return encrypted;
}

function cifrarECB(result){
    let cryptkey = document.getElementById("passwordEECB").value;
	let encrypted = CryptoJS.AES.encrypt(result, cryptkey, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
            }).toString();; //funcion cifrar

    return encrypted;
}

function cifrarOFB(result){
    let cryptkey = document.getElementById("passwordEOFB").value;
    let iv = document.getElementById("VectorEOFB").value;
	let encrypted = CryptoJS.AES.encrypt(result, cryptkey, {
        iv:iv,
            mode: CryptoJS.mode.OFB,
            }).toString(); //funcion cifrar

    return encrypted;
}