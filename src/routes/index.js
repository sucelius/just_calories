const router = require("express").Router();
const renderTemplate = require("../lib/renderTemplate");
const Main = require("../views/Main");
const Login = require("../views/Login");
const Registraton = require("../views/Registration");
const bcrypt = require('bcrypt')
const {User, Product} = require('../../db/models')
const Personal = require('../views/Personal')

router.get("/", (req, res) => {
    const username = req.session.user?.name;
  console.log(res.body);
  renderTemplate(Main, {username}, res);
});

//signin page
router.get("/signin", (req, res) => {
    
  renderTemplate(Login, {}, res);
});

router.post("/signin", async (req, res) => {
    const { name, password } = req.body;
    console.log( name, password )
    const user = await User.findOne({ where: { name: name } });
  
    const validation = await bcrypt.compare(password, user.password);
    if(validation){
        req.session.user = { id: user.id, name: user.name };
        console.log(user.id,user.name)
        res.redirect("/");
    }else {
        res.redirect("/signin")
    }
    
  });

//signup page
router.get("/signup", (req, res) => {
  renderTemplate(Registraton, {}, res);
});

router.post("/signup", async (req, res) => {
  const { name, password, height, weight, age, gender } = req.body;
  // console.log(name, password, height, weight, age, gender);

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name: name,
      password: hashedPassword,
      height: height,
      weight: weight,
      age: age,
      gender: gender,
    });

    req.session.user = { id: user.id, name: user.name }; // создай куку  и запиши в БД session storage
    res.redirect("/");
  } catch (error) {
    console.log("Error =>>> ", error);
  }
});


router.get("/signout", async (req, res, next) => {
    req.session.destroy((err) => {
      if (err) return next(err);
      res.clearCookie("sid");
      res.redirect("/");
    });
  });



//Отправляем дату в базу

router.post("/data", async (req, res) => {
  const data = req.body
  // data.map((el) => console.log(el))
    data.map(async (element) => {
    await Product.create({
      name: element.name,
      calories: Math.round(element.calories),
      fat: Math.round(element.fat_total_g),
      protein: Math.round(element.protein_g),
      carbohydrates: Math.round(element.carbohydrates_total_g),
      size: Math.round(element.serving_size_g),
      user_id:req.session.user.id
    })
  })

  res.sendStatus(200)

});  




router.get("/personal",  async (req, res) => {
  const username = req.session.user?.name;
  
  const user = await User.findOne({ where: { id: req.session.user.id },
    raw: true,
    nest: true,
   });

  const userProducts = await Product.findAll({
    where: {user_id:req.session.user.id},
    raw: true,
    nest: true,
  })

  //2445 
  // console.log(userProducts)

  renderTemplate(Personal, {username , userProducts, user}, res)


});
  

module.exports = router;
