ymaps.ready(init);
function init() {
    var myMap = new ymaps.Map("map", {
        center: [57.80969177936658, 28.364327060607838],
        zoom: 17
    });

/*     myMap.behaviors.disable([
        'drag',
        'scrollZoom'        
    ]); */

    myMap.controls.remove('trafficControl')
                  .remove('fullscreenControl')
                  .remove('searchControl')
                  .remove('typeSelector')
                  .remove('rulerControl');

    var myPin = new ymaps.GeoObjectCollection({}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/map_icon.png',
        iconImageSize: [48, 48],
        iconImageOffset: [-20, -15]
    });

    var myPlacemark = new ymaps.Placemark([57.80969177936658, 28.364327060607838], {
        balloonContentHeader: 'Бюро Интересных событий',
        balloonContentBody: 'Обними слона',        
        hintContent: 'Обними слона'
    })

    myPin.add(myPlacemark);
    myMap.geoObjects.add(myPin);
}