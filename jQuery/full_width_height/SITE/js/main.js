$(function(){
  var container = $('.full-bg');
  $(window).resize(function(){ //window의 크기가 바뀌면~
    var currentWindow = $(this),
        windowWidth = currentWindow.width(),
        windowHeight = currentWindow.height(),
        browserRatio = windowWidth/windowHeight,
        imageRatio = 854/480;
    
    if(imageRatio > browserRatio){ //이미지 비율이 높을 경우
      container.css({
        height: '100%',
        width: windowHeight * imageRatio, // 현재 윈도우 높이 X 원래 이미지 비율
        left: (windowWidth - windowHeight * imageRatio)/2, //작은거 - 큰거 = -00 (음수로 나오도록..!) (브라우저 너비 - 이미지 너비)/2
        top: 0
      });
    } else{ //이미지 비율이 낮을 경우
      container.css({
        height: windowWidth/imageRatio, // 이미지너비 / 이미지 비율
        width: '100%',
        left: 0,
        top: (windowHeight - windowWidth/imageRatio)/2, //(브라우저 높이-이미지높이)/2
      });
    }


  }); // resize
  
  // 웹 페이지가 열리자마자 이벤트를 강제로 실행
  $(window).trigger('resize'); 




}); //document ready