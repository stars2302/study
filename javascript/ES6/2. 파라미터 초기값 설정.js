// 함수의 파라미터 초기값을 설정할 수 있다!


//prics, tax 2개의 파라미터를 설정. 이때,  tax의 기본값을 0.1로 설정
function calc(price, tax=0.1){
  return price + price*tax;
}


// 2개의 파라미터를 모두 설정한 경우
console.log(calc(1000, 0.5)); //1500, 설정한 그대로 적용되어 계산.


// 1개의 파라미터만 설정한 경우
console.log(calc(1000));//1100, 두번째 파라미터는 기본값인 0.1이 적용되어 계산





//주의사항!!
function calc2(price, tax){
  return price + price*tax;
}

console.log(calc2(1000));//NaN, 오류. 초기값없이 파라미터를 모두 설정하지 않으면 오류임




//실험정신!
function calc3(a,b=500,c){
  return a+b+c;
}


//a,c를 정하고 b를 초기값 그대로 사용하기!

console.log(calc3(100,200)); // NaN, 초기값없는 세번째 파라미터가 정의되지 않아 오류.

console.log(calc3(100,null,300)); // 400, 아예 빈값으로 지정하면 0으로 계산됨.

console.log(calc3(100,undefined,300)); // 900, 찾을 수 없기에 기본값이 정상적으로 적용!!
