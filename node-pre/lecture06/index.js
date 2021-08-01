const MAX_COUNT = 10;

// 要素を追加
const write = (value) => {
  $("#result").append(`<span class="badge">${value}</span>`);
};

// 0~9まで１秒毎にカウント
const btnExec1_onclick = () => {
  const start = new Date().getTime();
  var now = null;
  var n = 0;
  do {
    now = new Date().getTime();
    time = now - (start + n * 1000);
    if (time > 1000) {
      write(++n);
    }
  } while (n < MAX_COUNT);
};

const btnExec2_onclick = () => {
  var n = 0;
  const callback = () => {
    window.setTimeout(() => {
      write(++n);
      if (n < MAX_COUNT) {
        callback();
      }
    }, 1000);
  };
  callback();
};

// 要素を削除
const btnClear_onclick = () => {
  $("#result").empty();
};

$(document).ready(() => {
  $("#btn_exec_1").on("click", btnExec1_onclick);
  $("#btn_exec_2").on("click", btnExec2_onclick);
  $("#btn_clear").on("click", btnClear_onclick);
});
