window.onload = function() {
    const textarea = document.getElementById('textoEncriptar');
    textarea.value = ''; // Limpia el contenido anterior
    textarea.selectionStart = 0;
    textarea.selectionEnd = 0;
    textarea.focus();
  };

  window.onload = function() {
    const textarea = document.getElementById('textoEncriptado');
    textarea.value = ''; // Limpia el contenido anterior
    textarea.selectionStart = 0;
    textarea.selectionEnd = 0;
    textarea.focus();
  };

//encriptar texto

function encriptarTexto(text){
    let textoEncriptado = text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat")
    return textoEncriptado;

}

//desencriptar texto
function  desencriptarTexto(text){
    let textoDesencriptado = text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return textoDesencriptado;
}

const inputText = document.getElementById("textoEncriptar");
const outputText = document.getElementById("textoEncriptado");
const encryptBtn = document.getElementById("encryptBtn");
const decryptBtn = document.getElementById("decryptBtn");
const copyBtn = document.getElementById("copyBtn");

encryptBtn.addEventListener("click", () => {
    const text = textoEncriptar.value;
    const textoEncriptado = encriptarTexto(text);
    textoEncriptado.value = textoEncriptado;
});

decryptBtn.addEventListener("click", () => {
    const text = textoEncriptar.value;
    const textoDesencriptado = desencriptarTexto(text);
    textoEncriptado.value = textoDesencriptado;
});

copyBtn.addEventListener("click", () => {
    textoEncriptado.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
});