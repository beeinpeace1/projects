// $( "div" ).click(function() {
//   var color = $( this ).css( "background-color" );
//   $( ".container" ).html(style = "color" );
// });


var listElements = document.getElementsByClassName ("circle");
var step = (2*Math.PI)/listElements.length;
var angle=0; 
var circleCenterX = 100;
var circleCenterY = 100;
var radius = 90;
for(var i = 0; i<listElements.length; i++)
{ 
  var element = listElements[i];
  var Left=Number(Math.round(circleCenterX+radius*Math.cos(angle)));
  var Top=Number(Math.round(circleCenterY+radius*Math.sin(angle)));
  element.style.left = Left+"px";
  element.style.top = Top+"px";
  angle+=step;   
}
