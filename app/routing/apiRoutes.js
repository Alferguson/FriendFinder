var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = require("../server.js");
module.exports = function(app) {
    
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        var newFriend = req.body;
        console.log(newFriend);
        res.json(newFriend);
    });
}    