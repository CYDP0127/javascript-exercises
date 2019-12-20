const async = require('async');

function add10(a, callback) { //100ms 이후 10을 더한값을 callback에 입력
  setTimeout(() => callback(null, a + 10), 100);
}

/// async parallel
const tasks = [ // 병렬처리할 함수들 정의
  callback => add10(10, callback),
  callback => add10(10, callback),
  callback => add10(10, callback)
];
async.parallel(tasks, (err, results) => { // 병렬 실행 후 err와 results를 반환
  console.log(err, results);
});


// async waterfall
const tasks = [
  (callback) => add10(10, callback),
  (res, callback) => add10(res, callback), // res는 tasks의 0번째 배열에서 넘겨받은 결과값
  (res, callback) => add10(res, callback)  // res는 tasks의 1번째 배열에서 넘겨받은 결과값
];
async.waterfall(tasks, (err, results) => {
  console.log(err, results); // 최종 결과값 출력
});

// async each
const tasks = [
  add10,
  add10,
  add10,
  add10,
  add10,
];

async.each(tasks, (eachTask, callback) => {
  eachTask(10, (err, result) => {
    console.log(result);
    callback(err);
  })
}, (err) => {
  console.log(err)
});

// async map
async.map(tasks, (each, cb) => {
    each(10, (err, result) => {
      cb(err, result);
    })
}, (err, result) => {
  console.log(err, result);
})

// whilst
let count = 0;
async.whilst(
  (callback) => { callback(null, count < 5) },
  (callback) => {
    count++;
    setTimeout(function() {
      callback(null, count);
    }, 100);
  },
  (err, n) => {
    console.log(err, n);
  }
);

