window.$ = window.jQuery = require('jquery');
import { getSlider } from 'simple-slider';


$(document).ready(function() {
    
    // init slider
    getSlider({
	    container: $('.slider')[0],
	    transitionTime:1,
	    delay:3.5
	});
});


