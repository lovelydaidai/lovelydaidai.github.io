window.onload = function () {

    var nav_div = document.getElementsByClassName('slide_nav')[0];
    var nav_ul = nav_div.getElementsByTagName('ul')[0];
    var nav_li = nav_ul.getElementsByTagName('li');
    var top_slide_div = document.getElementById('top_slide');
    var top_slide_ul = top_slide_div.getElementsByTagName('ul')[0];
    var top_slide_li = top_slide_ul.getElementsByTagName('li');
    for (i=0;i<nav_li.length;i++){
        nav_li[i].index = i;
        nav_li[i].onmousemove = function () {
            for (i=0;i<nav_li.length;i++){
                top_slide_li[i].className='fn-hide';
            };
           top_slide_li[this.index].className='slide_list';
        };
    }
}
