// Não consegui fazer a função de copiar    '-'
//deixarei o botao disabled
//adicionei o atributo contenteditabled <p> dentro de <section>

const buttonMix = document.querySelector(".btn-mix");
const buttonUnMix = document.querySelector(".btn-unmix");
const textArea = document.querySelector("textarea");
const sectionText = document.querySelector("section");
const buttonCopy = document.querySelector(".btn-copy");

const sectionH2 = document.querySelector("section h2");
const sectionP = document.querySelector("section p");

const mix = () => {
  sectionH2.innerHTML = "";
  sectionP.innerHTML = mixLetters(textArea.value);
  buttonCopy.classList.remove("hidden");

  clear();
};

function unMix() {
  sectionH2.innerHTML = "";

  buttonCopy.classList.add("hidden");
  sectionP.innerHTML = unmixLetters(textArea.value);
  clear();
}

function mixLetters(UnmixedPhrase) {
  return UnmixedPhrase.replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
}

function unmixLetters(mixedPhrase) {
  return mixedPhrase
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
}

function clear() {
  textArea.value = "";
}

buttonMix.onclick = mix;
buttonUnMix.onclick = unMix;
