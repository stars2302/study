$(document).ready(function(){
	//recent post slide
  $('.posts_list').bxSlider({
    minSlides: 1,
    maxSlides: 3,
    moveSlides: 1,
    slideWidth:370,
    slideMargin : 30,
    pager:false,
    nextSelector: '.recent_posts .controls .next',
    prevSelector :'.recent_posts .controls .prev' 
  });
  
  //Mobile 메뉴
  $(".toggle").click(function(){
    $(".main-menu").slideToggle();
  }); 
  
  //사이즈 변경 시 메뉴
  $(window).resize(function(){
    if($(window).width() > 768){
      //참이면 할일
      $(".main-menu").show();
    } else{
      //거짓이면 할일
      $(".main-menu").hide();
    }
  });				

  //header 상단에 고정하기
  var $header = $('header');
  var $service = $('.services');
  var $serviceExecuted = false;
  var $counters = $('.counters');
  var $counterData = $counters.find('h3');
  var $countersExecuted = false;
  

  $(window).scroll(function(){
    var $currentSct = $(this).scrollTop();
    var $offset = 600;

    if( $currentSct ){
      $header.addClass('sticky');
    } else{
      $header.removeClass('sticky');
    }
    
    //services 순차적으로 나타나기
    var $serviceThreshold = $service.offset().top - $offset;
    

    if(!$serviceExecuted){
      if($serviceThreshold < $currentSct){
        $service.addClass('active');
      }
    }

    //숫자 애니메이션
    var $countersThreshold = $counters.offset().top - $offset;

    if(!$countersExecuted){
      if($countersThreshold < $currentSct){
        
        $counterData.each(function(){
          var $current = $(this);
          var $target = $current.attr('data-rate');
          console.log($target);
          //animate, progress활용
          $({rate:0}).animate({rate:$target},{
            duration: 2500,
            progress: function(){
              var now = this.rate;
              console.log(now)
              $current.text(Math.ceil(now));
            }
          }); //animate
        }); //each
        
        $countersExecuted = true;
      }
    }
  });//$(window).scroll(function(){


  // video modal
  var currentUrl = $('iframe').attr('src');
  $('.video .icon').click(function(e){
    e.preventDefault();
    $('#overlay').addClass('visible');

    var newStr = '?autoplay=1';
    var newUrl = currentUrl.concat(newStr);
    // concat : 문자열을 합쳐주는 칭구

    $('iframe').attr('src',newUrl);
  });

  $('.video .close').click(function(e){
    e.preventDefault();
    currentUrl = $('iframe').attr('src');
    $('#overlay').removeClass('visible');
    var newUrl2 = currentUrl.replace('?autoplay=1','');
    $('iframe').attr('src',newUrl2);
  });
  
  
});//ready(function(){