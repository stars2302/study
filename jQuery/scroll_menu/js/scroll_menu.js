$(function(){
  var 
  $menu = $('#top_menu ul li'),
  $contents = $('#contents > div');
  console.log($menu);

  
  $menu.click(function(x){
    x.preventDefault();
    
    //$menu를 클릭하면 해당 요소에 Class 'on' 이 추가
    // $(this).addClass('on').siblings().removeClass('on');
    
    //$menu를 클릭하면 상충되는 section으로 이동하기
    var idx = $(this).index();
    var section = $contents.eq(idx);
    var sectionDistance = section.offset().top;
    $('html,body').stop().animate({scrollTop:sectionDistance});
  });

  //scroll했을 때, $menu의 class 'on'이 추가되지 않은 오류해결
  $(window).scroll(function(){
    $contents.each(function(){
      if($(this).offset().top <= $(window).scrollTop()){
        var idx = $(this).index();
        $menu.removeClass('on');
        $menu.eq(idx).addClass('on')
      }
    });
  });

  var buttons = $('button'),
  topButton = buttons.eq(0),
  bottomButton = buttons.eq(1);

  $(topButton).click(function(){
    $('html,body').stop().animate({scrollTop:0},1500);
  });
  $(bottomButton).click(function(){
    $('html,body').stop().animate({scrollTop:1900},1500);
  });





});//document


