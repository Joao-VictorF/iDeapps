$(document).ready(function () {
    if (pt) {
        var bemVindo = new Typed('#bemVindo', {
            strings: ['^1700', 'Bem-vindo! ^500 É bom te ver por aqui'],
            smartBackspace: true,
            typeSpeed: 60,
            backSpeed: 50,
            fadeOut: false,
            loop: false,
        });

        $(window).on('scroll', function (event) {
            if ($(window).scrollTop() > 300) {
                var quemSomos = new Typed('#quemSomos', {
                    strings: ['^2200', ' Nós somos<strong> determinados</strong>', 'Nós somos<strong> criativos</strong>',
                        'Nós somos<strong> inovadores</strong>', 'Nós somos<strong> uma realização!</strong>'],
                    smartBackspace: true,
                    typeSpeed: 60,
                    backSpeed: 50,
                    fadeOut: false,
                    loop: false,
                });
                $(this).off(event);
            }
        })
    }
    else if (en) {
        var bemVindo = new Typed('#bemVindo', {
            strings: ['^1700', 'Welcome! ^500 It\'s good to see you around here!'],
            smartBackspace: true,
            typeSpeed: 60,
            backSpeed: 50,
            fadeOut: false,
            loop: false,
        });

        $(window).on('scroll', function (event) {
            if ($(window).scrollTop() > 300) {
                var quemSomos = new Typed('#quemSomos', {
                    strings: ['^1800', ' We are <strong>determined</strong>', 'We are <strong>creative</strong>',
                        'We are<strong> innovative</strong>', 'We are<strong> an accomplishment!</strong>'],
                    smartBackspace: true,
                    typeSpeed: 60,
                    backSpeed: 50,
                    fadeOut: false,
                    loop: false,
                });
                $(this).off(event);
            }
        })
    }
    else if (es) {
        var bemVindo = new Typed('#bemVindo', {
            strings: ['^1700', 'Bienvenido! ^500 Es bueno verte por aquí!'],
            smartBackspace: true,
            typeSpeed: 60,
            backSpeed: 50,
            fadeOut: false,
            loop: false,
        });

        $(window).on('scroll', function (event) {
            if ($(window).scrollTop() > 300) {
                var quemSomos = new Typed('#quemSomos', {
                    strings: ['^2200', ' Nosotros somos<strong> determinados</strong>', 'Nosotros somos<strong> creativos</strong>',
                        'Nosotros somos<strong> innovadores</strong>', 'Nosotros somos<strong> una realización!</strong>'],
                    smartBackspace: true,
                    typeSpeed: 60,
                    backSpeed: 50,
                    fadeOut: false,
                    loop: false,
                });
                $(this).off(event);
            }
        })
    }
});
