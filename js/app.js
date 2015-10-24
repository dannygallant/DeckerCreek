$(document).ready(function() {
	var info = [{
		heading: "What you'll find at Decker Creek B&amp;B&amp;B:",
		content: "Your own private cabin with screened porch,<br> fenced yard, kitchen, patio, grill, whirlpool tub<br> and many other amenities.<br>Dog bowls, towels, beds, crates (available if needed) and<br> homemade dog biscuits.<br>A full country breakfast from local farms.<br>Room to roam.<br>Area guides, resources and recommendations.<br>Nearby activities, including golf, canoeing and trail rides.<br>Downtown Austin just 14 miles away.",
	},
	{
		heading: "Cabin 1: Hilltop",
		content: "Cabin 1, 'Hilltop', is about 300 feet from our house and in view of the lightly used rural road. The whirlpool tub is in the living area with views of the countryside and the TV (with VCR and DVD players). The bath includes a spacious standing shower. The yard is mostly open with several shade trees.",
		rates: "$169/night based on two nights or more. Two-night minimum on weekends.",
		image: "img/Cabin1Thumb.jpg"
	},
	{
		heading: "Cabin 2: Treehouse",
		content: "Cabin 2, 'Treehouse', is down the hill away from the road, about 200 feet from Cabin 1. Herer you are surrounded by trees, yet the porch is high off the ground. The whirlpool tub is in the bathroom, for more privacy. The yard is woodsy, with many trees and shrubs. First come, first served in choosing the cabin you want.",
		rates: "$169/night based on two nights or more. Two-night minimum on weekends.",
		image: "img/Cabin2Thumb.jpg"
	},
	{
		heading: "About Us",
		content: "Decker Creek is owned and operated by Pay, Byron, Beau, Razr and Shiva Rathburn. We are members of the Texas Bed and Breakfast Association and the Professional Inkeepers Association.",
		email: "Email us: pat.rathburn@gmail.com",
		phone: "Call us: 512-743-8835 / 512-743-8090"
	}

	]




$('#cabin1').on('click', function() {
	$('.greenBlock').empty();
	var content = '<br><h4 class="whiteText" id="mainInfo">' +info[1].heading+ '</h4><p id="mainInfoText">' +info[1].content+ '</p><br><strong>' +info[1].rates+ '<br></strong><br><a href="http://www.deckercreek.com/galleries/hilltop/hilltop.html" target="_blank"><img src=' +info[1].image+ '></a><br><br>';
	$('.greenBlock').html(content);

});

$('#cabin2').on('click', function() {
	$('.greenBlock').empty();
	var content = '<br><h4 class="whiteText" id="mainInfo">' +info[2].heading+ '</h4><p id="mainInfoText">' +info[2].content+ '</p><br><strong>' +info[2].rates+ '<br></strong><br><a href="http://www.deckercreek.com/galleries/cabin_2/cabin_2.htm" target="_blank"><img src=' +info[2].image+ '></a><br><br>';
	$('.greenBlock').html(content);

});

$('#aboutUs').on('click', function() {
	$('.greenBlock').empty();
	var content = '<br><h4 class="whiteText" id="mainInfo">' +info[3].heading+ '</h4><p id="mainInfoText">' +info[3].content+ '</p><br><strong>' +info[3].email+ '<br></strong><strong>' +info[3].phone+ '<br></strong><br><br>';
	$('.greenBlock').html(content);

});

});  // Opening Document Ready




