setTimeout (
  function() {
    document.getElementById('load').style.display = 'none';
    document.getElementById('site').style.display = 'block';
  }, 1500
);

$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.hidenav').fadeOut()
    }
    else if ($(this).scrollTop() < 200) {
        $('.hidenav').fadeIn()
    }
});

$(document).ready(function () {
    var amountScrolled = 300;
    $(window).scroll(function() {
        if ( $(window).scrollTop() > amountScrolled ) {
            $('button.back-to-top').addClass('show');
        } else {
            $('button.back-to-top').removeClass('show');
        }
    });

    $('a#Interesse').click(function () {
       $('html, body').animate( {
           scrollTop: $('#Fazemos').offset().top
       }, 1000);
    });
    $('a#contatoLink, a#contatoLink-sm').click(function() {
        $('html, body').animate ({
            scrollTop: $('#contato').offset().top
        }, 1000);
    });
    $('button.back-to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    });

    $('a#marketingLink').click(function() {
        $('html, body').animate({
            scrollTop: $('#marketing').offset().top
        }, 800);
    });

    $('a#marketingLink-sm').click(function() {
        $('.menuLink').each(function () {
            $(this).prop("checked", false);
        });
        $('html, body').animate({
            scrollTop: $('#marketing').offset().top
        }, 900);
    });

    $.support.placeholder = (function(){
        var i = document.createElement('input');
        return 'placeholder' in i;
    })();

    if($.support.placeholder) {
        $('.form-label').each(function(){
            $(this).addClass('js-hide-label');
        });

        $('.form-group').find('input, textarea').on('keyup blur focus', function(e){

            var $this = $(this),
                $parent = $this.parent().find("label");

            switch(e.type) {
                case 'keyup': {
                    $parent.toggleClass('js-hide-label', $this.val() == '');
                } break;
                case 'blur': {
                    if( $this.val() == '' ) {
                        $parent.addClass('js-hide-label');
                    } else {
                        $parent.removeClass('js-hide-label').addClass('js-unhighlight-label');
                    }
                } break;
                case 'focus': {
                    if( $this.val() !== '' ) {
                        $parent.removeClass('js-unhighlight-label');
                    }
                } break;
                default: break;
            }
        });
    }

    $('#contactModal').on('shown.bs.modal', function() {
        document.getElementById('contact-form').addEventListener('submit', function (event) {
            event.preventDefault();
            emailjs.sendForm('gmail', 'contact_ideapps', '#contact-form')
                .then(function (response) {
                    setTimeout( function () {
                        $("#RespostaSuccess").removeClass("hideResposta");
                        $("#RespostaSuccess").addClass("showResposta");
                        setTimeout( function () {
                            var $modal = $('#contactModal');
                            $modal.delay(1000).hide(0,
                                function() {
                                    $modal.modal('hide');
                                });
                        }, 1500);
                    }, 50);
                    $('#nome').val("");
                    $('#email').val("");
                    $('#menssage').val("");
                },
                function (error) {
                    setTimeout( function () {
                        $("#RespostaError").removeClass("hideResposta");
                        $("#RespostaError").addClass("showResposta");
                        setTimeout( function () {
                            var $modal = $('#contactModal');
                            $modal.delay(1000).hide(0,
                                function() {
                                    $modal.modal('hide');
                                });
                        }, 1500);
                    }, 50);
                    $('#nome').val("");
                    $('#email').val("");
                    $('#menssage').val("");
                });
        });
    })
});
