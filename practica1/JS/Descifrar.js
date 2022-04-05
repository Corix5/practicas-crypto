function descifrarCFB(encrypted){
	const cryptkey = CryptoJS.enc.Utf8.parse('1234567890123456');
	let iv = CryptoJS.enc.Hex.parse('00000000000000000000000000000000');
	console.log(encrypted);
	let decrypted = CryptoJS.AES.decrypt(encrypted, cryptkey, { //funcion descifrar
	iv:iv,
	mode: CryptoJS.mode.CFB,
})
//.toString(CryptoJS.enc.Utf8); 
decrypted=decrypted.toString(CryptoJS.enc.Utf8);
console.log(decrypted);
return decrypted;
}

function descifrarCBC(encrypted){
	const cryptkey = CryptoJS.enc.Utf8.parse('1234567890123456');
	let iv = CryptoJS.enc.Hex.parse('00000000000000000000000000000000');
	console.log(encrypted);
let decrypted = CryptoJS.AES.decrypt(encrypted, cryptkey, { //funcion descifrar
	iv:iv,
mode: CryptoJS.mode.CBC,
})
//.toString(CryptoJS.enc.Utf8); 
decrypted=decrypted.toString(CryptoJS.enc.Utf8);
console.log(decrypted);
return decrypted;
}

function descifrarECB(encrypted){
	const cryptkey = CryptoJS.enc.Utf8.parse('1234567890123456');
	let iv = CryptoJS.enc.Hex.parse('00000000000000000000000000000000');
	console.log(encrypted);
let decrypted = CryptoJS.AES.decrypt(encrypted, cryptkey, { //funcion descifrar
	iv:iv,
mode: CryptoJS.mode.ECB,
})
//.toString(CryptoJS.enc.Utf8); 
decrypted=decrypted.toString(CryptoJS.enc.Utf8);
console.log(decrypted);
return decrypted;
}

function descifrarOFB(encrypted){
	const cryptkey = CryptoJS.enc.Utf8.parse('1234567890123456');
	let iv = CryptoJS.enc.Hex.parse('00000000000000000000000000000000');
	console.log(encrypted);
let decrypted = CryptoJS.AES.decrypt(encrypted, cryptkey, { //funcion descifrar
	iv:iv,
mode: CryptoJS.mode.OFB,
})
//.toString(CryptoJS.enc.Utf8); 
decrypted=decrypted.toString(CryptoJS.enc.Utf8);
console.log(decrypted);
return decrypted;
}