document.getElementById('button').onclick = function() {
    hideModal();
    document.getElementsByClassName('form-container')[0].style.top = '10%';
}

document.getElementById('hideContactUs').onclick = function() {
    document.getElementsByClassName('form-container')[0].style.top = '-45%';
}

document.getElementsByClassName('form-container__btn')[0].onclick = function() {        
    const timer = setTimeout(hideModal, 2000);        
}

function hideModal() {
    if (document.getElementsByClassName('fields')[0].style.display == 'none') {
        document.getElementsByClassName('form-container')[0].style.top = '-45%';
    }
}