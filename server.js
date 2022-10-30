const express = require("express");
const dotenv = require("dotenv");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const path = require("path");
const moment = require("moment");

const connectDB = require("./server/database/connection");

dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

// ejs 엔진 사용 세팅
app.set("view engine", "ejs");
app.set("views");
// morgan - get 시간 보기
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));

// mongoDB 연결
connectDB();

app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

// 경로설정
app.use("/", require("./server/routes/router"));

app.listen(PORT, () => {
  console.log(`Server On : http://localhost:${PORT}`);
});
