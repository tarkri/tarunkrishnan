$(document).ready(function(){
    var goToDiv = function(ele) {
        var divName = ele.data('scroll');
        var div = $('.section.'+divName);
        $('html, body').animate({
            scrollTop: $(div).offset().top
        }, 500);
    };

    $('a.tab-down').click(function(){
        goToDiv($(this));
    });

    $('.fixed-tabs a').click(function(){
        goToDiv($(this));
    });

    $('section.section').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
        var that = $(this);
        if (isInView) {
            // element is now visible in the viewport
            if (visiblePartY === 'top') {
                // top part of element is visible
                if(that.hasClass('design')) {
                    $('.fixed-tabs a.design').removeClass('active');
                }
                if(that.hasClass('music')) {
                    $('.fixed-tabs a.music').removeClass('active');
                }
                if(that.hasClass('create')) {
                    $('.fixed-tabs a.create').removeClass('active');
                }
            } else if (visiblePartY === 'bottom') {
                // bottom part of element is visible
                if(that.hasClass('design')) {
                    $('.fixed-tabs a.design').addClass('active');
                }
                if(that.hasClass('music')) {
                    $('.fixed-tabs a.music').addClass('active');
                }
                if(that.hasClass('create')) {
                    $('.fixed-tabs a.create').addClass('active');
                }
            } else {
                // whole part of element is visible
                if(that.hasClass('banner')) {
                    $('.fixed-tabs a.design').removeClass('active');
                    $('.fixed-tabs a.music').removeClass('active');
                    $('.fixed-tabs a.create').removeClass('active');
                }
                if(that.hasClass('design')) {
                    $('.fixed-tabs a.music').removeClass('active');
                    $('.fixed-tabs a.create').removeClass('active');
                }
                if(that.hasClass('music')) {
                    $('.fixed-tabs a.create').removeClass('active');
                }
            }
        } else {
            // element has gone out of viewport
        }
    });
});