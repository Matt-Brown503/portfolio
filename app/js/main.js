$(document).ready(function(){

	$('header').addClass(' load');
	$('.scroll').addClass(' load');


		$(window).scroll(function() {
	        if ($(window).scrollTop() + $(window).height() >= $('.aboutcheck').offset().top-100) {
	        	$('.aboutcheck').parent().addClass(' slide');
	        }
    	});
    	$(window).scroll(function() {
	        if ($(window).scrollTop() + $(window).height() >= $('.workcheck').offset().top-100) {
	        	$('.workcheck').parent().addClass(' slide');
	        }
    	});
    	$(window).scroll(function() {
	        if ($(window).scrollTop() + $(window).height() >= $('.studycheck').offset().top-100) {
	        	$('.studycheck').parent().addClass(' slide');
	        }
    	});
    	$(window).scroll(function() {
	        if ($(window).scrollTop() + $(window).height() >= $('.contactcheck').offset().top-100) {
	        	$('.contactcheck').parent().addClass(' slide');
	        }
    	});


	



	var myUrl = 'https://teamtreehouse.com/walterbrown2.json';
	var badgeHTML = '';
	$.getJSON(myUrl)
	.done(function(data){
		badgeList = data.badges;
		var points = data.points.total;
		var myBadges = badgeList.length-1;
		badgeList =  badgeList.reverse();
		for (var i = 0; i < 5; i++) {
			var badgeName = badgeList[i].name;
			var badgeIcon = badgeList[i].icon_url;
			var badgeLink = badgeList[i].url;

			badgeHTML += "<a href="+badgeLink+"><img src="+badgeIcon+" class='th-badge'></a>";

		$('#badges').html(badgeHTML);
		$('#lessons').html(myBadges);
		$('#points').html(points);
		}
	});


});

