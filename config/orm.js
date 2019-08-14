var connection = require("./connection")

var orm = {
  all: function (table, cb) {
    var queryString = "SELECT * FROM " + table + ";";
    connection.query(queryString, function (err, res) {
      if (err) throw err;
      cb(res);
    });
  },

  insert: function (table, col, val, cb) {
    var queryString = "INSERT INTO " + table + " (" + col + ") VALUES (?)";
    connection.query(queryString, val, function (err, res) {
      if (err) throw err;
      cb(res);
    })
  },

  update: function (table, col, conditional, cb) {
    var queryString = "UPDATE " + table + " SET " + col + " WHERE " + conditional;
    connection.query(queryStr, function (err, res) {
      if (err) throw err;
      cb(res)
    })
  }
};

module.exports = orm;