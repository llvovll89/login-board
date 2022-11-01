const axios = require("axios");

exports.homeRoutes = (req, res) => {
  // /api/users 만들기
  axios
    .get("http://localhost:3000/api/users")
    .then(function (response) {
      res.render("index", { users: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.new_board = (req, res) => {
  res.render("new");
};

exports.view_board = (req, res) => {
  axios
    .get("http://localhost:3000/api/users")
    .then(function (response) {
      res.render("view", { users: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.login_page = (req, res) => {
  res.render("login");
};
