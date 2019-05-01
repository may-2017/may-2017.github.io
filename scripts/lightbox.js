var tobi = new Tobi({

    // default selector
    selector: '.lightbox',

    // shows captions
    captions: true,
    captionsSelector: 'img',
    captionAttribute: 'alt',

    // shows navigation
    nav: 'auto',
    navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6" /></svg>', '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6" /></svg>'],

    // shows close icon
    close: true,
    closeText: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>',

    // shows counter
    counter: true,

    // keyboard interactions
    keyboard: true,

    // shows zoom icon
    zoom: false,
    zoomText: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>',

    // click outside to close
    docClose: true,

    // swipe up to close
    swipeClose: true,

    // hides scrollbar when activated
    scroll: false,

    // is draggable?
    draggable: true,

    // Touch and mouse dragging threshold in pixels
    threshold: 20

});
