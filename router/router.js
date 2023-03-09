const express = require("express");
const { appendFile } = require("gulp-append-prepend");
const router = express.Router();
const mysql = require("mysql2");

const path = require("path");

let conn = mysql.createConnection({
  host: "project-db-stu.ddns.net",
  user: "campus_h_1024_6",
  password: "smhrd6",
  port: "3307",
  database: "campus_h_1024_6",
});
router.post("/register-page", function (request, response) {
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

  let sql = "insert into tbl_member values(?,?,?,?,?,?)";
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
    }
  });
});

router.post("/alll", function (req, res) {
  console.log("올라우터");
  let sql = "select * from tbl_member";
  conn.query(sql, function (err, rows) {
    if (!err) {
      console.log("검색성공");
      console.log(rows);
      res.json({ result: rows });
      res.end();
    } else {
      console.log("검색실패" + err);
    }
  });
});
router.post("/review", function (request, response) {
  console.log("리뷰 라우터1");

  let id = request.body.id;
  let review = request.body.review;
  let suproduct = request.body.suproduct;

  console.log("아이디 :" + id, review, suproduct);

  let sql = "insert into tbl_review values(?,?,?)"; //?값으로 대체
  conn.query(sql, [suproduct, id, review], function (err, rows) {
    if (!err) {
      console.log("리뷰디비성공");
    } else {
      console.log("실패" + err);
    }
  });
});

router.post("/review2", function (req, res) {
  console.log("리뷰라우터2");

  let sql = "select p_id from tbl_review";
  conn.query(sql, function (err, rows) {
    if (!err) {
      console.log("검색성공");
      res.json({ result: rows });
      res.end();
    } else {
      console.log("검색실패" + err);
    }
  });
});

router.post("/review3", function (req, res) {
  console.log("리뷰라우터3");
  console.log(req.body.rev);
  let rev = req.body.rev;
  let sql = "select * from tbl_review where p_id=?";
  conn.query(sql, [rev], function (err, rows) {
    if (!err) {
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

  let sql = "select * from tbl_product";
  conn.query(sql, function (err, rows) {
    if (!err) {
      console.log("검색성공");
      console.log(rows);
      res.json({ result: rows });
      res.end();
    } else {
      console.log("검색실패" + err);
    }
  });
});
router.post("/alll3", function (req, res) {
  console.log("올라우터");

  let sql = "select * from tbl_delivery";
  conn.query(sql, function (err, rows) {
    if (!err) {
      console.log("검색성공");
      console.log(rows);
      res.json({ result: rows });
      res.end();
    } else {
      console.log("검색실패" + err);
    }
  });
});
router.post("/login-page", function (request, res) {
  console.log("로그인 라우터");

  let id = request.body.id;
  let pw = request.body.pw;
  console.log("아이디" + id);
  console.log("비번" + pw);

  let sql = "select * from tbl_member where id =? and pw =?";
  conn.query(sql, [id, pw], function (err, rows) {
    if (rows.length > 0) {
      console.log("로그인 성공");
      res.json({ result: id });
      res.end();
    } else {
      console.log("입력실패" + err);
    }
  });
});

router.post("/CheckOut", function (request, response) {
  console.log("배송정보 라우터");
  let o_mem = request.body.o_mem;
  let o_tel = request.body.o_tel;
  let o_adr = request.body.o_adr;
  let o_adr2 = request.body.o_adr2;

  console.log("수령인 :" + o_mem);
  console.log("전화번호 :" + o_tel);
  console.log("배송지:" + o_adr, o_adr2);

  let sql = "insert into tbl_order values(?,?,?,?)";
  conn.query(sql, [o_mem, o_tel, o_adr, o_adr2], function (err, rows) {
    if (!err) {
      console.log("정보 입력 성공");
    } else {
      console.log("실패" + err);
      console.log("정보를 다시 확인해주세요");
    }
  });
});

module.exports = router;
