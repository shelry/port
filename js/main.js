$(function(){
    //**초기값
    var num = 0
    $('.change_word li').eq(num).addClass('on')

/*
    변수 : 데이터 값이 변하는 경우 사용
    - 선언 후 사용
    - 변수 선언 : var 변수명 = 값
    - 변수명 첫글자는 꼭! 영어로 시작!
*/
    //**1초마다 계속 실행되는 동작 설정
    var slide = function(){
    //num = num +1
    //num =+ 1
 /*   if문 : 조건문, 조건이 참일경우 실행
    if(조건식){조건이 참일경우 실행}
    if(조건식){조건이 참일경우 실행}else{조건이 참이아닐경우 실행}
    if(조건식){조건이 참일경우 실행}else if{그렇지 않을 경우 조건이 참이면 실행}else{두 조건 다 참이 아닐경우 실행}
    
    - 조건식 : >, < >=, <=, ==(같다), !=(다르다)
    */
        num = num +1
        if(num > 5){
            num = 0
        }
        
    $('.change_word li').eq(num).addClass('on')
    $('.change_word li').eq(num).siblings().removeClass('on')
    //$('li').removeClass('on')
    //$('li').eq(num).addClass('on')
    }
    
    setInterval(slide,1500)
})//ready