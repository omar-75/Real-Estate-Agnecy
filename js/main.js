window.addEventListener('scroll', function () {
    let stickyNavbar = document.querySelector('nav');
    stickyNavbar.classList.toggle('sticky', window.scrollY > 200);
});
const btn = document.querySelector('.humburger');
const btn2 = document.querySelector('#navbar');
btn.addEventListener('click', function () {
    btn2.classList.toggle('berho');
});

// scroll
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 500 ||
        document.documentElement.scrollTop > 500
    ) {
        document.getElementById('gotoTop').style.display = 'block';
    } else {
        document.getElementById('gotoTop').style.display = 'none';
    }
}

function topFunction() {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
}
// counter
$('.count').each(function () {
    $(this)
        .prop('Counter', 0)
        .animate(
            {
                Counter: $(this).text(),
            },
            {
                duration: 3000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                },
            }
        );
});

// popup aboutus
new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane',
});
// testimonial

$('.testimonial-sliders').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    arrows: true,
    slidesToScroll: 3,
    prevArrow: `<i class="fa-solid fa-arrow-left testPrev"></i>`,
    nextArrow: `<i class="fa-solid fa-arrow-right testnext"></i>`,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
});

$('.blogWraper').slick({
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    arrows: true,
    slidesToScroll: 3,
    prevArrow: `<i class="fa-solid fa-arrow-left testPrev"></i>`,
    nextArrow: `<i class="fa-solid fa-arrow-right testnext"></i>`,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
});
