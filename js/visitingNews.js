$(function(){
    function getUrlParam(key) {
        // 获取参数
        var url = window.location.search;
        // 正则筛选地址栏
        var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
        // 匹配目标参数
        var result = url.substr(1).match(reg);
        //返回参数值
        return result ? decodeURIComponent(result[2]) : null;
    }
    var windowWidth = $(window).width();
    var slidesPerView = 5;
    if(windowWidth<780){
        slidesPerView = 2;
    }
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: slidesPerView,
        paginationClickable: true,
        spaceBetween: 30,
        nextButton: '.right_icon',
        prevButton: '.left_icon',
        onSlideChangeEnd: function(swiper){
            if(swiper.isBeginning){
                swiper.prevButton.removeClass('prev_active');
            }else{
                swiper.prevButton.addClass('prev_active');
            }
            if(swiper.isEnd){
                swiper.nextButton.addClass('next_active');
                $('#swiperId').css('transition-duration','0ms')
                $('#swiperId').addClass('swiperId')
                var X = $('#swiperId').css('transform').replace(/[^0-9\-,]/g,'').split(',')[4]-40
                $('#swiperId').css('transform','translate3d('+X+'px,0px,0px)')
                setTimeout(function(){
                    $('#swiperId').removeClass('swiperId')
                },150);
            }else{
                swiper.nextButton.removeClass('next_active');
            }
        }
    });
    var swiper_child = new Swiper('.swiper-container-child', {
        slidesPerView: 2,
        paginationClickable: true,
        spaceBetween: 30,
        nextButton: '.right_icon_child',
        prevButton: '.left_icon_child',
        onSlideChangeEnd: function(swiper_child){
            if(swiper_child.isBeginning){
                swiper_child.prevButton.removeClass('prev_active');
            }else{
                swiper_child.prevButton.addClass('prev_active');
            }
            if(swiper_child.isEnd){
                swiper_child.nextButton.addClass('next_active');
                $('#swiperId_child').css('transition-duration','0ms')
                $('#swiperId_child').addClass('swiperId_child')
                var X = $('#swiperId_child').css('transform').replace(/[^0-9\-,]/g,'').split(',')[4]-40
                $('#swiperId_child').css('transform','translate3d('+X+'px,0px,0px)')
                setTimeout(function(){
                    $('#swiperId_child').removeClass('swiperId_child')
                },150);
            }else{
                swiper_child.nextButton.removeClass('next_active');
            }
        }
    });
    // let slideIdx = getUrlParam("slideIdx");
    // swiper.slideTo(slideIdx, 1000, false);
    $('#tab_child p').click(function(){
        $('#tab_child p').removeClass('active');
        $(this).addClass('active');
        $('#visitInfo .blockWrap').hide();
        $('#visitInfo .blockWrap').eq($(this).index()).show();
        let idx = $(this).index();
    })
    $('#swiperId_child .swiper-slide').click(function(){
        console.log($(this).index(),'==========')
        let idx = $(this).index();
        $('#swiperId_child .swiper-slide .tabC').removeClass('active');
        $(this).find('.tabC').addClass('active');
        $('#visitInfo .blockWrap').hide();
        $('#visitInfo .blockWrap').eq(idx).show();
    })
    function watchWindowSize(){
        let width = $(window).width();
        console.log('width:', width)
        if(width>780){
            console.log(swiper)
            window.slidesPerView = 5;
            swiper.init();
        }
    }
    window.addEventListener('resize', watchWindowSize)
})
