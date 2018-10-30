// No modifiques estas funciones a menos que sepas MUY BIEN lo que estas haciendo!

// Loading
$(document).ready(function(){
  $('.marvel').hide().animate({'width' : 'toggle'}, 900);
  $('.dc').hide().animate({'width' : 'toggle', 'right' : '0%'}, 900);
  $('.vrs-img').hide().slideToggle(900);
})

// Abre una ventana para guardar nuestro arte en un archivo pixel-art.png

function guardarPixelArt() {
  html2canvas($("#grilla-pixeles") , {
    onrendered: function(canvas) {
      theCanvas = canvas;
      canvas.toBlob(function(blob) {
        saveAs(blob, "pixel-art.png");
      });
    }
  });
}

// Carga el super hero que escogio

var $superEnGrilla;
var $elSuperHeroe

$('.imgs img').click(function(){
  $superEnGrilla = $(this).attr('id');
  switch ($superEnGrilla){
    case "batman":
    $elSuperHeroe = batman;
    break;
    case "wonder":
    $elSuperHeroe = wonder;
    break;
    case "flash":
    $elSuperHeroe = flash;
    break;
    case "invisible":
    $elSuperHeroe = invisible;
    break;
    case "hulk":
    $elSuperHeroe = hulk;
    break;
    case "spider":
    $elSuperHeroe = spider;
    break;
    case "widow":
    $elSuperHeroe = widow;
    break;
    case "thor":
    $elSuperHeroe = thor;
    break;
  }
  cargarSuperheroe($elSuperHeroe);

});


// Carga a un superheroe predefinido
function cargarSuperheroe(superheroe) {
  var $pixeles = $("#grilla-pixeles div");
  for (var i = 0; i < superheroe.length; i++) {
    $pixeles[i].style.backgroundColor = superheroe[i];
  }
};

// Borra lo que etsa pintado en la grilla 
$('#borrar').click(function(){
  var $returnWhite = $('#grilla-pixeles').find('div');
  $returnWhite.animate({'background-color' : 'white'}, 2000);
});

