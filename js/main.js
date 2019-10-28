$(function(){
    //**초기값
    var num = 0
    $('.change_word div').eq(num).addClass('on')
    var slide = function(){

        num = num +1
        if(num > 5){
            num = 0
        }
        
    $('.change_word div').eq(num).addClass('on')
    $('.change_word div').eq(num).siblings().removeClass('on')
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

    
    
    // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
    
})//ready
