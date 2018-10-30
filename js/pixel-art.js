// Variables

var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];


var paleta = document.getElementById('paleta');
var grillaPixeles = document.getElementById('grilla-pixeles');

// Paleta de colores
for (var i = 0; i < nombreColores.length; i++) {
  var nuevoDiv = document.createElement('div');
  nuevoDiv.className = 'color-paleta';
  nuevoDiv.style.background = nombreColores[i];
  paleta.appendChild(nuevoDiv);
}

// Grilla de dibujo
for (var i = 0; i < 1750; i++) {
  var nuevoPix = document.createElement('div');
  grillaPixeles.appendChild(nuevoPix);
}

// ------ SELECCION DE COLORES -------

// Variable Paleta de colores
var coloresPaleta = document.getElementById('paleta');

// Variable Rueda
var colorPersonalizado = document.getElementById('color-personalizado');

var pincelColor = document.getElementById('indicador-de-color');


// Evento paleta
coloresPaleta.addEventListener('click', tellColor);
// Evento rueda
colorPersonalizado.addEventListener('change', colorRueda);


//Color Paleta de colores
function tellColor(e){
  var theColor = e.target.style.background;
  cambioColor(theColor);
}
//Color Rueda
function colorRueda(e) {
    colorActual = colorPersonalizado.value;
    cambioColor(colorActual);
};

//Cambio de color
function cambioColor(color){
  pincelColor.style.background = color;
}


//------- Coloreado de grilla -------------

var coloresEnGrilla = document.getElementById('grilla-pixeles');
//var pixeles = coloresEnGrilla.children;

coloresEnGrilla.addEventListener('mousedown', coloring);


function coloring(e){
  e.target.style.background = pincelColor.style.background;
}

coloresEnGrilla.addEventListener("mousedown", mouseOnClick);
coloresEnGrilla.addEventListener("mouseup", mouseSuelto);
coloresEnGrilla.addEventListener("mousemove", colorear)

var click

function mouseOnClick(){
  click = true;
}
function colorear(e){
  if(click){
    e.target.style.background = pincelColor.style.background;
  }
}
function mouseSuelto(){
  click = false;
}








