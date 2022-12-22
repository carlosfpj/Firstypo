(()=> {

  type UserID = string | number | boolean;

  let userId: UserID;

  function greeting (userId: UserID, size: Sizes) {
    if (typeof userId === 'string') {
      console.log(`string ${userId.toLocaleLowerCase()}`);
    }
  }

  //Literal Types
  // type Sizes = ['S', 'M', 'L', 'XL', 'XXL'];
  type Sizes = 'S' | 'M' | 'L' | 'XL' | 'XXL';
  // let shirtSize: 'S' | 'M' | 'L' | 'XL' | 'XXL';
  let shirtSize: Sizes;
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';
  shirtSize = 'XXL';
  console.log(shirtSize);
  greeting('1234', 'XL');

})();
