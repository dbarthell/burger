var orm = require("/Users/dbarthell/burger/config/orm.js")

var burger = {
    selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    insertOne: function(vals, cb) {
      orm.insertOne(vals, function(res) {
        cb(res);
      });
    },
    updateOne: function(vals, cb) {
      orm.updateOne(vals, function(res) {
        cb(res);
      });
    }
  };

module.exports = burger;
