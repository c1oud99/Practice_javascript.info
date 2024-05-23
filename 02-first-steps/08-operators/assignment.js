let x = 2 * 2 + 1;
alert( x ); // 5


let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

alert( a ); // 3
alert( c ); // 0


let d, e, f;

d = e = f = 2 + 2;

alert(d);
alert(e);
alert(f);