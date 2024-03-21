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
        { username: "Kishor", email: "kishor@test.com" },
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

//To make the code more concise, you can use an arrow function
function getUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { username: "manohar", email: "manohar@test.com" },
        { username: "babban", email: "babban@test.com" },
        { username: "Manish", email: "manish@test.com" },
        { username: "Kishor", email: "kishor@test.com" },
      ]);
    }, 1000);
  });
}

const promise = getUsers();

promise.then((users) => {
  console.log(users);
});

//understand catch method
let success = true;

function getUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve([
          { username: "manohar", email: "manohar@test.com" },
          { username: "babban", email: "babban@test.com" },
          { username: "Manish", email: "manish@test.com" },
          { username: "Kishor", email: "kishor@test.com" },
        ]);
      } else {
        reject("Failed to the user list");
      }
    }, 1000);
  });
}

function onFulfilled(users) {
  console.log(users);
}
function onRejected(error) {
  console.log(error);
}

const promise2 = getUsers();
promise.then(onFulfilled, onRejected);
//Internally, the catch() method invokes the then(undefined, onRejected) method.
//The following example changes the success flag to false to simulate the error scenario:
let success2 = false;

function getUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success2) {
        resolve([
          { username: "manohar", email: "manohar@test.com" },
          { username: "babban", email: "babban@test.com" },
          { username: "Manish", email: "manish@test.com" },
          { username: "Kishor", email: "kishor@test.com" },
        ]);
      } else {
        reject("Failed to the user list");
      }
    }, 1000);
  });
}

const promise4 = getUsers();

promise4.catch((error) => {
  console.log(error);
});
