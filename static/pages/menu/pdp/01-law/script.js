function acendeLampada() {
  document.getElementById("imagem").src =
    "https://www.w3schools.com/js/pic_bulbon.gif";
}

function apagaLampada() {
  document.getElementById("imagem").src =
    "https://www.w3schools.com/js/pic_bulboff.gif";
}

let x = [1,2,3,4,5];
x.splice(0,3);
x.splice(0,1);  
x.pop();
console.log(x);
