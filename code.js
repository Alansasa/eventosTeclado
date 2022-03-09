//Caja de texto y boton
var boton = document.getElementById("botoncito");
var texto = document.getElementById("anchoLineas")
boton.addEventListener("click", dibujarTeclado);

var ID = document.getElementById("canvas");
var areaDibujo = ID.getContext("2d");
var color = document.getElementById("colorcito");
color.addEventListener("change", cambiarColor);

function cambiarColor(){
   var value = color.value
   return value;
}

document.addEventListener("keydown", dibujarTeclado);

var flechasTeclado = {
   LEFT : 37,
   UP : 38,
   RIGHT : 39,
   DOWN : 40
};

var x = 5;
var y = 5;
var desplazamiento = 5;

function dibujarTeclado(evento) {
switch (evento.keyCode){
   case flechasTeclado.LEFT :
      dibujarLineas(cambiarColor(),x, y, x - desplazamiento, y)
      x = x - desplazamiento;
      y = y;
   break;
   case flechasTeclado.UP :
      dibujarLineas(cambiarColor(), x, y, x, y - desplazamiento);
      x = x;
      y = y - desplazamiento;
   break;
   case flechasTeclado.RIGHT :
      dibujarLineas (cambiarColor(), x, y, x + 10, y);
      x = x + 10;
      y = y;
   break;
   case flechasTeclado.DOWN :
      dibujarLineas(cambiarColor(), x, y, x, y + 10);
      x = x;
      y = y + 10;
}
dibujarLineas("blue", 0, 0, 300, 0);
dibujarLineas("blue", 300, 0, 300, 300);
dibujarLineas("blue", 300, 300, 0, 300);
dibujarLineas("blue", 0, 300, 0, 0);
}

  

function dibujarLineas (color, x_inicial,y_inicial, x_final, y_final){

   areaDibujo.beginPath(),
   areaDibujo.strokeStyle = color;
   areaDibujo.lineWidth = texto.value;
   areaDibujo.moveTo (x_inicial, y_inicial);
   areaDibujo.lineTo (x_final, y_final);
   areaDibujo.stroke();
   areaDibujo.closePath();
}
