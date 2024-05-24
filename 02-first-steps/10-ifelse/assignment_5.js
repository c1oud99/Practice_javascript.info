
let message1;

if (login == '직원') {
  message = '안녕하세요.';
} else if (login == '임원') {
  message = '환영합니다.';
} else if (login == '') {
  message = '로그인이 필요합니다.';
} else {
  message = '';
}


// 조건부 연산자 '?'를 사용해 if..else문이 사용된 위의 코드를 변형
let message2 = (login == '직원') ? '안녕하세요.' :
                (login == '임원') ? '환영합니다.' :
                (login == '') ? '로그인이 필요합니다' : '';