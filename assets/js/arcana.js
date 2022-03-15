function animation() {

    if ($(".animationOn").length) {

    } else {
        $(".noAnimate").css({
            "background-position": "inherit",
            "-webkit-transform": "translateY(0)",
            "-ms-transform": "translateY(0)",
            "-o-transform": "translateY(0)",
            "transform": "translateY(0)"
        });
    }

}

const host = 'https://arcana.pw/';

document.addEventListener('DOMContentLoaded', function () {
    function menuAddEvents() {
        let pathname = window.location.pathname;

        if (pathname.indexOf('contacts') === -1) {
            // console.log('notfound');
            let contacts = document.getElementById('contacts');
            if (contacts) {
                contacts.classList.remove('d-none');
            }
        }
        let technology = document.getElementById('technologies');

        let tech_link = document.querySelector('#technologies a')
        // let tech_block = document.getElementById('tech_block');
        let tech_menu = document.getElementById('technology_sub_menu');

        let portfolio = document.getElementById('portfolio');
        let portfolio_link = document.querySelector('#portfolio a')
        let portfolio_menu = document.getElementById('portfolio_sub_menu');

        let services = document.getElementById('services');
        let services_link = document.querySelector('#services a')
        let services_menu = document.getElementById('services_sub_menu');

        let single_items = document.getElementsByClassName('single-menu-item');


        [].forEach.call(single_items, function (item) {
            item.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                if (tech_menu)
                    tech_menu.classList.add('d-none');
                if (tech_link)
                    tech_link.classList.remove('text-orange');
                if (portfolio_menu)
                    portfolio_menu.classList.add('d-none');
                if (portfolio_link)
                    portfolio_link.classList.remove('text-orange');
            });
        });
        if (technology) {
            technology.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                if (portfolio_menu)
                    portfolio_menu.classList.add('d-none');
                if (portfolio_link)
                    portfolio_link.classList.remove('text-orange');
                if (services_menu)
                    services_menu.classList.add('d-none');
                if (services_link)
                    services_link.classList.remove('text-orange');

                if (tech_menu)
                    tech_menu.classList.toggle('d-none');
                if (tech_link)
                    tech_link.classList.toggle('text-orange');
            });
        }
        if (portfolio) {
            portfolio.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                if (tech_menu)
                    tech_menu.classList.add('d-none');
                if (tech_link)
                    tech_link.classList.remove('text-orange');
                if (services_menu)
                    services_menu.classList.add('d-none');
                if (services_link)
                    services_link.classList.remove('text-orange');

                if (portfolio_menu)
                    portfolio_menu.classList.toggle('d-none');
                if (portfolio_link)
                    portfolio_link.classList.toggle('text-orange');

            });
        }

        if (services) {
            services.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                if (tech_menu)
                    tech_menu.classList.add('d-none');
                if (tech_link)
                    tech_link.classList.remove('text-orange');
                if (portfolio_menu)
                    portfolio_menu.classList.add('d-none');
                if (portfolio_link)
                    portfolio_link.classList.remove('text-orange');

                if (services_menu)
                    services_menu.classList.toggle('d-none');
                if (services_link)
                    services_link.classList.toggle('text-orange');

            });
        }



        let top_message = document.getElementById('top_message');

        let close_cross_message  = document.getElementById('close_cross_message');


        if (close_cross_message) {
            close_cross_message.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                top_message.style.display = 'none';
            })
        }
    }

    function mobileMenuAddEvents() {
        let hamburger = document.getElementById('hamburger_menu');
        let mobile_menu = document.getElementById('mobile-menu');
        let wrapper = document.getElementById('wrapper');
        let mobile_back = document.getElementById('mobile_back');

        if (hamburger) {
            hamburger.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                mobile_menu.style.display = 'block';
                wrapper.style.display = 'none';
            })
        }

        if (mobile_back) {
            mobile_back.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                mobile_menu.style.display = 'none';
                wrapper.style.display = 'block';
            })
        }
    }

    function getWidth() {

        let ww = document.body.clientWidth;
        // let wh = document.body.clientHeight;
        let mobilePort = 800, ipadView = 1025, wideScreen = 1600;

        console.log('w', ww);
        if (ww > wideScreen) {
            $('body').removeClass('device').addClass('desktop widerDesktop');
        }
        if (ww > mobilePort && ww <= wideScreen) {
            $('body').removeClass('device widerDesktop').addClass('desktop');
        }
        if (ww < ipadView) {
            $('body').removeClass('desktop widerDesktop').addClass('device');
        }
        if (ww <= mobilePort) {
            $('body').removeClass('desktop widerDesktop').addClass('device');
        }
        if (ww > 1024) {
            $('body').removeClass('navigationIsOpen');
        }
        if (ww < 768) {
            $('body').addClass('mobile');
        } else {
            $('body').removeClass('mobile');
        }
        if (ww > 767 && ww < 1025) {
            $('body').addClass('ipad');
        } else {
            $('body').removeClass('ipad');
        }

        if (ww > 1380) {
            $('body').addClass('animationOn');
        } else {
            $('body').removeClass('animationOn');
        }

    }

    function load () {
        $(function() {
            $("#menu_container").load("/menu.html", function () {
                menuAddEvents();
            });
        });

        $(function() {
            $("#menu_container_right").load("/menu-right.html", function () {
                menuAddEvents();
            });
        });

        $(function() {
            $("#footer_container").load("/footer.html");
        });

        $(function() {
            $("#top_message").load("/top-message-notice.html", function () {
                if (get_cookie('close_cookies_block') === '') {
                    let el_notice = document.getElementById('wr_cookies_notice');
                    if (el_notice) {
                        el_notice.classList.remove('d-none');
                    }
                }
            });
        });

        $(function() {
            $("#technology_sub_menu").load("/tech-menu.html");
        });

        $(function() {
            $("#services_sub_menu").load("/service-menu.html");
        });

        $(function() {
            $("#mobile-menu").load("/mobile-menu.html", function () {
                mobileMenuAddEvents();
            });
        });
    }

    function sliders() {
        $('.home-slider.owl-carousel').owlCarousel({
            loop: true,
            nav: true,
            items: 1,
            autoplay: 8000,
            dots: true,
            autoplayHoverPause: true,
            // autoplay:false,
            // autoplayHoverPause:true,
            animateOut: 'fadeOut'
        });

        jQuery(".scroll-down-btn").click(function () {
            jQuery("html, body").animate({
                scrollTop: jQuery("#section_home_2").offset().top - 300
            }, 1000);
        });


        if (jQuery(".banner-bottom-slider").length) {
            jQuery('.banner-bottom-slider').owlCarousel({
                nav: false,
                items: 4,
                mouseDrag: false,
                margin: 30,
                autoplay: 10000,
                responsive: {
                    0: {
                        items: 1,
                        dots: true,
                        loop: true
                    },
                    576: {
                        items: 2,
                        dots: true,
                        loop: true
                    },
                    800: {
                        items: 3,
                        dots: true,
                        loop: true
                    },
                    991: {
                        items: 4,
                        loop: false
                    }
                }
            });
        }
    }

    function get_cookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return '';
    }

    function sendForm() {
        let form = document.getElementById('contact_form');
        let success = document.getElementById('success');
        let error = document.getElementById('error');

        if (form) {
            form.addEventListener('submit', function (e) {
                e.preventDefault();
                e.stopPropagation();
                let xhr, formData;

                xhr = new XMLHttpRequest();
                let url = host + 'contacts.php';
                console.log(url);
                xhr.open('POST', url);


                xhr.upload.onprogress = function (e) {
                    console.log('Progress', e.type);
                };

                xhr.onerror = function () {
                    console.log('error', xhr.responseText);
                    error.textContent = xhr.responseText;
                    setTimeout(function () {
                        form.classList.remove('d-none');
                        error.textContent = '';
                    }, 5000)
                };

                xhr.onload = function () {
                    if (xhr.status === 200) {
                        console.log('success', xhr.responseText)
                        form.classList.add('d-none');
                        success.textContent = 'Message sent successfully!';

                        setTimeout(function () {
                            form.classList.remove('d-none');
                            success.textContent = '';
                        }, 5000)
                    } else {
                        console.log('error', xhr.statusText, xhr.statusMessage);
                        error.textContent = xhr.statusText;
                        setTimeout(function () {
                            form.classList.remove('d-none');
                            error.textContent = '';
                        }, 5000)
                    }
                };

                formData = new FormData(form);

                xhr.send(formData);


                return false;
            })
        }
    }

    load();

    if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
        lazyload();
    }


    $.fn.verticalAlign = function () {
        return this.css("padding-top", ($(this).parent().height() - $(this).height()) / 2 + 'px');
    };

    getWidth();

    sliders();

    sendForm();


    $('.vertical-align').each(function () {
        $(this).verticalAlign();
    });

    /**================= On Window Resize Start =================*/
    $(window).bind('resize orientationchange', function () {
        getWidth();
        animation();
        //winHeightBlock();
        $('.vertical-align').each(function () {
            $(this).verticalAlign();
        });
    });

    /******************   PAGE ******************************/

    // if ($(".inner-banner").length) {
    //     $(".inner-banner").each(function(){
    //         if ($(".inner-banner > img").length){
    //             let imagePath = $(".inner-banner > img").attr("src");
    //             $(this).css("background-image","url( " + imagePath  + " ) " );
    //         }
    //     });
    // }

})