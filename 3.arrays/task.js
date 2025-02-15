function compareArrays(arr1, arr2) {
  let result;
  if(arr1.length === arr2.length && Array.isArray(arr1) === true &&Array.isArray(arr2) === true){
    result = Array.from(arr1).every((item,index)=>{item = item === arr2[index];
    return item})
  } else result = false;
  return result; // boolean
}


function advancedFilter(arr) {
  let resultArr = (arr.filter((item)=> item>0).filter((item)=>item % 3 === 0).map((item) => item * 10));
  return resultArr; // array
}
