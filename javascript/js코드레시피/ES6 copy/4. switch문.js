//정확한 case/답,조건/가 여러개 있는 경우! 
//()안 내용과 case의 조건을 비교하는 것. 이때 데이터타입까지 비교함 a===b

/*
** 기본구조
  switch (비교할 값){
    case '답1' : 답1과 일치할 경우 실행될 코드; break;
    case '답2' : 답2과 일치할 경우 실행될 코드; break;
    default: 기본으로 실행될 코드(모든 case와 일치하지 않을 경우 실행); break;
  }
*/

const answer = 'apple';

switch (answer){
  case 'apple': alert('사과입니다'); break;
  case 'orange': alert('오렌지입니다'); break;
  default: alert('과일입니다'); break;
}


//case가 끝날때마다 break; 꼭 적어주기!! 끝맺음 역할을 함. 생략시 해당 case와 일치해도 실행코드가 작동되지 않고 바로 다음 case의 실행코드가 작동됨. 걍 엉킴그냥 꼬여

switch ('apple'){
  case 'cherry': '체리입니다';break;
  case 'apple': '사과입니다';
  case 'orange': '오렌지입니다';break; //실행
  case 'apple': '사과입니다2';break;
  default: '과일입니다';break;
}


