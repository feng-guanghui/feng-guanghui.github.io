
// 左右按钮
var eprev = document.querySelector('.prev');
var enext = document.querySelector('.next');
// 小圆点图片转播
var esico = document.getElementById('icolist').getElementsByTagName('li');
var eicolist = document.querySelector('#icolist');
// 图片列表
var eimglist = document.querySelector('#imglist');
var left = 0;
var timer;
run()
function run() {
    if (left <= -4400) {
        left = 0;
    }
    var m = Math.floor(-left / 1100);
    imglist.style.marginLeft = left + "px";
    var n = (left % 1100 == 0) ? n = 1200 : n = 5;
    left -= 10;
    timer = setTimeout(run, n);
    icochange(m);
}
// 图片定位函数
function imgchage(n) {
    let It = -(n * 1100);
    imglist.style.marginLeft = It + 'px';
    left = It;
}
// 上一个下一个点击事件；
eprev.onclick = function () {
    let prevgo = Math.floor(-left / 1100) - 1;
    if (prevgo == -1) {
        prevgo = 3;
    }
    imgchage(prevgo);
    icochange(prevgo);
    // var m = Math.floor(-left / 1100);
    // icochange(m);
}
enext.onclick = function () {
    let nextgo = Math.floor(-left / 1100) + 1;
    if (nextgo == 4) {
        nextgo = 0;
    }
    imgchage(nextgo);
    icochange(nextgo);
    // var m = Math.floor(-left / 1100);
    // icochange(m);
}
// 小圆点变色
function icochange(m) {
    for (let index = 0; index < esico.length; index++) {
        esico[index].style.backgroundColor = '';
    }
    if (m < esico.length) {
        esico[m].style.backgroundColor = 'red'
    }
}
//小圆点点击列表变换；
eicolist.onclick = function () {
    var tg = event.target;
    let ico = tg.innerHTML - 1;
    imgchage(ico);
    icochange(ico);
}
// 鼠标置于图片停止播放
// eimglist.onmouseover = function () {
//     clearTimeout(timer);
// }
// eimglist.onmouseout = function () {
//     run();
// }


