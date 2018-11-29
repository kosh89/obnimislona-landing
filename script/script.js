icon.onclick = function() {
    const x = document.getElementById('hidden_menu');
    if (x.className == "menu") {
        x.className += " responsive";
    } else {
        //Свернуть меню обратно
        x.className = "menu"; 
    }
}