/* AND와 OR의 연산자의 연산 우선순위 */
console.log(null && undefined);  // null
console.log(0 || true);  // true
console.log('0' && NaN);  //NaN
console.log({} || 123);  // {}

function print(value){
    const message = value || '빈 값';

    console.log(message);
}

//print();
//print('JavaScript');


/* null 병합 연산자 ?? */
// : 물음표 두 개(??)를 사용해서 null 혹은 undefined 값을 가려내는 연산자

const example1 = null ?? 'I';
const example2 = undefined ?? 'love';
const example3 = 'Codeit' ?? 'JavaScript';

console.log(example1, example2, example3);  // I Love Codeit


/* 변수와 스코프 */
