function merge(S1, S2) {
  //your code here
  let word = "";
  let left = 0;
  let right = 0;

  while (left < S1.length || right < S2.length) {
    if (left < S1.length) {
      word += S1[left++];
    }
    if (right < S2.length){
        word += S2[right++]
    }
  }
  return word;
}

console.log(merge("Hello", "Bye"));
