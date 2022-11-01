const mongoose = require("mongoose");
// 스키마 생성 - 생성자 함수
const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  user: {
    type: String,
    required: true,
    unique : true
  },
  content: {
    type: String
  },
  logID : {
    type: String,
  },
  password : {
    type: String,
  }
});

const Userdb = mongoose.model('userdb', schema);
module.exports = Userdb;
