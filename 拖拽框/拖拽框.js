let link = document.getElementById("link");
let closeBtn = document.getElementById("closeBtn");
let login = document.getElementById("login");
let bg = document.getElementById("bg");
let title = document.getElementById("title");

login.style.display = "none";
bg.style.display = "none";

link.addEventListener("click", function () {
  login.style.display = "block";
  bg.style.display = "block";
})
closeBtn.addEventListener("click", function () {
  login.style.display = "none";
  bg.style.display = "none";
})
/*按下鼠标获取鼠标到框边的距离*/
title.addEventListener("mousedown", function (e) {
  let X = e.pageX - login.offsetLeft;
  let Y = e.pageY - login.offsetTop;
/*鼠标移动实时获取框到页面的距离并赋值*/
  document.addEventListener("mousemove", move)
  function move(e) {
    login.style.left = e.pageX - X + 'px';
    login.style.top = e.pageY - Y + 'px';
  }
  /*松开鼠标接触move监听*/
  document.addEventListener("mouseup", function () {
    document.removeEventListener("mousemove", move)
  })
})