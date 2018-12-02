document.getElementById('button').onclick = function() {
    document.getElementsByClassName('form-container')[0].style.top = '10%';
}

document.getElementById('hideContactUs').onclick = function() {
    document.getElementsByClassName('form-container')[0].style.top = '-45%';
}

document.getElementById('form-container__btn').onclick = function() {
    const timer = setTimeout(dong, 2000);
}

function dong() {
    document.getElementsByClassName('form-container')[0].style.top = '-45%';
}