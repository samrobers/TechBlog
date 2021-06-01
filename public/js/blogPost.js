const blogFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#blog-title").value.trim();
  const content = document.querySelector("#blog-content").value.trim();
  console.log(title, content);
  if (title && content) {
    const response = await fetch("/api/users/dashboard", {
      method: "POST",
      body: JSON.stringify({ title, content }),
      headers: { "Content-Type": "application/json" },
    });
    document.location.replace("/");
  } else {
    console.log("the information is not being grabbed");
  }
};
document
  .querySelector(".submit-blog")
  .addEventListener("submit", blogFormHandler);
