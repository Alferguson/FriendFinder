var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = require("../server.js");

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "survey.html"));
});

app.get("/api/:apiTable?", function(req, res) {
  var chosen = req.params.apiTable;

  if (chosen) {
    console.log(chosen);

    for (var i = 0; i < apiTable.length; i++) {
      if (chosen === apiTable[i].routeName) {
        return res.json(apiTable[i]);
      }
    }

    return res.json(false);
  }
  return res.json(apiTable);
});
