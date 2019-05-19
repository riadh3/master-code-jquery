$(document).ready(()=>{

    // show hide the button nav
    $('.btn').on('click',()=>{
        $('.nav-links').stop().slideToggle(2000)
        $('.btn').toggleClass('change-btn')
    })

    $(document).scroll(function(){
        let position=$(document).scrollTop()
        if(position >= 100){
            $('nav, .nav-container').addClass('navBackground')
        }
        else{
            $('nav, .nav-container').removeClass('navBackground')
        }
    })

    // smooth scroll
    $('.nav-links a').on('click', function(idLink){
        idLink.preventDefault()
        let target = $(this).attr('href')

        $('html, body').stop().animate({
            scrollTop : $(target).offset().top
        }, 3000)
    })


    // owl-carousel for team section
    $('.team-center').owlCarousel({
        loop:true,
        margin:10,
        smartSpeed:4000,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })

    // owl-carousel for customer section
    $('.customers-center').owlCarousel({
        loop:true,
        margin:10,
        smartSpeed:4000,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:3
            }
        }
    })



})