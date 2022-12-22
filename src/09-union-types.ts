(()=> {
  let userId: string | number;
  userId = 1235.456;
  // userId = '123.456';
  const hola = false

  function greeting(mytext: string | number) {
    if(typeof mytext === 'string') {
      console.log(`string ${mytext.toLocaleLowerCase()}`);
    } else {
      console.log(`number ${mytext.toFixed(2)}`);
    }
  }
  greeting('hola');
  greeting(userId);
})();
