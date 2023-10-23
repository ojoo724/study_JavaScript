/* 문장과 표현식 */

// 조건부 연산자 (Conditional operator)
const cutOff = 80;

const passChecker = (score) => score > cutOff ? '합격입니다!' : '불합격입니다!';

console.log(passChecker(75));


// Spread 구문
const webPublishing = ['HTML', 'CSS'];
const interactiveWeb = [...webPublishing, 'JavaScript'];

console.log(webPublishing);
console.log(interactiveWeb);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];
console.log(arr3);

const members = ['태호', '종훈', '우재'];
const newObject = { ...members };

console.log(newObject); // {0: "태호", 1: "종훈", 2: "우재"}

const topic = {
  name: '모던 자바스크립트',
  language: 'JavaScript', 
}
const newArray = [...topic]; // TypeError!


// 모던한 프로퍼티 표기법
function sayHi() {
    console.log('Hi!');
}
  
const title = 'codeit';
const birth = 2017;
const job = '프로그래밍 강사';
  
const user = {
    title, 
    birth, 
    job, 
    sayHi,
};
  
console.log(user); // {title: "codeit", birth: 2017, job: "프로그래밍 강사", sayHi: ƒ}

const user2 = {
    firstName: 'Tess',
    lastName: 'Jang',
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  };
  
console.log(user.getFullName()); // Tess Jang

const propertyName = 'birth';
const getJob = () => 'job';

const codeit = {
  ['topic' + 'name']: 'Modern JavaScript',
  [propertyName]: 2017,
  [getJob()]: '프로그래밍 강사',
};

console.log(codeit);


// 구조 분해 Destructuring
// Array Destructuring
const members = ['코딩하는효준', '글쓰는유나', '편집하는민환'];
const [macbook, ipad, coupon] = members;

console.log(macbook); // 코딩하는효준
console.log(ipad); // 글쓰는유나
console.log(coupon); // 편집하는민환

// Object Destructuring
const macbookPro = {
  title: '맥북 프로 16형',
  price: 3690000,
};

const { title, price } = macbookPro;

console.log(title); // 맥북 프로 16형
console.log(price); // 3690000

// Array Destructuring
const members = ['코딩하는효준', '글쓰는유나', undefined, '편집하는민환', '촬영하는재하'];
const [macbook, ipad, airpod = '녹음하는규식', ...coupon] = members;

console.log(macbook); // 코딩하는효준
console.log(ipad); // 글쓰는유나
console.log(airpod); // 녹음하는규식
console.log(coupon); // (2) ["편집하는민환", "촬영하는재하"]

// Object Destructuring
const macbookPro = {
  title: '맥북 프로 16형',
  price: 3690000,
  memory: '16 GB 2667 MHz DDR4',
  storage: '1TB SSD 저장 장치',
};

const { title, price, color = 'silver', ...rest } = macbookPro;

console.log(title); // 맥북 프로 16형
console.log(price); // 3690000
console.log(color); // silver
console.log(rest); // {memory: "16 GB 2667 MHz DDR4", storage: "1TB SSD 저장 장치"}


// 에러와 에러 객체
throw new TypeError('타입 에러가 발생했습니다.');

try {
    // 실행할 코드
} catch (error) {
// 에러 발생 시 동작할 코드
}

try {
    // 실행할 코드
} catch (error) {
    // 에러가 발상했을 때 실행할 코드
} finally {
    // 항상 실행할 코드
}