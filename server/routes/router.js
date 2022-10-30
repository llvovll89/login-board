const express = require("express");
const route = express.Router();

const services = require("../services/rendes");
const contoller = require('../controller/controller')

// main - home
route.get("/", services.homeRoutes);

// new-board - 게시판 새글
route.get("/new", services.new_board);

// 글제목 클릭(글 보기)
route.get("/view", services.view_board);

// 로그인 라우터
route.get('/login' , services.login_page);

// 새글 작성 시 추가 + 글 클릭 시 안에서 화면보기 추가하기

// API
route.post('/api/users', contoller.create);
route.get('/api/users', contoller.find);
route.put('/api/users/:id', contoller.update);
route.delete('/api/users/:id', contoller.delete);

module.exports = route;
