
$(document).ready(function () {
   // Selector de ID

   var rojo = $("#rojo").css("background", "red")
      .css("font-family", "sans-serif");
   console.log(rojo);

   // Selector de CLASES

   var amarillo = $('.amarillo');
   amarillo.css("background", "yellow")
      .css("border", "5px dashed black");

   $('.naranja').click(function () {
      console.log('Click dado')
      $(this).addClass('orange');
   });

   var parrafos = $('p');

   parrafos.click(function(){
      //lo que hace el hasClass es buscar si existe en alguna etiqueta parrafo la clase "amarillo"
      if($(this).hasClass('amarillo')){
         //en caso de encontrarla añadir o cambiar la clase
         $(this).addClass('grande');
      }
   });
   //selector de atributos 
   //se utilizan corchetes []
   $('[title="Google"]').css('background','#ccc')
   $('[title="Facebook"]').css('background','aliceblue')

   //otros

   // $('p,a').addClass('margenSuperior');
});
