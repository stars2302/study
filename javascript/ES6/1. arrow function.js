/* 
arrow function을 배우기 전... 궁극적으로 함수를 사용하는 이유!
1. 여러가지 기능을 한 단어로 묶어서 사용할 때(재사용하기 위해)
2. 입력값과 출력값이 존재하는 경우(파라미터와 return을 활용해서)

*/


// arrow function 화살표 함수
// 함수를 축약해 사용하기 위해 만들어짐(+ 직관적인 표현으로 코드 가독성도 높아짐)
// 일반적인 함수의 this와 arrow function의 this는 차이가 있음.
// 일반적인 함수의 this는 함수 자체를 가르키고
// arrow function의 this는 함수 외부의 this와 같음.



// 1. 일반적인 arrow function
const calcSum = (a,b,c)=>{
  return a+b+c;
}
console.log(calcSum(1,10,100)); //결과값 111

// 2. 파라미터가 1개일 경우, () 생략
const calc = a =>{return a*2;}

// 3. {}의 내용이 return 1줄 뿐이라면 {}도 생략
const calc2 = a => a*2;