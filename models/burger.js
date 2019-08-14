var orm = require("../config/orm")

var burger = {
    all: function (cb) {
        orm.all("burgers", function (res) {
            cb(res)
        });
    },

    insert: function (val, cb) {
        orm.insert("burgers", "burger_name", val, function (res) {
            cb(res);
        });
    },

    update: function (col, conditional, cb) {
        orm.update("burgers", col, conditional, function (res) {
            cb(res)
        })
    }
};

module.exports = burger;
