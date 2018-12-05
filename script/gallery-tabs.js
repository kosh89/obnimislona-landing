document.getElementById('gallery-tabs').onclick = function(event) {
    if (event.target.className == 'gallery-tabs_item') {
        let tabNum = event.target.getAttribute('data-tab');
        for (i=0; i<document.getElementsByClassName('gallery-tabs_item').length; i++) {
            if (i != tabNum) {
                document.getElementsByClassName('photo-block_item')[i].style.display = 'none';
                document.getElementsByClassName('gallery-tabs_item')[i].style.background = 'rgba(4, 63, 63, 0.767)';
            } else {
                document.getElementsByClassName('photo-block_item')[i].style.display = 'flex';
                document.getElementsByClassName('gallery-tabs_item')[i].style.background = '#114646fa';
            }
        }
    }
    
}