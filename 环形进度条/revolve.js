window.addEventListener('load',
(function(doc){

  let revolve = function(total){
    this.text = doc.getElementsByClassName('text')[0];
    this.left = doc.getElementsByClassName('left')[0];
    this.right = doc.getElementsByClassName('right')[0];
    this.total = total;
    this.loader = 1;
    this.timer = null;
  }
  revolve.prototype = {
    start: function(){
      // setInterval的调用对象是window，需要转接一下this
      let that = this;
      //用setImterval模拟加载，计时有延迟仅供参考
      this.timer = setInterval(function(){
        let num = Number((that.loader / that.total)*100).toFixed(1);
        let deg = Number((that.loader / that.total)*360).toFixed(1);
        console.log(num);
        if(num > 100)
        {
          clearInterval(that.timer);
        }
        else{
          that.text.textContent = num + '%';
          if(deg<=180)
          that.right.style.transform = `rotate(${deg-180}deg)`;
          else
          {
            that.right.style.transform = `rotate(0deg)`;
            that.left.style.transform = `rotate(${deg-180-180}deg)`;
          }

          that.loader++;
        }
      },10);
    }

  }
  window.revolve = revolve;
  
})(document)
)