function outer() {
  const a = 4;
  function parent() {
    const b = 6;
    function add() {
      console.log(a + b);
    }
    return add;
  }
  return parent();
}

const parentRet1 = outer();
console.dir(parentRet1);
