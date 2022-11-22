$(function(){

  //애니메이션 중복 방지 변수
  var executed = false;

  $(window).scroll(function(){
    var threshold = $(".section2").offset().top - 650;

    //애니메이션 중복 방지
    if(!executed){//if(executed == false)
      
      //일정수준의 스크롤을 하면
      if($(this).scrollTop() >= threshold){
        var dataRate = $('.animate').attr('data-rate');
  
        //숫자가 올라가는 애니메이션
        $({rate:0}).animate({rate:dataRate},{
          duration: 1500,
          progress: function(){
            var now = this.rate;
            $('.animate').text(Math.ceil(now) + '%');
          }
        });//animate
        
        executed = true;
      }//animate if
    }//executed if
    

  });//scroll
});//document