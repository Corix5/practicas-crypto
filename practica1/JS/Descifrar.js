function descifrarCFB(encrypted){
	console.log(encrypted);
let decrypted = CryptoJS.AES.decrypt(encrypted, "Secret Passphrase", { //funcion descifrar
mode: CryptoJS.mode.CFB,
})
//.toString(CryptoJS.enc.Utf8); 
decrypted=decrypted.toString();
console.log(decrypted);
return decrypted;
}

function descifrarCBC(encrypted){
	console.log(encrypted);
let decrypted = CryptoJS.AES.decrypt(encrypted, "Secret Passphrase", { //funcion descifrar
mode: CryptoJS.mode.CFB,
})
//.toString(CryptoJS.enc.Utf8); 
decrypted=decrypted.toString();
console.log(decrypted);
return decrypted;
}

function descifrarECB(encrypted){
	console.log(encrypted);
let decrypted = CryptoJS.AES.decrypt(encrypted, "Secret Passphrase", { //funcion descifrar
mode: CryptoJS.mode.CFB,
})
//.toString(CryptoJS.enc.Utf8); 
decrypted=decrypted.toString();
console.log(decrypted);
return decrypted;
}

function descifrarOFB(encrypted){
	console.log(encrypted);
let decrypted = CryptoJS.AES.decrypt(encrypted, "Secret Passphrase", { //funcion descifrar
mode: CryptoJS.mode.CFB,
})
//.toString(CryptoJS.enc.Utf8); 
decrypted=decrypted.toString();
console.log(decrypted);
return decrypted;
}