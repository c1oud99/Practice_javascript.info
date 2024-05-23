// 숫자에는 아무런 영향을 미치지 않음
let x = 1;
alert( +x );    // 1

let y = -2;
alert( +y );    // -2

// 숫자형이 아닌 피연산자는 숫자형으로 변화
alert( +true ); // 1
alert( +'' );   // 0


let apples1 = '2';
let oranges1 = '3';
alert( apples1 + oranges1 );  // 23, 이항 덧셈 연산자는 문자열을 연결



let apples2 = '2';
let oranges2 = '3';

// 이항 덧셈 연산자가 적용되기 전에, 두 피연산자는 숫자형으로 변화
alert( +apples2 + +oranges2 );  // 5
// alert( Number(apples) + Number(oranges) ); // 5