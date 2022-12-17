const mysql = require('mysql'); 

module.exports = function () {
    return {
      init: function () {
        return mysql.createConnection({
          host: '124.58.110.110',
          port: '3306',
          user: 'osu',
          password: 'skchqhdpdy0113',
          database: 'redstar'
        })
      },
      
      db_open: function (con) {
        con.connect(function (err) {
          if (err) {
            console.error('mysql connection error :' + err);
          } else {
            console.info('mysql is connected successfully.');
          }
        })
      }
    }
  };