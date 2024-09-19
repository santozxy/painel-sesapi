import CryptoJS from "crypto-js";

export function descryptItem(data: string) {
  const secretKey = import.meta.env.VITE_CRYPTO_KEY as string;
  const ivString = import.meta.env.VITE_CRYPTO_IV as string;
  const key = CryptoJS.enc.Utf8.parse(secretKey);
  const iv = CryptoJS.enc.Utf8.parse(ivString);
  // Decodificar o texto criptografado de base64
  const encryptedData = CryptoJS.enc.Base64.parse(data).toString(
    CryptoJS.enc.Base64
  );
  // Descriptografar
  const decrypted = CryptoJS.AES.decrypt(encryptedData, key, { iv: iv });

  return decrypted.toString(CryptoJS.enc.Utf8);
}
