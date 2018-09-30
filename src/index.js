module.exports = function solveEquation(equation) {
  var a, b, c, delta, x1, x2 = null;
  var arr = equation.split(' ');
  arr = arr.filter((x) => x !== "*");
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "x^2") {
      a = Number(arr[i - 1]);
    } else if (arr[i] == "x") {
      
      if (arr[i - 2] == "-") {
        b = -Number(arr[i - 1]);
      } else {
        b = Number(arr[i - 1]);
      };
      if (arr[i + 1] == "-") {
        c = -Number(arr[i + 2]);
      } else {
        c = Nubmer(arr[i + 2]);
      }
    }
  }
  
  delta = b * b - 4 * a * c;
  x1 = Math.round((-b + Math.sqrt(delta)) / (a * 2));
  x2 = Math.round((-b - Math.sqrt(delta)) / (a * 2));
  return [x1, x2].sort((a, b) => a - b);
}