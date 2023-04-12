var dark = true;

function scrollToId(id){
    document.getElementById(id).scrollIntoView({behavior: "smooth"});
    console.log(id);
}

function isElementInViewport(elem) {
    var $elem = $(elem);

    // Get the scroll position of the page.
    var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
    var viewportTop = $(scrollElem).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    // Get the position of the element on the page.
    var elemTop = Math.round( $elem.offset().top );
    var elemBottom = elemTop + $elem.height();

    return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
}

// Check if it's time to start the animation.
function checkAnimation() {
    var $elem = $('.bar .level');

    // If the animation has already been started
    if ($elem.hasClass('start')) return;

    if (isElementInViewport($elem)) {
        // Start the animation
        $elem.addClass('start');
    }
}

// function switch_theme(){
//     dark = !dark;

//     if(dark){
//         console.log("Testy");
//         document.getElementsByClassName("grid-item").forEach((e)=>{
//             e.style.backgroundColor="#fafcff"
//         })
//     }
// }