function move_pic() {
// 轮播图
    var nav_div = document.getElementsByClassName('slide_nav')[0];
    var nav_ul = nav_div.getElementsByTagName('ul')[0];
    var nav_li = nav_ul.getElementsByTagName('li');
    var top_slide_div = document.getElementById('top_slide');
    var top_slide_ul = top_slide_div.getElementsByTagName('ul')[0];
    var top_slide_li = top_slide_ul.getElementsByTagName('li');
    var box = document.getElementById('top_slide');
    var i_now = 0;
    var timer = null;
    for (i=0;i<nav_li.length;i++){
        nav_li[i].index = i;
        nav_li[i].onmousemove = function () {
            for (i=0;i<nav_li.length;i++){
                top_slide_li[i].className='fn-hide';
            };
            top_slide_li[this.index].className='slide_list';
        };
    }
    box.onmouseover = function(){
        clearInterval(timer);
    };
    box.onmouseout = function(){
        timer = setInterval(to_run,2000);
    };
    timer = setInterval(to_run,2000);
    function to_run() {
        if (i_now<nav_li.length-1){
            i_now++;
        }
        else {
            i_now = 0 ;
        }
        for (i=0;i<nav_li.length;i++){
            top_slide_li[i].className='fn-hide';
        };
        top_slide_li[i_now].className='slide_list';
    }
}
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        }
    }
}

addLoadEvent(move_pic);
/**
 * Created by pl on 2017/3/3.
 */
