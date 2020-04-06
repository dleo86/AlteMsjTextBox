
var texto = 0;

var mensaje=new Array();
  mensaje[0] = "Bienvenido a JavaScript GitHub!"
  mensaje[1] = "Cientos de scripts en JavaScript"
  mensaje[2] = "Compartelos con otras personas"
  mensaje[3] = "No dudes en volver ..."
  mensaje[4] = "Es un ejemplo del funcionamiento de JavaScript"

function cambiarTexto() {
  if (mensaje.length > 0) {
    document.cambiar.descrip.value=mensaje[texto];
    texto++;
  }
  if (texto == 5) {
  	 texto = 0; 
  }  // El 5 representa el máximo de la cantidad de textos a mostrar
  window.setTimeout("cambiarTexto()", 3500); 
 }  // El valor 3500 representa la velocidad para cambiar el texto
                                              

function CargarEvento(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }
}

CargarEvento(function() {
  cambiarTexto();
});
