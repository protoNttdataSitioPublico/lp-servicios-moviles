var dataLayer = window.dataLayer || [];
var mode = 'dataLayer';

function sendEvent(mode, eventName, eventCategory, eventAction, eventLabel) {
    var params;
    params = {
        event: eventName,
        eventCategory: eventCategory,
        eventAction: eventAction,
        eventLabel: eventLabel
    }

    if (mode === 'dataLayer') {
        dataLayer.push(params);
    }
}

$('.slider-service-mobile li a').click(function () {
    var id = $(this).attr('id');
    var position = $(this).attr('position');
    sendEvent(mode, 'eventInteraction', 'serviciosMoviles', 'card-' + id, 'card-' + position);
});

$('.banner .banner-button .banner-servicios-fijos').click(function () {
    sendEvent(mode, 'eventInteraction', 'serviciosMoviles', 'banner-serviciosFijos', 'banner');
});

$('.slider-service-aditional li .card-button .button').click(function () {
    var id = $(this).attr('id');
    var position = $(this).attr('position');
    sendEvent(mode, 'eventInteraction', 'serviciosMoviles', 'serviciosAdicionales-' + id, 'servicios-' + position);
});

$('.slider-brands li').click(function () {
    var id = $(this).attr('data-id');
    var position = $(this).attr('position');
    sendEvent(mode, 'eventInteraction', 'serviciosMoviles', 'marcasDestacadas-' + id, 'marcasDestacadas-' + position);
});
