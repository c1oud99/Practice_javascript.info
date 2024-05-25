
alert( alert(1) && alert(2) );
// alert 창에서 1, undefined가 차례대로 출력
// &&는 왼쪽 피연산자를 평가하고(이때 1이 alert 창에 출력) 평가를 즉시 멈춤
// alert(1)의 평가 결과는 undefined로 falsy이기 때문
// && 연산자는 falsy를 만나면 그 값을 출력하고 즉시 연산을 멈춤