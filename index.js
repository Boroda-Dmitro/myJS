// function changeEven(numbers, value) {
//     // Change code below this line
//     const newArray = [];
//     numbers.forEach( number => {
//       if (number % 2 === 0) {
//         newArray.push(number + value);
//       } else {
//       newArray.push(number)}
//     })
//     return newArray;
//     // Change code above this line
//   }
  

//   console.log(changeEven([1, 2, 3, 4, 5], 10));
// const qwe = "hello1"

// console.log(qwe.length);

const array = [
    {
      name: "Moore Hensley",
      email: "moorehensley@indexia.com",
      eyeColor: "blue",
      friends: ["Sharron Pace"],
      isActive: false,
      balance: 2811,
      gender: "male",
      age: 37
    },
    {
      name: "Sharlene Bush",
      email: "sharlenebush@tubesys.com",
      eyeColor: "blue",
      friends: ["Briana Decker", "Sharron Pace"],
      isActive: true,
      balance: 3821,
      gender: "female",
      age: 34
    },
    {
      name: "Ross Vazquez",
      email: "rossvazquez@xinware.com",
      eyeColor: "green",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
      isActive: false,
      balance: 3793,
      gender: "male",
      age: 24
    },
    {
      name: "Elma Head",
      email: "elmahead@omatom.com",
      eyeColor: "green",
      friends: ["Goldie Gentry", "Aisha Tran"],
      isActive: true,
      balance: 2278,
      gender: "female",
      age: 21
    },
    {
      name: "Carey Barr",
      email: "careybarr@nurali.com",
      eyeColor: "blue",
      friends: ["Jordan Sampson", "Eddie Strong"],
      isActive: true,
      balance: 3951,
      gender: "male",
      age: 27
    },
    {
      name: "Blackburn Dotson",
      email: "blackburndotson@furnigeer.com",
      eyeColor: "brown",
      friends: ["Jacklyn Lucas", "Linda Chapman"],
      isActive: false,
      balance: 1498,
      gender: "male",
      age: 38
    },
    {
      name: "Sheree Anthony",
      email: "shereeanthony@kog.com",
      eyeColor: "brown",
      friends: ["Goldie Gentry", "Briana Decker"],
      isActive: true,
      balance: 2764,
      gender: "female",
      age: 39
    }
  ]

//   const getUsersWithFriend = (users, friendName) => {
//     return users.filter(user => user.friends.includes(friendName))
//  };

//  console.log(getUsersWithFriend(array, "Briana Decker"));

// const getFriends = (users = []) => {
//     return users.flatMap(user => user.friends).filter((user, i, array) => array.indexOf(user) === i)
//     // console.log(allFriends);
//     // return allFriends.filter((user, i, array) => array.indexOf(user) === i)
//  };

//  console.log(getFriends(array));

// const getUserWithEmail = (users, email) => {
//     return users.find(user => user.email === email);
//  };

//  console.log(getUserWithEmail(array, "shereeanthony@kog.com"));