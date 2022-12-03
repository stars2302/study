$(function () {
  var tabAnchor = $('.tabs-nav li a'),
      tabPanel = $('.tabs-panel');


  //링크를 클릭하면 할 일
  tabAnchor.click(function(e){
    e.preventDefault();

    // 클릭한 a태그만 적용
    // $(this).addClass('active').siblings().removeClass('active'); -> 형제가 없기 때문에 사용할 수 없음
    tabAnchor.removeClass('active');
    $(this).addClass('active');

    // 모든 화면을 가리고
    tabPanel.hide();
    //해당되는 화면'만' 보이게
    var $target = $(this).attr('href');
    $($target).show();
  }); 

  
  

});

