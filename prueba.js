
const CryptoJS = require("crypto-js");





//The Function Below To Encrypt Text
const encryptWithAES = (text) => {
   const passphrase = "My Secret Passphrase";
   return CryptoJS.AES.encrypt(text, passphrase).toString();
 };
 //The Function Below To Decrypt Text
 const decryptWithAES = (ciphertext) => {
   const passphrase = "My Secret Passphrase";
   const bytes = CryptoJS.AES.decrypt(ciphertext, passphrase);
   const originalText = bytes.toString(CryptoJS.enc.Utf8);
   return originalText;
 };

let encryptText = encryptWithAES("hdusbfusdbfudsbfusbd"); 
//EncryptedText==>  //U2FsdGVkX19GgWeS66m0xxRUVxfpI60uVkWRedyU15I= 
console.log(encryptText);

let decryptText = decryptWithAES(encryptText);


console.log(decryptText);