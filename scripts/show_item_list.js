window.onload = function () {
var show_li = document.getElementById('nav_cate_list_show').getElementsByTagName('li');
var close_list = document.getElementsByClassName('item_list_close');
for (i=0;i<show_li.length;i++){
    show_li[i].onmouseover = function () {
        for (i=0;i<show_li.length;i++){
            show_li[i].className='item';
        };
        this.className='item_hover';

    } ;
    }
    for (i=0;i<close_list.length;i++){
        close_list[i].onclick=function () {
            for (j=0;j<show_li.length;j++){
                show_li[j].className='item';
            };
    }

}
}
