'use strict';
function solveEquation(a, b, c) {
  let arr = [];
  let D = b**2-4*a*c;
  let x;
  let x1;
  let x2;
  arr.push(x1,x2);
  if (D>0) {
     arr[0] = (-b + Math.sqrt(D))/(2*a);
     arr[1] = (-b - Math.sqrt(D))/(2*a);
  };
  if (D===0){
    return [x=-b/(2*a)];
  };
  if (D<0){
    return [];
  }
  return arr; // array
};


function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
