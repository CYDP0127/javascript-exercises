
// Callback 예제
function add5(a, callback) {
  setTimeout(() => callback(a + 5), 100);
}

add5(10, function (res) { // add5가 입력받는 callback함수 정의 부분
  console.log(res)
});

// Callback Hell
add5(10, res => {
  add5(res, res => {
    add5(res, res => {
      add5(res, res => {
        log(res)
      })
    })
  })
})

//Promise 특징
function add10(a) {
  return new Promise(resolve => setTimeout(() => resolve(a + 10), 100));
} //Promise사용 시 작업이 끝났음을 알려주는 resolve를 인자로 받아들임.

add10(10)
  .then(add10)
  .then(add10)
  .then(add10)
  .then((res) => console.log(res))

// Promise에서의 예외 처리
add10(10)
  .then((res) => {
    throw 'test error';
  })
  .catch((err) => console.log(err));

try {
  add10(10)
    .then((res) => {
      throw 'test error';
    })
} catch(err) {
  console.log(err)
}

// Async/Await
async function f1() {
  const a = await add10(10);
  const b = await add10(a);
  console.log(a, b)
}
f1();

// Async/Await에서의 예외 처리
async function f2() {
  const a = await add10(10).then(res => res);
  const b = await add10(a).catch(err => err);
  console.log(a, b)
}
f2();

async function f3() {
  try {
    const a = await add10(10)
    const b = await add10(a)
    console.log(a, b)
  } catch(err) {
    console.log(err)
  }
}
f3();
