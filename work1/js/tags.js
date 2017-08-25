
SystemJS.import('js/thumbs_es3.js').then(function(m){

	var thumb = new m.ThumbsUp();

	$.fn.extend({
		"thumb": thumb
	});

	$(".palm").on('click',showClickNum);
	function showClickNum () {
		if (!$(".palm").thumb.limited) {
			$(".palm").append("<p></p>");
			$("p:last-of-type").text("+"+$(".palm").thumb.thumbs).addClass("text-show");
			$(".palm p:last-of-type")[0].addEventListener("webkitAnimationEnd",function(){
				$(".palm p:nth-of-type(1)").remove();
			})			
		} else {
			$(".palm").off("click",showClickNum);
		}
	}
})