// MODAL SILENCIADO

/* $('.modsubbtn').click(function() {
$('.modalsub').fadeIn(function() {
$('<iframe />', {
    name: 'myFrame',
    id: 'myFrame',
    src: 'https://skins.ineva.com.ar/skins/Suscriptor.aspx?id=1340&returl=https://www.ciccarelli.com.ar'
}).appendTo('.subbgmods');
});

});

$('.subx').click(function() {
    $('.modalsub').fadeOut(1000, function() {
        $('#myFrame').fadeOut(function() {
            $("#myFrame").detach();
        });
    });

    $('.subclose').click(function() {
        $('.modalsub').fadeOut(1000, function() {
            $('#myFrame').fadeOut(function() {
                $("#myFrame").detach();
            });
        });
    });
}); * /

// SUSCRITO/CERRAR AUTOMATICO

/* function mifuncion() {
    $('.modalsub').fadeOut(1000, function() {
        $('#myFrame').fadeOut(function() {
            $("#myFrame").detach();
        });

    });
    console.log("Cerrado");

}
$('#iframe').load(function() {
    // do something
});
$("#myFrame").contents().find("#Thankyou").on("change", function() {

    console.log("Thankyou encontrado");;


}); */



/* $('.modalsub').fadeOut(1000, function() {
    $('#myFrame').fadeOut(function() {
        $("#myFrame").detach();
    });
});
alert("Bien"); */



/* var resolvedFlag = true;

let mypromise = function popup(msg) {
    console.log("Function 1");
    return new Promise((resolve, reject) => {
        setTimeout(
            () => {
                console.log("Inside the promise");
                if (resolvedFlag == true) {
                    resolve("Resolved");
                } else {
                    reject("Rejected")
                }
            }, 3000
        );
    });
};

mypromise().then((res) => {
    console.log(`The function recieved with value ${res}`)
    $(function() {
        $('.modalsub').fadeOut(1000, function() {
            $('#myFrame').fadeOut(function() {
                $("#myFrame").detach();
            });
        });
        console.log(`Cerrando`);
        subclose();

    })
}).catch((error) => {
    console.log(`Handling error as we received ${error}`);
}); */

/* let thankyou = document.getElementById("Thankyou");
thankyou.addEventListener() */


/* $('[data-target="#myModal"]').on('click', function(e) {
    e.preventDefault();

    var _linky = $(this).attr('href');
    var _target = $(this).data('target');
    var $target = $(_target);

    if ($target.length > 0) {

        $target.find('iframe').attr('src', 'about:blank');

        var _isRemote = false;
        if (_linky.indexOf('http') > -1) {
            _isRemote = true;
        }

        if (!_isRemote) {
            if (_linky.indexOf('?') > -1) {
                _linky += '&tmpl=component';
            } else {
                _linky += '?tmpl=component';
            }
        }

        $target.find('iframe').attr('src', _linky).on('load', function() {
            $target.modal('show');
        });
    }
});

$('body').on('hidden.bs.modal', '.modal', function() {
    $(this).removeData('bs.modal');
}); */