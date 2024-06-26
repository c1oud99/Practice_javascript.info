/*------------------------------------------------*/

result = value1 && value2 && value3;

/*------------------------------------------------*/

// 첫 번째 피연산자가 truthy이면,
// AND는 두 번째 피연산자를 반환
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

// 첫 번째 피연산자가 falsy이면,
// AND는 첫 번째 피연산자를 반환하고, 두 번째 피연산자는 무시
alert( null && 5 ); // null
alert( 0 && "아무거나 와도 상관없습니다." ); // 0

/*------------------------------------------------*/

alert( 1 && 2 && null && 3 ); // null

/*------------------------------------------------*/

alert( 1 && 2 && 3 ); // 마지막 값, 3

/*------------------------------------------------*/