$(function(){
    //**초기값
    var num = 0
    $('.change_word li').eq(num).addClass('on')
    var slide = function(){

        num = num +1
        if(num > 5){
            num = 0
        }
        
    $('.change_word li').eq(num).addClass('on')
    $('.change_word li').eq(num).siblings().removeClass('on')
    }
    setInterval(slide,1500)
    function hoverIn() {
        $(this).stop().animate({
            'background-size':'120%'
        },500)
    }
    function hoverOut() {
        $(this).stop().animate({
            'background-size':'100%'
        },300)
    }
    $('#sec2 .project_list li').hover(hoverIn, hoverOut);
})//ready
