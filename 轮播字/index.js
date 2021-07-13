// setInterval(() => {
//   let show = document.querySelector('span[data-show]');
//   let next = show.nextElementSibling || document.querySelector('span:first-child');
//   let up = document.querySelector('span[data-up]');
//   if(up){
//     up.removeAttribute('data-up');
//   }
//   show.removeAttribute('data-show');
//   show.setAttribute('data-up','');
//   next.setAttribute('data-show','');
// }, 2000);

//当前执行时间
var nowTime = 0;
//记录每次动画执行结束的时间
var lastTime = Date.now();
//我们自己定义的动画时间差值
var diffTime = 2000;
let flag = 1;

function carton() {
  nowTime = Date.now();
  let show = document.querySelector('span[data-show]');
  show.onmouseover = function () {
    flag = 0;
  }
  show.onmouseout = function () {
    flag = 1;
  }
  if (nowTime - lastTime > diffTime) {
    let next = show.nextElementSibling || document.querySelector('span:first-child');
    let up = document.querySelector('span[data-up]');
    if (flag) {
      if (up) {
        up.removeAttribute('data-up');
      }
      show.removeAttribute('data-show');
      show.setAttribute('data-up', '');
      next.setAttribute('data-show', '');
      lastTime = nowTime;
    }
    window.requestAnimationFrame(carton);
  } else {
    window.requestAnimationFrame(carton);
  }
}
window.requestAnimationFrame(carton);