// typeof 연산자는 인수의 자료형을 반환
// 두 가지 형태의 문법을 지원
// 1. 연산자: typeof x
// 2. 함수: typeof(x)

typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)
