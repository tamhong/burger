var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req,res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };

        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.insertOne([
        "burger_name"
    ], [
        req.body.burger_name
    ], function(result) {
        res.json({ id: result.insertId});
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function (result) {
        if (result.changedRows == 0) {
            console.log("Someone has eaten this burger already.");
        } else {
            console.log("Yum!");
            res.json(result);

        }
    });
});

module.exports = router;

