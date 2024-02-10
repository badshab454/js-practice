function ReverseSort(str) {
  //your code here
  let arr = str.split("");
  let sortedArr = arr.sort();
  let decendingArr = sortedArr.reverse(); 
  return decendingArr.join("");
}

console.log(ReverseSort("geeks"));