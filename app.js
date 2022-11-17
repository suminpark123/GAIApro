const express = require("express");
const app = express();
const router = require("./router/router.js");
const body_parser = require("body-parser");
const path = require("path");
const cors = require("cors");
const session = require("express-session");

app.use(express.json());
app.use(cors());
app.use(express.static("public"));
app.use(body_parser.urlencoded({ extended: false }));
app.use(router);
app.listen(3007);
