; (function (doc) {
    var Waterfall = function (element, opt) {
        this.wBody = doc.getElementsByTagName('body')[0];
        this.wArea = doc.getElementsByClassName(element.waterfalltype)[0];
        this.wItems = this.wArea.getElementsByTagName('div');
        this.wImg = this.wArea.getElementsByTagName('img');

        this.colunm = opt.colunm;
        this.gap = opt.gap;
        this.width = opt.width;
        this.arr_h = [];
        this.arr_wh = new Array(opt.colunm).fill(0);
    }

    Waterfall.prototype = {
        init: function () {
            this.initWidth();
            this.renderList();
        },

        initWidth: function () {

            for (let i = 0; i < this.wImg.length; i++) {
                this.wImg[i].style.width = this.width + 'px';
            }
            for (let i = 0; i < this.wItems.length; i++) {
                this.wItems[i].style.width = this.width + 'px';
                this.arr_h.push(this.wItems[i].offsetHeight);                    //将每个div的高度依次放入数组arr_h
            }

            this.wBody.style.width = this.width * this.colunm + this.gap * (this.colunm + 1) + 'px';   //根据列数动态设置body宽度

        },

        renderList: function () {

            for (let i = 0; i < this.wItems.length; i++) {
                let c = i % this.colunm;                                      //c代表i项在第c列
                let r = parseInt(i / this.colunm) + 1;                           //r代表i项在第r行

                this.wItems[i].style.left = c * this.width + (c + 1) * this.gap + 'px';  //设置每一项的位置
                this.wItems[i].style.top = this.gap + this.arr_wh[c] + 'px';

                this.arr_wh[c] = this.arr_wh[c] + this.arr_h[i] + this.gap;        //arr_wh数组中是第c列的当前高度

            }
            this.wArea.style.height = Math.max(...this.arr_wh) + 20 + 'px';

        }
    }
    window.Waterfall = Waterfall;
})(document);