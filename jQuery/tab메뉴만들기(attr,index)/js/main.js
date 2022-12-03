$(function () {
  var tab = $('.tabs-nav li'),
      tabAnchor = $('.tabs-nav li a'),
      tabPanel = $('.tabs-panel');



  // 1. attr 활용하기
  //링크를 클릭하면 할 일
  /*
  tabAnchor.click(function(e){
    e.preventDefault();

    // 클릭한 a태그만 적용
    // $(this).addClass('active').siblings().removeClass('active'); -> 형제가 없기 때문에 사용할 수 없음
    tabAnchor.removeClass('active');
    $(this).addClass('active');

    // 1. 모든 화면을 가리고
    tabPanel.hide();

    // 2. 해당되는 화면'만' 보이게
    var $target = $(this).attr('href');
    $($target).show();
  }); 
  */

  // 2. index 활용하기
  //링크를 클릭하면 할 일
  tab.click(function(e){
    e.preventDefault();

    // 클릭한 a태그만 적용
    // $(this).find('a').addClass('active'); -> 바로 뒤에 siblings 사용하면 $(this).find('a')의 형제를 선택하는 걸로 됨.
    // $(this).siblings().find('a').removeClass('active');
    tab.find('a').removeClass('active');
    $(this).find('a').addClass('active');

    // 1. 모든 화면을 가리고
    tabPanel.hide();

    // 2. 해당되는 화면'만' 보이게
    var $targetIndex = $(this).index();
    tabPanel.eq($targetIndex).show();
  }); 

  //.trigger('event') - 방아쇠를 당기다라는 뜻. 강제로 뭔가를 시킬 때 활용
  // 3. 새로고침을 하면 5번째가 먼저 보여지는 오류 해결
  tabAnchor.eq(0).trigger('click');
  
  

});

