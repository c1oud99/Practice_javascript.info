
// 일치 연산자 ===를 사용하여 비교
// 두 값의 자료형이 다르기 때문에 일치 비교 시 거짓 반환
alert( null === undefined ); // false


// 동등 연산자 ==를 사용하여 비교
// 특별한 규칙이 적용돼 true가 반환
alert( null == undefined ); // true


alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true, null이 숫자형으로 변환돼 0이 되기 때문


alert( undefined > 0 ); // false (1)
alert( undefined < 0 ); // false (2)
alert( undefined == 0 ); // false (3)