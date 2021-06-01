// const { response } = require("express");

// const { response } = require("express");

const signupFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector("#email-signup").value.trim();
  const name = document.querySelector("#name-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  console.log(email, password);
  if (email && password && name) {
    const response = await fetch("/api/users/signup", {
      method: "POST",
      body: JSON.stringify({ email, password, name }),
      headers: { "Content-Type": "application/json" },
    });
    document.location.replace("/");
  } else {
    console.log("the information is not being grabbed");
  }
};
document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);

// async function newFormHandler(event) {
//   event.preventDefault();
//   const dish_name = document.querySelector("#dish_name").value;
//   const description = document.querySelector("#description").value;
//   const guest_name = document.querySelector("#guest_name").value;
//   // The following is a ternary operator. It checks to see if has_nuts is checked. If it is, it will return true, otherwise, it will return false.
//   const has_nuts = document.querySelector("#has_nuts:checked") ? true : false;
//   // Send fetch request to add a new dish
//   const response = await fetch(`/api/dish`, {
//     method: "POST",
//     body: JSON.stringify({
//       dish_name,
//       description,
//       guest_name,
//       has_nuts,
//     }),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   //if the dish is added, the 'all' template will be rerendered
//   if (response.ok) {
//     document.location.replace("/");
//   } else {
//     alert("Failed to add dish");
//   }
// }

// document
//   .querySelector(".new-dish-form")
//   .addEventListener("submit", newFormHandler);

//**Did not work, added href onto signup button to change the page **/
// const signupButtonHandler = async (event) => {
//   // const signBtn = document.getElementById("renderSignUp")

//   if (event.target.hasAttribute("renderSignUp")) {
//     const response = await fetch(`/signup`, {
//       method: "GET",
//     });

//     if (response.ok) {
//       document.location.replace("/signup");
//     } else {
//       alert("Failed to load signup");
//     }
//   }
// };
// document
//   .querySelector("#renderSignUp")
//   .addEventListener("onclick", signupButtonHandler);

// document.querySelector("#renderSignUp").addEventListener("click", () => {
//   fetch("/signup", {
//     method: "GET",
//   }).then((response) => {
//     console.log(response);
//   });
// });
// document.getElementById("renderSignUp").addEventListener("click", () => {
//   fetch("/signup", {
//     method: "GET",
//   }).then((response) => {
//     console.log(response);
//   });
// });
