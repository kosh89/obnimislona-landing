const btnCalc = document.getElementById('btnCalc');
const formContainer = document.getElementsByClassName('form-container');
const btnSubmit = document.getElementsByClassName('btnSubmit');
const fields = document.getElementsByClassName('fields');
const fade = document.getElementById('fade');

document.getElementById('btnCalc').onclick = function () {
    fade.style.display = 'block';
    formContainer[0].style.top = '10%';
    //Если уже отправили, то окно уедет наверх.
    setTimeout(hideModal, 2000);;
}

fade.onclick = function () {
    formContainer[0].style.top = '-160%';
    fade.style.display = 'none';
}

//Отправляем, через 2с модалка уезжает
btnSubmit[0].onclick = function () {
    setTimeout(hideModal, 2000);
}

function hideModal() {
    if (fields[0].style.display == 'none') {
        formContainer[0].style.lineHeight = '300px';
        formContainer[0].style.top = '-160%';
        fade.style.display = 'none';
    }
}