$('.message').hide();
$(document).ready(function() {

const isMobile = /Android|webOS|iPhone|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
const isTablet = /(ipad|tablet|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/i.test(navigator.userAgent);

let width = $(window).width();
let height = $(window).height();

let messageAccess = false;

message(width, height, messageAccess);

$(window).resize(function(width, height, messageAccess){
    message(width, height, messageAccess);
});

// let screen = "1920x1080";
let screen = screenSize(width, height);

let sec3 = 3000;
let sec2 = 2000;
let sec15 = 1500;
let sec1 = 1000;

$('.title').hide();
$('.title-1').show();


$('.bg-image').css("opacity", 0);
if(isTablet || isMobile) {
    $('.bg-image-1').css("opacity", 1);
}

function changeBtn(text, second) {

    $(".top-item-3-btn").animate({
        opacity: 0
    }, second, function() {
        $(".top-item-3-btn").text(text).animate({
            opacity: 1
        }, second);
    });

}


if(!isMobile) {


    if(!isTablet) {

        for (let v = 1; v <= 8; v++) {
            
            $('.scroll-position').before("<video muted class='hidden bg-video bg-video-"+ v +"'><source src='video/"+ screen +"/"+ v +".mp4' type='video/mp4'></video>");
            $('.scroll-position').before("<video muted class='hidden bg-video bg-video-"+ v +"-r'><source src='video/"+ screen +"/-"+ v +".mp4' type='video/mp4'></video>");
            
        }

    }
$('.bg-video').not('.bg-video-1').hide();
        
        let i = 1;
        let access = true;
        let accessR = false;
        
            $(window).on("scroll", function() {

                let lastScrollPosition = $('.scroll-position').attr('value');
                let scrollPosition = $(window).scrollTop();
                
                if(scrollPosition > lastScrollPosition) {
                    if(access) {
    
                        $('.title-'+ i).hide(sec1); 

                        let t = i + 1;
                        setTimeout(function(){  $('.title-'+ t).show(sec2);   }, sec1)
                        
                        if(t == 9) {
                            $('.top-item-3').hide(sec15);
                            $('.top-icons').hide(sec15);
                            $('.grey').animate({
                                opacity: 1
                            }, sec2);
                        }
    
                        $('.counter-1').text("0"+t);
    
                        switch(i) {
                            case 1:
                                changeBtn('Вызвать замерщика', sec15);
                                break;
                            default:
                                changeBtn('Узнать больше', sec15);
                                break;
                        }
    
                        access = false;
                        accessR = false;
                        if(!isTablet) {

                                $('.bg-video').not('.bg-video-'+i).hide(600);
                                $('.bg-video-'+i).show();
                                $('.bg-video-'+i).get(0).play();
                        } else {
                            $('.bg-image').animate({
                                opacity: 0
                            }, sec1);
                            $('.bg-image-'+t).animate({
                                opacity: 1
                            }, 100);
                        }
                        i++;
                        setTimeout(function() { 
                            if(i != 9) { access = true; }
                            accessR = true; 
                        }, sec3);
                    }    
                } else {
                    if(accessR) {
    
                        $('.title-'+ i).hide(sec1); 
                        let t = i - 1;                        
                        setTimeout(function(){  $('.title-'+ t).show(sec2);   }, sec1)

                        if(i == 9) {
                            $('.top-item-3').show(sec15);
                            $('.top-icons').show(sec15);
                            $('.grey').animate({
                                opacity: 0
                            }, sec2);
                        }
    
                        $('.counter-1').text("0"+t);
    
                        switch(i) {
                            case 2:
                                changeBtn('Записаться на замер', sec15);
                                break;
                            case 3:
                                changeBtn('Вызвать замерщика', sec15);
                                break;
                            default:
                                changeBtn('Узнать больше', sec15, 200);
                                break;
                        }
    
                        if(i != 1) { i--; }
                        access = false;
                        accessR = false;
                        if(!isTablet) {

                            $('.bg-video').not('.bg-video-'+i+'-r').hide(600);
                            $('.bg-video-'+i+'-r').show();
                            $('.bg-video-'+i+'-r').get(0).play();

                            $('.bg-video-'+i+'-r').get(0).play();
                        } else {
                            $('.bg-image').animate({
                                opacity: 0
                            }, sec1);
                            $('.bg-image-'+i).animate({
                                opacity: 1
                            }, 100);
                        }
                        setTimeout(function() { 
                            if(i != 1) { accessR = true; }
                            access = true; 
                        }, sec2);
                    }
                }
    
                $('.scroll-position').attr('value', scrollPosition);
            });


}  else {

    messageAccess = true;
    
    $('.top-icons').children('img').eq(0).attr('src', 'img/mobile/icon/instagram.png');
    $('.top-icons').children('img').eq(1).attr('src', 'img/mobile/icon/facebook.png');

        let i = 1;
        let access = true;
        let accessR = false;

        $(window).on("scroll", function() {

            let lastScrollPosition = $('.scroll-position').attr('value');
            let scrollPosition = $(window).scrollTop();
            
            if(scrollPosition > lastScrollPosition && access) {
                
                        $(".arrow1").css("display", "block");
                        $('.mobile-'+ i).hide(sec1); 
                        
                        let t = i + 1;
                        setTimeout(function(){  $('.mobile-'+ t).show(sec1);   }, sec1)
                           
                        if(t == 9) {
                            $('.top-icons').hide(sec1);
                            $('.grey').animate({
                                opacity: 1
                            }, sec1);
                            $(".arrow2").css("display", "none");
                            $('.bg-image').hide();
                        }
    
                        switch(i) {
                            case 1:
                                changeBtn('Узнать о компании', 200);
                                break;
                            case 8:
                                changeBtn('Записаться на замер', 200);
                                break;    
                            default:
                                changeBtn('Узнать больше', 200);
                                break;
                        }
    
                        access = false;
                        accessR = false;

                        i++;
                        $('.bg-image').animate({
                            opacity: .1
                        }, sec1, function(){ $('.bg-image').css("z-index", "0") });
                        $('.bg-image-'+i).animate({
                            opacity: 1
                        }, 100, function(){ $('.bg-image-'+i).css("z-index", "1") });
                        
                        setTimeout(function() { 
                            if(i < 9) { access = true; }
                            accessR = true; 
                        }, sec3);

                        $([document.documentElement, document.body]).animate({
                            scrollTop: $(".up").offset().top
                        }, 0);


                } else if(scrollPosition < lastScrollPosition && accessR){
                    
                        $(".arrow2").css("display", "block");
    
                        $('.mobile-'+ i).hide(sec1); 
                        let t = i - 1;                        
                        setTimeout(function(){  $('.mobile-'+ t).show(sec1);   }, sec1)
                        if(i == 9) {
                            $('.top-icons').show(sec1);
                            $('.bg-image').show();
                            $('.grey').animate({
                                opacity: 0
                            }, sec1);
                        }
    
                        switch(i) {
                            case 2:
                                changeBtn('Записаться на замер', 200);
                                $(".arrow1").css("display", "none");
                                break;
                            case 3:
                                changeBtn('Узнать о компании', 200);
                                break;    
                            default:
                                changeBtn('Узнать больше', 200);
                                break;
                        }
    
                        if(i != 1) { i--; }

                        access = false;
                        accessR = false;

                        $('.bg-image').animate({
                            opacity: .1
                        }, sec1, function(){ $('.bg-image').css("z-index", "0") });
                        $('.bg-image-'+i).animate({
                            opacity: 1
                        }, 100, function(){ $('.bg-image-'+i).css("z-index", "1") });
                       
                        setTimeout(function() { 
                            if(i != 1) { accessR = true; }
                            access = true; 
                        }, sec3);

                        $([document.documentElement, document.body]).animate({
                            scrollTop: $(".down").offset().top
                        }, 0);
                        
                }
                $('.scroll-position').attr('value', scrollPosition);
            });

}
});

function screenSize(width, height) {

    if(width <= 1920 && height <= 1280) { screen = "1920x1080"; }
    if(width > 1920 && height > 1280) { screen = "1920x1080"; }
    if(width <= 1680 && height <= 1050) { screen = "1680x1050"; }
    if(width <= 1600 && height <= 900) { screen = "1600x900"; }
    if(width <= 1440 && height <= 900) { screen = "1440x900"; }
    if(width <= 1366 && height <= 768) { screen = "1366x768"; }
    if(width <= 1280 && height <= 910) { screen = "1280x910"; }
    if(width <= 1024 && height <= 600) { screen = "1024x600"; }

    return screen;

}

function message(width, height, messageAccess) {
    
    if(messageAccess) {

        if(width > height) {
            $('.message').show();
        } else {
            $('.message').hide();
        }

    }

}