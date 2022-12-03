$(function(){
  var $aside = $('aside') ,
      $button = $aside.find('button'), //부모부터 변수로 잡아 그 변수를 활용하면 load시간을 줄여 향상시킬 수 있음.
      $duration = 300;

  // button을 클릭하면 aside가 나온다.
  $button.click(function(){
    // $aside.stop().animate({left:0},$duration);
    // 한번 클릭해서 aside가 나오면 끝임....

    // A.addClass('b c'); A.removeClass('b');
    // A.toggleClass('b'); -> class 'b'가 있으면 제거, 없으면 추가해주는 똑띠한 친구
    // A.hasClass('b'); -> 조건문에서만 사용. a요소에 b클래스가 있으면 true, 없으면 false
    $aside.toggleClass('open');
    if($aside.hasClass('open')) {
      $button.find('img').attr('src','img/btn_close.png')
    }else {
      $button.find('img').attr('src','img/btn_open.png')
    }
    
    // attr : 속성변경하기, 속성의 값을 반환하기
    // var c = A.attr('b') -> a라는 요소의 b라는 속성의 값을 변수명 c에 저장.

    // transition: GPU, 비디오카드로 깔짝깔짝
    // j-query .animate: CPU를 사용. 수뇌부까지 깊숙히
    // .animate -> PC는 상관없지만, 저사양의 모바일일 경우 버벅임이 있을 수 있음.
    // 사실 최근엔 많이 발전해서 둘 다 상관없지만 미묘한 차이가 있으니까,.. 유지보수면에도..
    // 결론!! CSS에서 작성하는 것이 편하고 성능도 좋고!
  })
});