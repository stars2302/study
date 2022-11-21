$(function () {
  var 
  container = $('.slideshow'),
  slideGroup = container.find('.slideshow_slides'),
  slides = slideGroup.find('a'),
  nav = container.find('.slideshow_nav'),
  indicator = container.find('.indicator'),
  slideCount = slides.length,
  indicatorHtml = '',
  currentIndex = 0,
  duration = 500,
  easing = 'easeInOutExpo',
  interval = 3500,
  timer;

  // 1. 슬라이드를 가로로 배열하자!
  // 1-1. 각 slides 마다 할일을 배정.(left 0% 100% 200% ...씩 밀어줌)
  // 1-2. slides 개수마다 indicator가 늘어남.

  slides.each(function(i){
    var newLeft = i * 100 + '%';
    $(this).css({left: newLeft});

    //<a href="" class="active">1</a>
    indicatorHtml += '<a href="">' + (i+1) + '</a>'
    console.log(indicatorHtml);
  });//each

  //A.text(B); -> a요소에 b내용을 글씨 형태로 추가(또는 교체)
  //A.html(B); -> a요소에 b내용을 html 형태로 추가

  indicator.html(indicatorHtml);


  // 2. 슬라이드 이동 하자!
  function goToSlide (index) {

    // i = 0 -> left : 0;   i = 1 -> left : -100%;
    slideGroup.animate({left : -100*index + '%'}, duration);
    currentIndex = index;

    updateNav();//slide가 처음인지, 마지막인지 검사 + indicator 활성화
  };

  //slide가 처음인지, 마지막인지 검사
  function updateNav(){
    var navPrev = nav.find('.prev');
    var navNext = nav.find('.next');
    // 처음 -> currentIndex = 0 , 이전버튼X (class 추가)
      if(currentIndex == 0){
        navPrev.addClass('disabled');
      }else{
        navPrev.removeClass('disabled');
      }

    // 마지막 -> currentIndex = 3 , 다음버튼X (class 추가)
      if(currentIndex == slideCount - 1){
        navNext.addClass('disabled');
      }else{
        navNext.removeClass('disabled');
      }

      // indicator 활성화하기
      // 1. 일단 다 지우고 원하는 곳에 추가
      indicator.find('a').removeClass('active');
      indicator.find('a').eq(currentIndex).addClass('active');

      // 2. 원하는곳에 추가하고 나머지에 지우기(형제자매일 경우)
      indicator.find('a').eq(currentIndex).addClass('active').siblings().removeClass('active');
  }//updateNav
  

  // 3. indicator 로 이동하기
  indicator.find('a').click(function(e){
    e.preventDefault(); //고유의 a 클릭 이벤트를 없앰(새로고침)
    var idx = $(this).index();
    goToSlide(idx);

    //indicator 활성화되면 색깔 바꾸기
    // indicator.find('a').removeClass('active');
    // $(this).addClass('active');
  });

  // 4. 좌우 버튼으로 이동하기
  nav.find('a').click(function(e){
    e.preventDefault();
    if($(this).hasClass('prev')){
      goToSlide(currentIndex - 1);
    }else{// hasClass'next'
      goToSlide(currentIndex + 1);
    }
  });

  updateNav();//클릭 전 새로고침 직후에 1.처음인지아닌지 2.active 활성화를 하기 위해.

  //자동슬라이드
  function startTimer(){
    //일정시간마다할일 -> setInterval(할일[함수], 시간),clearInteval(이름)
    timer = setInterval(function(){
      var nextIndex = (currentIndex + 1) % slideCount;
      goToSlide(nextIndex);

    },interval); //맨 위에 이름정의 해놨던.
  }
  startTimer();

  // setInterval 멈출 때, clearInterval(이름)
  function stopTimer(){
    clearInterval(timer);
  }
  

  //mouseover,mouseout 보다 둔한...? 이벤트. (조금만 엇나가도 실행되는것을 방지.)
  container.mouseenter(function(){
    stopTimer();
  });
  container.mouseleave(function(){
    startTimer();
  });

});