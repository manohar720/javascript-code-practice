//javascript is a synchronous programing language .However callback fn enable to transform into asynchronous.
//Promise  in JavaScript help to getout of Callback hell

//Promise has three methods available to it ( then , catch , & finally )
function getUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { username: "manohar", email: "manohar@test.com" },
        { username: "babban", email: "babban@test.com" },
        { username: "Manish", email: "manish@test.com" },
      ]);
    }, 1000);
  });
}

function onFulfilled(users) {
  console.log(users);
}

const promise1 = getUsers();
promise1.then(onFulfilled);
//then() method accepts two callback functions: onFulfilled and onRejected.
//The then() method calls the onFulfilled() with a value,

//if the promise is fulfilled or the onRejected() with an error if the promise is rejected.
