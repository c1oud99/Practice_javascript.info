/*------------------------------------------------*/

result = value1 || value2 || value3;

/*------------------------------------------------*/

alert( 1 || 0 ); // 1 (1은 truthy임)

alert( null || 1 ); // 1 (1은 truthy임)
alert( null || 0 || 1 ); // 1 (1은 truthy임)

alert( undefined || null || 0 ); // 0 (모두 falsy이므로, 마지막 값을 반환함)

/*------------------------------------------------*/

let firstName = "";
let lastName = "";
let nickName = "바이올렛";

alert( firstName || lastName || nickName || "익명"); // 바이올렛

/*------------------------------------------------*/

true || alert("not printed");
false || alert("printed");

/*------------------------------------------------*/
