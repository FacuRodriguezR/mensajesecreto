$(document).ready(function(){
    reloadLinks();

    //creamos la funcion click donde al apretar el boton de añadir, se agregue un link mas a la lista 

    //capturamos la funcion addbutton y le ponemos el evento click
    $("#addButton").click(function(){

        //capturamos el id menu y dentro de esa etiqueta con id meny agregamos el link puesto en el formulario
        //el metodo .val() sirve para poder mostrar lo que se ingresa por form 
      $("#menu").append('<li><a href="' +$("#addLink").val()+'"></a></li>');


      $("#addLink").val(''),
      //volvemos a colocar la funcion para que no nos borre la lista anterior, si no que la agregue

      reloadLinks();
    })


});

//creamos una funcion para poder recorrer la lista
function reloadLinks(){
    $('a').each(function(index){
        var that = $(this);
        var enlace = that.attr("href");

        //añadimos atributo target
        that.attr('target','blank');

        that.text(enlace);
    });
};