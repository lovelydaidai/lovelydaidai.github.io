function person_hover() {
    var head_card_person =document.getElementById('head_card_person');
    var person_hover = document.getElementById('person_hover');
    head_card_person.onmouseover=function () {
        person_hover.style.display='block';
    };
    head_card_person.onmouseout = function () {
        person_hover.style.display = 'none';
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

addLoadEvent(person_hover);