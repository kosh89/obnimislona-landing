document.getElementById('button').onclick = function() {
    document.getElementsByClassName('form-container')[0].style.top = '10%';
    //Если уже отправили, то окно уедет наверх.
    setTimeout(hideModal, 2000);;
}

//кнопку "скрыть" хорошо бы заменить на клик вне формы
document.getElementById('hideContactUs').onclick = function() {
    document.getElementsByClassName('form-container')[0].style.top = '-50%';
}

document.getElementsByClassName('form-container__btn')[0].onclick = function() {        
    setTimeout(hideModal, 2000);
}

//если форма ушла на почту, то окно уедет
function hideModal() {
    if (document.getElementsByClassName('fields')[0].style.display == 'none') {
        document.getElementsByClassName('form-container')[0].style.top = '-50%';
    }
}