
$('.slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 200,
            dots: true,
            infinite: true,
            responsive: [
                {
                    breakpoint: 572,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                        dots: true,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                        dots: true,
                    }
                }

            ]
        });

$('.accordion').accordion({
        heightStyle: 'content',
        header: '> .accordion-item > .accordion-header'
    });

$('.product-image').magnificPopup ({
    type: 'image',

    zoom: {
        enabled: true,
        duration: 600,
        easing: 'ease-in-out'
    }
});


$('.index').on('keypress', function (e) {
    if (e.which < 48 || e.which > 57) {
        e.preventDefault();
    }
});

$('#subject_heading').attr('maxlength', '6');

$('#submit').click(function () {
    let name = $('#name');
    let lastName = $('#last_name');
    let phone = $('#phone');
    let country = $('#country');
    let subject = $('#subject_heading');
    let address = $('#address');

    if (!name.val()) {
        alert('Заполните Имя');
        return;
    }

    if (!lastName.val()) {
        alert('Заполните Фамилию');
        return;
    }

    if (!phone.val()) {
        alert('Введите номер телефона');
        return;
    }

    if (!country.val()) {
        alert('Ваша геолокация');
        return;
    }

    if (!subject.val()) {
        alert('Введите ваш индекс');
        return;
    }

    if (!address.val()) {
        alert('Ваш адрес');

    } else {
        $('.form').hide()
        $('#thanks').html('Cпасибо за заказ. Мы свяжемся с вами!')
    }

    let thanks = $('#thanks');
    thanks.css('display', 'flex');

    $('#thanks').fadeOut(4000);

    return false
});









