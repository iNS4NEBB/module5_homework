let arr = [1, 2 ,3, 1, 2 ,'3'];

let theSame = true;
for (let i = 0; i < arr.length; i++){
  for (let j = 0; j < arr.length; j++){
    if (typeof(arr[i]) !== typeof(arr[j])){
      theSame = false;
    }
  }
}
console.log(theSame);