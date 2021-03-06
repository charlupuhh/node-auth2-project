const router = require("express").Router();

const Users = require("./usersModel.js");

router.get("/", (req, res) => {
  Users.find()
    .then(users => {
        res.status(200).json({data:users, jwt:req.decodedToken});
    })
    .catch(err => res.send(err));
});

module.exports = router; 