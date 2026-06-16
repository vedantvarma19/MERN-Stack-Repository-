const express = require('express'); 

const router = express.Router(); 
const authcontroller = require("../controllers/auth-controllers");

// router.get("/", (req, res) => {
//     res.status(200).send('Welcome to Vedant World from Router  ! ');
// });

router.route("/").get(authcontroller.home);

router.route("/register").post(authcontroller.register);
module.exports = router; 