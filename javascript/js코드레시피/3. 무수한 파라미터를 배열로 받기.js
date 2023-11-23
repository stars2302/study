//파라미터의 개수를 제한하지 않고(정하지 않고) 무한대로 적을 수 있는 방법!

function calcSum(...item){
  let result=0;
  for(const val of item){
    result+=val;
  }
  return result;
}


//파라미터의 개수가 정해지지 않았기에 몇개를 사용하던 오류없음!
calcSum(10,20,30); //60
calcSum(1,10,30,440,555,20000); //21036