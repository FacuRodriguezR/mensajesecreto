$(document).ready(function(){
   
    var caja = $('#caja');

    $("#mostrar").click(function(){
        $(this).hide();
        $(this).css("display", "block");
        $("#ocultar").show();
        caja.fadeTo('slow', 0.9);
    })
    $("#ocultar").click(function(){
        $(this).hide();
        $("#mostrar").show();
        caja.fadeTo('slow' , 0.1);
    })

    var abrir = $("#todoEnUno");
    abrir.click(function(){
        caja.toggle('fast');
    })

    var animar = $("#animar");

    animar.click(function(){
        caja.animate({marginLeft: '500px'}, 'slow');
    });


    var jq = document.createElement('script');
jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);
// ... give time for script to load, then type.
jQuery.noConflict()

});