$(function(){
    $('#test').fullpage({
        sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#888','#333'],
        scrollBar: true,
        afterRender: function(){
            var wow = new WOW({
                animateClass: 'animated',
            });
            wow.init();
        },
        onSlideLeave: function(anchorLink, index, slideIndex, direction){
            console.log("onSlideLeave--" + "anchorLink: " + anchorLink + " index: " + index + " slideIndex: " + slideIndex + " direction: " + direction);
            if(slideIndex == 0){
                $p = $(".slide1 p");
                $p.addClass('animated fadeInUpBig');
                $p.eq(0).css({'animation-delay':'1.3s','animation-duration':'0.5s'});
                $p.eq(1).css({'animation-delay':'1.6s','animation-duration':'0.5s'});
                $p.eq(2).css({'animation-delay':'1.9s','animation-duration':'0.5s'});
                $p.eq(3).css({'animation-delay':'2.1s','animation-duration':'0.5s'});
                $('.slide1 h3').addClass('animated rollIn').css({'animation-delay':'.1s','animation-duration':'1.3s'});
            }
            if (slideIndex == 1){
                $(".slide2 .row p").addClass('animated zoomInLeft').css({'animation-delay':'.3s','animation-duration':'1.1s'});
                $img = $(".slide2 .row .col-md-3");
                $img.addClass('animated zoomIn');
                $img.eq(0).css({'animation-delay':'1.3s','animation-duration':'.9s'});
                $img.eq(1).css({'animation-delay':'1.5s','animation-duration':'.9s'});
                $img.eq(2).css({'animation-delay':'1.7s','animation-duration':'.9s'});
                $img.eq(3).css({'animation-delay':'1.9s','animation-duration':'.9s'});
                $img.eq(4).css({'animation-delay':'2.1s','animation-duration':'.9s'});
                $img.eq(5).css({'animation-delay':'2.3s','animation-duration':'.9s'});
                $img.eq(6).css({'animation-delay':'2.5s','animation-duration':'.9s'});
                $img.eq(7).css({'animation-delay':'2.8s','animation-duration':'.9s'});
                $img.eq(8).css({'animation-delay':'3s','animation-duration':'0.9s'});
                $img.eq(9).css({'animation-delay':'3.2s','animation-duration':'0.9s'});
                $img.eq(10).css({'animation-delay':'3.4s','animation-duration':'0.9s'});
                $img.eq(11).css({'animation-delay':'3.6s','animation-duration':'0.9s'});
            }
            if (slideIndex == 2){
                $(".slide3 h3").addClass('animated rotateIn').css({'animation-delay':'.3s','animation-duration':'1.1s'});
                $img = $(".slide3 img");
                $img.addClass('animated lightSpeedIn');
                $img.eq(0).css({'animation-delay':'1.3s','animation-duration':'.9s'});
                $img.eq(1).css({'animation-delay':'1.6s','animation-duration':'.9s'});
                $img.eq(2).css({'animation-delay':'1.9s','animation-duration':'.9s'});
                $img.eq(3).css({'animation-delay':'2.1s','animation-duration':'.9s'});
                $img.eq(4).css({'animation-delay':'2.4s','animation-duration':'.9s'});
                $img.eq(5).css({'animation-delay':'2.7s','animation-duration':'.9s'});
            }
        },
        onLeave: function(index, nextIndex, direction){
            // console.log("onLeave--" + "index: " + index + " nextIndex: " + nextIndex + " direction: " +  direction);
            if(index == 3){
                $img = $("#scenery img");
                $img.addClass('animated bounceInUp');
                $img.eq(0).css({'animation-delay':'1.3s','animation-duration':'.9s'});
                $img.eq(1).css({'animation-delay':'1.6s','animation-duration':'.9s'});
                $img.eq(2).css({'animation-delay':'1.9s','animation-duration':'.9s'});
                $img.eq(3).css({'animation-delay':'2.1s','animation-duration':'.9s'});
                $img.eq(4).css({'animation-delay':'2.4s','animation-duration':'.9s'});
                $img.eq(5).css({'animation-delay':'2.7s','animation-duration':'.9s'});
                $img.eq(6).css({'animation-delay':'3s','animation-duration':'.9s'});
                $img.eq(7).css({'animation-delay':'3.3s','animation-duration':'.9s'});
                $img.eq(8).css({'animation-delay':'3.6s','animation-duration':'.9s'});
                $img.eq(9).css({'animation-delay':'3.9s','animation-duration':'.9s'});
                $img.eq(10).css({'animation-delay':'4.2s','animation-duration':'.9s'});
                $img.eq(11).css({'animation-delay':'4.5s','animation-duration':'.9s'});
            }
        },

    });
});
