$(function(){
  var $selectEmail = $('.select_domain'),
      $targetInput = $('.email_domain'),
      $count = $('.count'),
      // $unitPrice = parseInt($('.unitprice').attr('data-unitprice')),
      $unit = $('.unitprice').text(), //A.replace(B,C) -> A문자안에 B를 C로 바꾸기.
      $unitPrice = parseInt($unit.replace(',','')),
      $currentNumber = parseInt($count.text()),
      $total = $('.total');

      //parseInt(값) -> 값을 숫자(정수)로 변환
  $selectEmail.change(function(){ //.change(function(){}) -> 값이 바뀔 때 이벤트(input, select태그 이벤트)
    var domain = $(this).val(); // val() -> value를 가져오는 칭구
    $targetInput.val(domain);
  });

  $('span a').click(function(e){
    e.preventDefault();
    if($(this).hasClass('plus')){
      // $currentNumber = $currentNumber + 1;
      $currentNumber += 1;
    } else{
      // $currentNumber = $currentNumber - 1;
      if($currentNumber > 0){
        $currentNumber -= 1;
      }
    }
    // console.log($currentNumber);
    $count.text($currentNumber);
    var semiTotal = $unitPrice * $currentNumber;
    // var total = Number(semiTotal).toLocaleString('en'); //-> 기본속성
    $total.text(semiTotal);

    // jquery number 라이브러리 사용
    $('.number').number(true);

  }); //button click

  $('.number').number(true);
}); //document ready jquery