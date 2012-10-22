/**
 * @file
 * JavaScript file for the Flush module.
 */

(function($){


Drupal.behaviors.flush = {
	attach: function () {
		
		
		$(document).keydown(function (event) {
        
			// Run the Flush with Ctrl + alt + F.
			if (event.ctrlKey === true && event.altKey === true && event.keyCode === 70) {
			
				window.location = '/admin/flush/run';
				event.preventDefault();
			}

      });
	  
	  
	  
	  
	}
}

}(jQuery));
