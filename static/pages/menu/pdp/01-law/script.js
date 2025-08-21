function acendeLampada() {
  document.getElementById("imagem").src =
    "https://www.w3schools.com/js/pic_bulbon.gif";
}

function apagaLampada() {
  document.getElementById("imagem").src =
    "https://www.w3schools.com/js/pic_bulboff.gif";
}


let x = 6;
let soma = 0;
while (x <= 12) {
  soma += x;
  x += 2;
}

console.log(soma);