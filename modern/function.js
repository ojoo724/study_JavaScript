// 함수 선언
function sayHello() {
    console.log('Hello');
}

 // 함수 표현식
const sayHi = function () {
    console.log('Hi!');
}; 

// 변수에 할당해서 활용
const printJS = function () {
    console.log('JavaScript');
};

// 객체의 메소드로 활용
const codeit = {
    printTitle: function () {
        console.log('Codeit');
    }
}

// 콜백 함수로 활용
myBtn.addEventListener('click', function () {
    console.log('button is clicked!');
});

// 고차 함수로 활용
function myFunction() {
    return function () {
        console.log('Hi!?');
    };
};
  
//파라미터의 기본값
function sayName(name = 'faker') {
    console.log(`Hi! ${name}`);
}

sayName('Zeus'); // Hi! Zeus
sayName(); // Hi! faker

//arguments 객체
function printArguments() {
    // arguments 객체의 요소들을 하나씩 출력
    for (const arg of arguments) {
        console.log(arg); 
    }
}

printArguments('Young', 'Mark', 'Koby');
  
// Rest Parameter
function printArguments(...args) {
    // args 객체의 요소들을 하나씩 출력
    for (const arg of args) {
      console.log(arg); 
    }
}
  
printArguments('Young', 'Mark', 'Koby');
  
function printRankingList(first, second, ...others) {
    console.log('코드잇 레이스 최종 결과');
    console.log(`우승: ${first}`);
    console.log(`준우승: ${second}`);
    for (const arg of others) {
      console.log(`참가자: ${arg}`);
    }
  }
  
  printRankingList('Tommy', 'Jerry', 'Suri', 'Sunny', 'Jack');
  

// 화살표 함수 정의
const getTwice2 = (number) => {
    return number * 2;
};
  
// 콜백 함수로 활용
myBtn.addEventListener('click', () => {
console.log('button is clicked!');
});

// 1. 함수의 파라미터가 하나 뿐일 때
const getTwice3 = (number) => {
    return number * 2;
  };
  
  // 파라미터를 감싸는 소괄호 생략 가능
  const getTwice4 = number => {
    return number * 2;
  };
  
  // 2. 함수 동작 부분이 return문만 있을 때
  const sum1 = (a, b) => {
    return a + b;
  };
  
  // return문과 중괄호 생략 가능
  const sum2 = (a, b) => a + b;
  
  const user = {
    firstName: 'Tess',
    lastName: 'Jang',
    getFullName: function () {
      return `${this.firstName} ${this.lastName}`;
    },
  };
  
  console.log(user.getFullName()); // getFullName 안에서의 this는 getFullName을 호출한 user객체가 담긴다!
  