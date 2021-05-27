const express = require('express');
const Router = require('express-router');
const app = express();

const router = express.Router();
const port = 3002;

app.set('views','views'); // 정적 파일 위치 지정
app.set('view engine','ejs'); // 템플릿 엔진 세팅
app.use(express.static('statics'));

//main page
//page1
app.get('/main', (req, res) => {
  return res.render("page1.ejs");
})
//page2
app.get('/schedule', (req, res) => {
  return res.render("page2.ejs");
})
//page3
app.get('/schedule/month', (req, res) => {
  return res.render("page3.ejs");
})
//page4
app.get('/contest', (req, res) => {
  return res.render("page4.ejs");
})
//page5
app.get('/portfolio', (req, res) => {
  return res.render("page5.ejs");
})

app.listen(3000)