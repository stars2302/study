//continue
//for, while 중 일부조건에서 "예외"시키고 싶을 때!

for(let i=0; i<10; i++){
  if(i % 2 ===0){
    continue;
  }
  console.log(i);
}

//결과(홀수만 log에 남음)
//1
//3
//5
//7
//9

//활용방법! for문 내 중첩을 줄일 수 있음!
function myFunc(bool){
  for(let i=0; i<10; i++){
    //파라미터 bool이 참이면서 짝수가 아닌경우!


    //before
    if(bool === true){
      if(i%2 !== 0){
        console.log(i);
      }
    }



    //after 확실히 가독성 좋아짐.
    if(bool === false){
      continue;
    }

    if(i%2 === 0){
      continue;
    }

    console.log(i);
  }
}