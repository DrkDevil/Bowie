jQuery(document).ready(function ($) {
	if ($('.videoWrapper').length > 0) {
		var videoWrapper = $('.videoWrapper'),
			mq = window.getComputedStyle(document.querySelector('.videoWrapper'), '::after').getPropertyValue('content').replace(/"/g, "").replace(/'/g, "");
		if (mq == 'desktop') {
			var videoUrl = videoWrapper.data('video'),
				video = $('<video loop><source src="' + videoUrl + '.mp4" type="video/mp4" /><source src="' + videoUrl + '.webm" type="video/webm" /></video>');
			video.appendTo(videoWrapper);
			video.get(0).play();
		}
	}
});
