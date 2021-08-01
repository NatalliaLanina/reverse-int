module.exports = function reverse (n) {
  let num = Math.abs(n);
  let rev = num.toString().split('').reverse().join('');
  let result = Number(rev);
  return result;
};
