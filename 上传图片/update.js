window.addEventListener('load', () => {
  let addPhoto = document.getElementById('addPhoto');
  let add = document.getElementsByClassName('add')[0];
  let list = document.getElementsByClassName('list')[0];
  addPhoto.addEventListener('change', function () {
    //type为file的input有一个属性files，包含一个fileslist对象，储存上传文件的信息
    for (let item of this.files) {
      // 利用正则表达式判断是否是图片类型;
      if (!/image\/\w+/.test(item.type)) {
        alert('please add photo');
      } else {
        //FileReader 对象允许Web应用程序异步读取存储在用户计算机上的文件（或原始数据缓冲区）的内容
        let reader = new FileReader();
        //读取操作readAsDataURL完成的时候，触发 loadend事件
        // result 属性将包含一个data:URL格式的字符串（base64编码）以表示所读取文件的内容。
        reader.readAsDataURL(item);
        reader.addEventListener('load', function () {
          let li = document.createElement('li');
          li.innerHTML = `
          <div class="close">×</div>
				  <img src="${this.result}" />
          `;
          list.insertBefore(li, add);
        });
      }
    }
  })
  // 删除功能 因为每次添加新的li元素都会重绘dom树 没法给每个.close元素绑定事件 这里我们就用事件委托实现
  list.addEventListener("click", (e) => {
    // e是页面一开启就自动生成的事件对象
    // e.target是触发事件的对象 
    // 这里就是如果点击的是×号就删除 否则不删除
    if (e.target.className == "close") {
      // removeChild是移除子元素 括号写的是点击的div对应的父元素就是某一个li了
      list.removeChild(e.target.parentNode);
    }
  });
})