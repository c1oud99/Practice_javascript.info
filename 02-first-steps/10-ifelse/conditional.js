/*------------------------------------------------*/

let accessAllowed;
let age = prompt('나이를 입력해 주세요.', '');

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

alert(accessAllowed);

/*------------------------------------------------*/

let result = condition ? value1 : value2;

/*------------------------------------------------*/

let accessAllowed = (age > 18) ? true : false;

/*------------------------------------------------*/

// 연산자 우선순위 규칙에 따라, 비교 연산 'age > 18'이 먼저 실행
// (조건문을 괄호로 감쌀 필요가 없음)
let accessAllowed = age > 18 ? true : false;

// 동일하게 동작함
let accessAllowed = age > 18;

/*------------------------------------------------*/
