const router = require("express").Router();
const { User, Blog } = require("../../models");

router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/signup", async (req, res) => {
  try {
    const userData = await User.create(req.body);
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/newblog", async (req, res) => {
  // try {
    console.log("this is the reqbody", req.body);
    req.body.user_id = req.session.user_id;
    const blogData = await Blog.create(req.body);
    console.log("this is the blogData", blogData);
    req.session.save(() => {
      req.session.title = blogData.title;
      req.session.description = blogData.description;
      res.json({ blog: blogData, message: "You made a Post" });
    });
  // } catch (err) {
  //   res.status(400).json(err);
  // }
});

router.get("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.redirect("/");
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
// router.post("/", async (req, res) => {
//   // create a new category
//   try {
//     const categoryData = await Category.create(req.body);
//     res.status(200).json(categoryData);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });
