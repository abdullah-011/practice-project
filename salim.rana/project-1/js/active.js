
$(document).ready(function(){

    $('.slider-active').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText: ['<i class = "fas fa-angle-left"> </i>','<i class = "fas fa-angle-right"> </i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:1
            }
        }
    })


    $('.video-popup').magnificPopup({
        type: 'image'
        // other options
      });
 

})

$('.project-active ').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText: ['<i class = "fas fa-angle-left"> </i>','<i class = "fas fa-angle-right"> </i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:4
        },
        1200:{
            items:4
        }
    }
})


$('.blog-activ ').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText: ['<i class = "fas fa-angle-left"> </i>','<i class = "fas fa-angle-right"> </i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1200:{
            items:1
        }
    }
})


$('.brand-actibe').owlCarousel({
    loop:true,
    margin:50,
    nav:false,
    navText: ['<i class = "fas fa-angle-left"> </i>','<i class = "fas fa-angle-right"> </i>'],
    responsive:{
        0:{
            items:2
        },
        600:{
            items:2
        },
        1200:{
            items:6
        }
    }
})
