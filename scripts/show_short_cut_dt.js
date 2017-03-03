function show_short_cut_dt() {
    var short_cut_r = document.getElementById('shrot_cut_r');
    var r_ul = short_cut_r.getElementsByTagName('ul')[0];
    var r_li = r_ul.getElementsByTagName('li');
    for (i=0;i<r_li.length;i++){
        r_li[i].onmousemove = function () {
            var show_dl = this.getElementsByTagName('dl')[0];
            var show_dd = this.getElementsByTagName('dd')[0];
            show_dd.className='show_dd';
        }
        r_li[i].onmouseout = function () {
            var show_dl = this.getElementsByTagName('dl')[0];
            var show_dd = this.getElementsByTagName('dd')[0];
            show_dd.className='fn-hide';
        }
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

addLoadEvent(show_short_cut_dt);
