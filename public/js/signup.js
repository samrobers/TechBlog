const loginFormHandler = async (event) => {
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

    console.log(response);
  }
};

document
  .querySelector(".signup-form")
  .addEventListener("submit", loginFormHandler);
