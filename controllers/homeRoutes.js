const router = require("express").Router();
const { User, Blog, Comment } = require("../models");
const withAuth = require("../utils/auth");
const moment = require("moment");

router.get("/", async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      include: [{ model: User }, { model: Comment }],
    });

    const blogs = blogData.map((blog) => {
      blog = blog.get({ plain: true });
      console.log(blog);
      blog.postedDate = moment(blog.postedDate).format("MM/DD/YYYY");

      return blog;
    });
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

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  } else {
    res.render("login");
  }
});

router.get("/signup", (req, res) => {
  res.render("signup");
});
router.get("/dashboard", (req, res) => {
  console.log(req.session);
  if (!req.session.logged_in) {
    res.redirect("/");
    return;
  } else {
    res.render("dashboard", { logged_in: req.session.logged_in });
  }
});

module.exports = router;
