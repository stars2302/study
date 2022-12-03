var $button = $('.gallery a'),
    $target = $('#lightbox-overlay'),
    $targetImg = $target.find('img');

// $button 클릭하면
$button.click(function(e){
  e.preventDefault();
  // 변수명 newImg 에 속성을 저장.
  var newImg = $(this).find('img').attr("data-lightbox");
  // $target에 클래스명 visible 추가/제거
  $target.addClass('visible');
  // $targetImg 에 src 속성값 채우기.
  $targetImg.attr('src',newImg);
});

$target.click(function(){
  $target.removeClass('visible');
})


