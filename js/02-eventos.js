$(document).ready(function(){
   
    //MouseOver y MouseOut

    var caja = $('#caja');

    // caja.mouseover(function(){
    //     $(this).css("background","red")
    // });

    // caja.mouseout(function(){
    //     $(this).css("background", "green")
    // })

    function cambiaRojo(){
        $(this).css("background", "red")
    }
    function cambiaVerde(){
        $(this).css("background", "green")
    }

    //hover
    caja.hover(cambiaRojo, cambiaVerde);

    //click, dobleclick

    caja.click(function(){
        $(this).css("background", "aliceblue")
               .css("color", "orange");
    })
    caja.dblclick(function(){
        $(this).css("background", "orange")
               .css("color", "crimson")
    })

    //focus y blur

    var datos = $("#datos");
    var nombre = $("#nombre")
   nombre.focus(function(){
        $(this).css("border", "2px solid green");
    });
   nombre.blur(function(){
        $(this).css("border", "1px solid #ccc");
        
        datos.text($(this).val()).show();
    });

    //mopse down, mouse up
    datos.mousedown(function(){
        $(this).css("border-color", "grey");
    })
    datos.mouseup(function(){
        $(this).css("border-color", "black");
    })

    //mousemove

    $(document).mousemove(function(){
        console.log(event.clietX);
        console.log(event.clietY);
    })
});
