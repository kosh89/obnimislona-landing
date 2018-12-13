const btnCalc = document.getElementById('btnCalc');
const formContainer = document.getElementsByClassName('form-container');
const btnSubmit = document.getElementsByClassName('btnSubmit');
const fields = document.getElementsByClassName('fields');
const fade = document.getElementById('fade');

btnCalc.onclick = function() {
    if (fields[0].style.display == 'none') {
        setTimeout(hideModal, 2000);
    } else {
        formContainer[0].style.top = '10%';
        fade.style.display = 'block';
    }
}

fade.onclick = function() {
    hideModal();
}

//Отправляем, через 2с модалка уезжает
btnSubmit[0].onclick = function() {        
    setTimeout(hideModal, 2000);
}

function hideModal() {
    formContainer[0].style.top = '-160%';
    fade.style.display = 'none';
}