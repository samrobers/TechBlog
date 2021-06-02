const router = require("express").Router();
const { User, Blog, Comment } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      include: [{ model: User }, { model: Comment }],
    });

    const blogs = blogData.map((blog) => blog.get({ plain: true }));
    // const userData = req.session.status
    console.log(blogs);

    res.render("homepage", {
      blogs,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", withAuth, (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  } else {
    res.render("login");
  }
});

router.get("/signup", (req, res) => {
  res.render("signup");
});
router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

module.exports = router;
