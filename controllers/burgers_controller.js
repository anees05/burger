var express = require("express");
var router = express.Router();

var burger = require("../models/burger");

router.get("/", function (req, res) {
    burger.all(function (data) {
        res.render("index", { burgers: data })
    })
})

router.put("/api/burgers/:id", function (req, res) {
    var col = "devoured = " + req.body.devoured;
    var condition = "id = " + req.params.id;

    burger.update(col, condition, function (result) {
        res.json({ id: result.insertId })
    })
})

router.post("/api/burgers", function (req, res) {
    burger.insert(req.body.name, function (result) {
        res.json({ id: result.insertId })
    })
})

module.exports = router;