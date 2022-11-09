const express = require("express");
const app = express();
const router = require("./router/router.js");
const body_parser = require("body-parser");
//const { AppsSharp } = require("@mui/icons-material");
const path = require("path");
//cors : 외부에 있는 정보들을 주고 받을 때 필수적으로 등록해야하는 모듈
const cors = require("cors");
// 배포후 추가
// app.use(express.static(path.join(__dirname, "_GAIAPRO전", "build")));
const session = require("express-session");
// const session_mysql_save = require("express-mysql-session");
app.use(express.json());
app.use(cors());
// let dbInfo = {
//   //본인 DB정보채우기
//   host: "127.0.0.1",
//   user: "root",
//   password: "123456",
//   port: "3306",
//   database: "gaia_DB",
// };
// let SMS = new session_mysql_save(dbInfo);
// app.use(
//   session({
//     secret: "gaia",
//     resave: false,
//     saveUninitializedt: true,
//     store: SMS,
//   })
// );
app.use(express.static("public"));
app.use(body_parser.urlencoded({ extended: false }));
app.use(router);
app.listen(3007);
