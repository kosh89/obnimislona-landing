document.getElementById('button').onclick = function() {
    document.getElementsByClassName('form-container')[0].style.top = '10%';
    //Если уже отправили, то окно уедет наверх.
    setTimeout(hideModal, 2000);;
}

//кнопку "скрыть" хорошо бы заменить на клик вне формы
document.getElementById('hideContactUs').onclick = function() {
    document.getElementsByClassName('form-container')[0].style.top = '-160%';
}

document.getElementsByClassName('form-container__btn')[0].onclick = function() {        
    setTimeout(hideModal, 2000);
}

//если форма ушла на почту, то окно уедет
function hideModal() {
    if (document.getElementsByClassName('fields')[0].style.display == 'none') {
        document.getElementsByClassName('form-container')[0].style.top = '-160%';
    }
}

//Вкладки галереи
document.getElementById('gallery-tabs').onclick = function(event) {
    if (event.target.className == 'gallery-tabs_item') {
        let tabNum = event.target.getAttribute('data-tab');
        for (i=0; i<document.getElementsByClassName('gallery-tabs_item').length; i++) {
            if (i != tabNum) {
                document.getElementsByClassName('photo-block_item')[i].style.display = 'none';
                document.getElementsByClassName('gallery-tabs_item')[i].style.background = '#fff';
                document.getElementsByClassName('gallery-tabs_item')[i].style.borderBottom = '3px solid #fff';
            } else {
                document.getElementsByClassName('photo-block_item')[i].style.display = 'flex';
                document.getElementsByClassName('gallery-tabs_item')[i].style.background = '#f7f7f7';
                document.getElementsByClassName('gallery-tabs_item')[i].style.borderBottom = '3px solid #cacaca';
            }
        }
    }
    
}