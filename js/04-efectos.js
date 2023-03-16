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


});