function car_hover() {
    var head_card_car =document.getElementById('head_card_car');
    var car_hover = document.getElementById('car_hover');
    head_card_car.onmouseover=function () {
        car_hover.style.display='block';
    };
    head_card_car.onmouseout = function () {
        car_hover.style.display = 'none';
    };
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

addLoadEvent(car_hover);
