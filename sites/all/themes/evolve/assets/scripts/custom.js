(function($) {
	"use strict";
	$(document).ready(function() {
		//Tooltip
		$(".dtooltip").tooltip();
		var element_array = document.getElementsByClassName('skill-bar');
		if (element_array) {
			var n = 0;
			while (elemnent_array[n]) {
				var $skillbar = elemnent_array[n];
				var percent = $skillbar.data('percent');
				//Make sure appear plugin is loaded
				if ( typeof $.fn.appear == 'function') {
					$skillbar.appear(function() {
						$skillbar.find('.background').css({
							width : percent + '%'
						});
					});
				} else {
					$skillbar.find('.background').css({
						width : percent + '%'
					});
				}
				n++;
			}
		}
	});
})(this.jQuery);
