var p1 = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("p1 complete !");
  }, Math.random() * 3000);
});

var p2 = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("p2 complete !");
  }, Math.random() * 3000);
});

// 全てのデータが揃ったら実行
Promise.all([p1, p2]).then(
  (value) => {
    console.log(value);
  },
  (reason) => {
    console.log(reasom);
  }
);

// 思い処理でタイムアウト判定する場合などで使う
Promise.race([p1, p2]).then(
  (value) => {
    console.log(value);
  },
  (reason) => {
    console.log(reasom);
  }
);
