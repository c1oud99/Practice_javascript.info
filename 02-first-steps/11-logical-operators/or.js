/*------------------------------------------------*/

result = a || b;

/*------------------------------------------------*/

alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false

/*------------------------------------------------*/

if (1 || 0) { // if( true || false ) 와 동일하게 동작
    alert( 'truthy!' );
}

/*------------------------------------------------*/

let hour = 9;

if (hour < 10 || hour > 18) {
  alert( '영업시간이 아닙니다.' );
}

/*------------------------------------------------*/

let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
  alert( '영업시간이 아닙니다.' ); // 주말이기 때문임
}

/*------------------------------------------------*/



/*------------------------------------------------*/



/*------------------------------------------------*/