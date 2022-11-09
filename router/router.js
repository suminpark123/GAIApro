const express = require("express");
const { appendFile } = require("gulp-append-prepend");
const router = express.Router();
const mysql = require("mysql2");
// 추가
const path = require("path");

let conn = mysql.createConnection({
  host: "project-db-stu.ddns.net",
  user: "campus_h_1024_6",
  password: "smhrd6",
  port: "3307",
  database: "campus_h_1024_6",
});

//서버체크
// router.get("/", function (request, response) {
//   console.log("노드 서버접속");
// });

//회원가입
router.post("/register-page", function (request, response) {
  // session.request.user.id;

  console.log("회원가입 라우터");
  let repw = request.body.repw;
  let id = request.body.id;
  let pw = request.body.pw;
  let name = request.body.name;
  let birth = request.body.birth;
  let gender = request.body.gender;
  let nick = request.body.nick;

  console.log("아이디 :" + id);
  console.log("비밀번호 :" + pw);
  console.log("비밀번호체크:" + repw, name, birth, gender, nick);

  // conn.connect();

  //db sql문
  let sql = "insert into tbl_member values(?,?,?,?,?,?)"; //?값으로 대체
  conn.query(sql, [id, pw, name, birth, gender, nick], function (err, rows) {
    if (!err) {
      if (pw === repw) {
        console.log("회원가입성공");
        response.redirect("http://localhost:3000/login-page");
      }
    } else {
      console.log("실패" + err);
      console.log("비밀번호를 다시 확인해주세요");
      response.redirect("http://localhost:3000/register-page");
      // alert("비밀번호 다시");
      // response.redirect(alert("다시입력해라"));
      // 리액트 포트번호로 넘겨주기
    }
  });
  // 추가
});

//수민

router.post("/alll", function (req, res) {
  console.log("올라우터");

  //db sql문
  let sql = "select *from tbl_member"; //?값으로 대체
  conn.query(sql, function (err, rows) {
    if (!err) {
      //만약 에러가 안났으면
      console.log("검색성공");
      console.log(rows);
      res.json({ result: rows });
      res.end();
    } else {
      console.log("검색실패" + err);
    }
  });
});

router.post("/alll2", function (req, res) {
  console.log("올라우터");

  //db sql문
  let sql = "select *from tbl_product"; //?값으로 대체
  conn.query(sql, function (err, rows) {
    if (!err) {
      //만약 에러가 안났으면
      console.log("검색성공");
      console.log(rows);
      res.json({ result: rows });
      res.end();
    } else {
      console.log("검색실패" + err);
    }
  });
});

// 찬익 주문배송
router.post("/alll3", function (req, res) {
  console.log("올라우터");

  //db sql문
  let sql = "select * from "; //?값으로 대체
  conn.query(sql, function (err, rows) {
    if (!err) {
      //만약 에러가 안났으면
      console.log("검색성공");
      console.log(rows);
      res.json({ result: rows });
      res.end();
    } else {
      console.log("검색실패" + err);
    }
  });
});

//로그인
router.post("/login-page", function (request, res) {
  console.log("로그인 라우터");

  // console.log(request.body);
  //let repw = request.body.repw;
  let id = request.body.id;
  let pw = request.body.pw;
  // let name = request.body.name;
  // let birth = request.body.birth;
  // let gender = request.body.gender;
  // let nick = request.body.nick;

  console.log("아이디" + id);
  console.log("비번" + pw);

  //세션추가

  // req.session.user = {
  //   id: id,
  //   // nick: nick,
  // };

  //세션완료

  let sql = "select *from tbl_member where id =? and pw =?";
  conn.query(sql, [id, pw], function (err, rows) {
    if (rows.length > 0) {
      console.log("로그인 성공ㄷㄷ");
      //console.log("세션등록성공" + request.session.user.id);
      //window.localStorage.setItem("id", id);
      //추가
      res.json({ result: id });
      //res.redirect("http://localhost:3000/index");
      res.end();
      //추가완
    } else {
      console.log("입력실패" + err);
    }
  });

  // res.redirect("http://localhost:3003/presentation");
});

module.exports = router;
