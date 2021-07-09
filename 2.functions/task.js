// Задание 1
function getArrayParams(arr) {
  let avg;
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  for (let i = 0; i<arr.length; i++){
    if(arr[i]>max){
      max = arr[i];
    };
    if(arr[i]<min){
      min = arr[i]
    }
    sum +=arr[i];
    avg = (sum/arr.length).toFixed(2);
   }
    return { min:min, max:max, avg:avg };
}

// Задание 2
function worker(...arr) {
for(let i=0; i < arr.length; i++){
   sum+= arr[i]
  }
  return sum;
};
  
function makeWork(arrOfArr, func) {
  let max

  // Ваш кода
  // for ...
  
  return max
}

// Задание 3
function worker2(arr) {
  let min = Infinity;
  let max = -Infinity;
  for(let i=0; i<arr[0].length; i++){
    if(arr[i]>max){
      max=arr[i]
    };
    if(arr[i]<min){
      min = arr[i]
    };
    max = max - min;
  }
}
makeWork(worker2);
