const express = require("express");

const router = express.Router();

// @route   GET api/games/test
// @desc    Tests games route
// @access  Public
router.get("/test", (req, res) => {
  res.json({ msg: "Games Works" });
});

// @route   GET api/games/addGame
// @desc    Add game route
// @access  Public
router.post("/addGame", (req, res) => {
  const newGame = {
    gameName: req.body.gameName,
    priceList: req.body.priceList,
    tournament: req.body.tournament,
    chats: req.body.chat
  };

  newGame
    .save()
    .then(newgame => res.json(newgame))
    .catch(err => console.log(err));
});

module.exports = router;
