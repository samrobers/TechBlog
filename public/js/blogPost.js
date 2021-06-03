const blogFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#blog-title").value.trim();
  const description = document.querySelector("#blog-content").value.trim();
  console.log(title, description);
  if (title && description) {
    const response = await fetch("/api/users/newblog", {
      method: "POST",
      body: JSON.stringify({ title, description }),
      headers: { "Content-Type": "application/json" },
    });
    document.location.replace("/");
  } else {
    console.log("the information is not being grabbed");
  }
};
document
  .querySelector(".blog-form")
  .addEventListener("submit", blogFormHandler);
