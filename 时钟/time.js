(function(doc){
  let start = doc.getElementsByClassName('start')[0];
  let stop = doc.getElementsByClassName('stop')[0];

  let clockitem = doc.querySelectorAll('.clock-item span');
  console.log(clockitem);
  let check = true;
  const getTime = () => {
		// 获取当前的事件
		const nowTime = new Date();
		// 获取当前的小时
    // 更新页面的时间 所有都是小于 10 前面加个0 小时 分钟 秒钟 同理
		const hours = nowTime.getHours();
		clockitem[0].innerHTML = hours < 10 ? "0" + hours : hours;
		// 获取当前的分钟
		const minutes = nowTime.getMinutes();
		clockitem[1].innerHTML = minutes < 10 ? "0" + minutes : minutes;
		// 获取当前的秒钟
		const seconds = nowTime.getSeconds();
		clockitem[2].innerHTML = seconds < 10 ? "0" + seconds : seconds;
	};
  getTime();
  timer = setInterval(function(){
    getTime();
  },1000)
  start.addEventListener('click',function(){
    if(!check){
      timer = setInterval(function(){
      getTime();
    },1000)
      check = true;
    }
  })

  stop.addEventListener('click',function(){
    clearInterval(timer);
    check = false;
  })

})(document)
