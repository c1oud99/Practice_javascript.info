
// ==은 0과 false를 구별하지 못 함
alert( 0 == false ); // true


// 피연산자가 빈 문자열일 때도 같은 문제가 발생
alert( '' == false ); // true


// 일치 연산자(strict equality operator) ===를 사용하면 형 변환 없이 값을 비교 가능
alert( 0 === false ); // false, 피연산자의 형이 다르기 때문
