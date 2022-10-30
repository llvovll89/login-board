const axios = require('axios');

exports.homeRoutes = (req, res) => {
  // /api/users 만들기
  axios.get('http://localhost:3000/api/users')
  .then(function(response){
    console.log(response.data)
    res.render("index", {users : response.data});
  })
  .catch(err => {
    res.send(err);
  })
};

exports.new_board = (req, res) => {
  res.render("new");
};

exports.view_board = (req, res) => {
  res.render("view");
};

exports.login_page = (req, res) => {
  res.render('login');
}