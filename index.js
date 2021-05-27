const express = require('express');
const Router = require('express-router');
const app = express();
var cons = require('consolidate');
const router = express.Router();
const port = 3002;

app.engine('html', cons.swig)
app.set('views','views'); // 정적 파일 위치 지정
app.set('view engine','html'); // 템플릿 엔진 세팅
app.use(express.static('statics'));

//main page
//page1
app.get('/main', (req, res) => {
  return res.render("page1.html");
})
//page2
app.get('/schedule', (req, res) => {
  return res.render("page2.html");
})
//page3
app.get('/schedule/month', (req, res) => {
  return res.render("page3.html");
})
//page4
app.get('/contest', (req, res) => {
  return res.render("page4.html");
})
//page5
app.get('/portfolio', (req, res) => {
  return res.render("page5.html");
})

app.listen(3000)