Array.prototype.siska = function (callback) {
  const me = this;

  r = [];

  for (let el of me.values()) {
    r.push(callback(el));
  }

  return r;
};

String.length = "Пошел нахер";

const res = [1, 3, 4].siska((el) => el * 3);
