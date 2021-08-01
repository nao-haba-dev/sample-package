var util = {};

/**
 * 子クラスのプロトタイプに親クラスのプロトタイプを継承
 * 関数内に指定された変数がなければプロトタイプを遡る
 * @param {*} child
 * @param {*} parent
 */
util.inherits = function (child, parent) {
  // 継承先のプロトタイプに継承元のプロトタイプを指定
  child.prototype = parent.prototype;

  // 子クラス親クラスのコンストラクタを保持
  child.prototype.constructor = parent;
};

// 子クラスのインスタンスからプロトタイプを取得
util.base = function (self, ...args) {
  // インスタンスからプロトタイプを取得
  var prototype = Object.getPrototypeOf(self);
  prototype.constructor.apply(self, args);
};

// var Dog = function () {
//   util.base(this);
// };
// util.inherits(Dog, Animal);
