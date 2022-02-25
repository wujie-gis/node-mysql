/*
 * @Author: wuj
 * @Date: 2022-02-25 17:13:29
 * @LastEditors: wuj
 * @LastEditTime: 2022-02-25 17:50:31
 * @Description: mysql
 */
var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  port: "3306",
  database: "wuj",
});

connection.connect();

// connection.query(
//   "CREATE DATABASE IF NOT EXISTS wuj DEFAULT CHARSET utf8 COLLATE utf8_general_ci;",
//   function (error, results, fields) {
//     if (error) throw error;
//     console.log("The solution is: ", results, fields);
//   }
// );

// connection.query(
//   `CREATE TABLE  IF NOT EXISTS user(name text,age int)`,
//   function (error, results, fields) {
//     if (error) throw error;
//     console.log("The solution is: ", results);
//   }
// );

connection.query(
  `INSERT INTO user(name,age) VALUES('lisi',18)`,
  function (error, results, fields) {
    if (error) throw error;
    console.log("The solution is: ", results);
  }
);

connection.end();
