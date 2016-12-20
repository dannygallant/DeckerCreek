$(document).ready(function() {
	var info = [{
		heading: "What you'll find at Decker Creek B&amp;B&amp;B:",
		content: "Your own private cabin with screened porch, fenced yard, kitchen, patio, grill, whirlpool tub and many other amenities. Dog bowls, towels, beds, crates (available if needed) and homemade dog biscuits. A full country breakfast from local farms. Room to roam. Area guides, resources and recommendations. Nearby activities, including golf, canoeing and trail rides. Downtown Austin just 14 miles away.",
	},
	{
		heading: "Cabin 1: Hilltop",
		content: "Huge windows give views in all directions. The living area has a futon couch, lounge chair, dining table, TV/electronics and jetted tub by a picture window. Around the wall is a comfy king bed. The bathroom includes a spacious shower stall. The large wooded yard is near the rural road and features a hammock, patio with table, grill, chiminea and dog washing area. <br><br>Click on photo below for more views.",
		// image: "img/Cabin1Thumb.jpg"
		image: "img/cabin_1_video_player.jpg"
	},

	// ORIGINAL CABIN 1 TEXT. CHANGED ON 12/18/2016
	// {
	// 	heading: "Cabin 1: Hilltop",
	// 	content: "Cabin 1/Hilltop is about 300 feet from our house and in view of the lightly used rural road. The whirlpool tub is in the living area with views of the countryside and the TV (with VCR and DVD players). The bathroom includes a spacious standing shower. The yard is mostly open with several shade trees.",
	// 	rates: "$169/night based on two nights or more. Two-night minimum on weekends.",
	// 	image: "img/Cabin1Thumb.jpg"
	// },
	{
		heading: "Cabin 2: Treehouse",
		content: "Down the hill in a secluded woodsy setting. Large windows all around. Sunsets illuminate the elevated porch. The living area has a futon couch, dining table and TV/electronics. Around the wall is a comfy king bed. The large bathroom has a jetted tub with shower. The yard features a deck with table, chiminea, hammock, grill and cabana shower for dogs and people. <br><br>Click on photo below for more views.",
		image: "img/cabin_2_video_player.jpg"
	},

	// ORIGINAL CABIN 2 TEXT. CHANGED ON 12/18/2016
	// {
	// 	heading: "Cabin 2: Treehouse",
	// 	content: "Cabin 2/Treehouse, is down the hill away from the road, about 200 feet from Cabin 1. Here you are surrounded by trees, yet the porch is high off the ground. The whirlpool tub is in the bathroom, for more privacy. The yard is woodsy, with many trees and shrubs.",
	// 	rates: "$169/night based on two nights or more. Two-night minimum on weekends.",
	// 	image: "img/Cabin2Thumb.jpg"
	// },




	{
		heading: "About Us",
		content: "Decker Creek B&B&B is dedicated to providing a dog-friendly rural getaway near Austin, Texas, on 50 acres of woods and meadows intersected by Decker Creek. <br><br> Downtown Austin is 14 miles away. <br><br> Your hosts are Pat, Byron, Beau, Razr and Shiva Rathbun. <br><br> We are members of the Texas Bed and Breakfast Association.",
		image: "img/TX_BBB_logo.png"
		// email: "Email us: pat.rathbun@gmail.com",
		// phone: "Call us: 512-743-8835",
		// phone2: "512-743-8090"

	},
	
	{
		heading: "Rates, Policies and Amenities",
		policies: [
		"$169 a night plus tax based on double occupancy.", 
		"Two-night minimum stay on weekends.", 
		"$25 per-day additional person charge.", 
		"When checking our calendar, a day with a line through it (and a cabin number in that line) means that the cabin is booked for that night.",
		"We sometimes have cancellations, so let us know if you want to be contacted if a date opens up.",
		"And we have an agility area with plenty of equipment to set up a course. We are happy to provide an intro to the sport and the obstacles.",
		"All guests must agree to and sign a ",
		" outlining property policies."
		],
	}

		// {
		// heading: "Rates, Policies and Amenities",
		// content:"The base nightly rate is $169 plus tax, with a two-night minimum on weekends. <br> Weekday one-night stays are $179 plus tax. <br> Each cabin is designed for two people. <br> $25 a night for extra people, including children. <br> There are no charges or limits for dogs. <br> Check the calendar for availability, and call us to book. <br> Check-in is 3 p.m. and check-out is noon unless circumstances allow flexibility. <br> <br> Amenities include: fenced yard at cabin, screened porch, patio, grill, jetted tub, compact but full kitchen, central heat and air, wi-fi, local TV, DVD player, iPod dock, dog stuff (bowls, towels, sheets, crates, etc)."

		// }


	]




$('#cabin1').on('click', function() {
	$('.greenBlock').empty();
	var content = '<br><h4 class="whiteText" id="mainInfo">' +info[1].heading+ '</h4><p id="mainInfoText">' +info[1].content+ '</p><a href="http://www.deckercreek.com/galleries/hilltop/hilltop.html" target="_blank"><img src=' +info[1].image+ '></a><br><br>';
	$('.greenBlock').html(content);

});

$('#cabin2').on('click', function() {
	$('.greenBlock').empty();
	var content = '<br><h4 class="whiteText" id="mainInfo">' +info[2].heading+ '</h4><p id="mainInfoText">' +info[2].content+ '</p><a href="http://www.deckercreek.com/galleries/cabin_2/cabin_2.htm" target="_blank"><img src=' +info[2].image+ '></a><br><br>';
	$('.greenBlock').html(content);

});

$('#aboutUs').on('click', function() {
	$('.greenBlock').empty();
	// var content = '<br><h4 class="whiteText" id="mainInfo">' +info[3].heading+ '</h4><p id="mainInfoText">' +info[3].content+ '</p><br><strong><a href="mailto:pat.rathbun@gmail.com">' +info[3].email+ '</a><br></strong><strong><a href="tel:+1-512-743-8835">' +info[3].phone+ '</a> <br> <a href="tel:+1-512-743-8090">' +info[3].phone2+ '</a></strong><br><br>';
	var content = '<br><h4 class="whiteText" id="mainInfo">' +info[3].heading+ '</h4><p id="mainInfoText">' +info[3].content+ '</p><a href="http://www.texasbb.org" target="_blank"><img class="texasBBBLogoSize" src=' +info[3].image+ '></a><br><br>';
	$('.greenBlock').html(content);

});

$('#ratesPolicies').on('click', function() {
	$('.greenBlock').empty();
	var content = '<br><h4 class="whiteText" id="mainInfo">' +info[4].heading+ '</h4><p id="mainInfoText"><ul class="listStyle"><li>' +info[4].policies[0]+ '</li><li>' +info[4].policies[1]+ '</li><li>' +info[4].policies[2]+ '</li><li>' +info[4].policies[3]+ '</li><li>' +info[4].policies[4]+ '</li><li>' +info[4].policies[5]+  '<li>' +info[4].policies[6]+ '<a href="img/Release_Form.pdf"> release form </a>' +info[4].policies[7]+ '</li>';
	// var content = '<br><h4 class="whiteText" id="mainInfo">' +info[4].heading+ '</h4><p id="mainInfoText">' +info[4].policies;
	$('.greenBlock').html(content);

});

$('#ratesPoliciesIMG').on('click', function() {
	$('.greenBlock').empty();
	var content = '<br><h4 class="whiteText" id="mainInfo">' +info[4].heading+ '</h4><p id="mainInfoText"><ul class="listStyle"><li>' +info[4].policies[0]+ '</li><li>' +info[4].policies[1]+ '</li><li>' +info[4].policies[2]+ '</li><li>' +info[4].policies[3]+ '</li><li>' +info[4].policies[4]+ '</li><li>' +info[4].policies[5]+  '<li>' +info[4].policies[6]+ '<a href="img/Release_Form.pdf"> release form </a>' +info[4].policies[7]+ '</li>';
	// var content = '<br><h4 class="whiteText" id="mainInfo">' +info[4].heading+ '</h4><p id="mainInfoText">' +info[4].policies;
	$('.greenBlock').html(content);

});

// Trying to get the Rates button to toggle from desktop to mobile.

// $('#ratesPoliciesSmall').on('click', function() {
// 	$('.greenBlock').empty();
// 	var content = '<br><h4 class="whiteText" id="mainInfo">' +info[4].heading+ '<br></h4><p id="mainInfoText"><ul class="listStyle"><li>' +info[4].policies[0]+ '</li><li>' +info[4].policies[1]+ '</li><li>' +info[4].policies[2]+ '</li><li>' +info[4].policies[3]+ '</li><li>' +info[4].policies[4]+ '</li><li>' +info[4].policies[5]+ '</li>' + '<br><br><br><br>';
// 	// var content = '<br><h4 class="whiteText" id="mainInfo">' +info[4].heading+ '</h4><p id="mainInfoText">' +info[4].content;
// 	$('.greenBlock').html(content);

// });




// 

$('.bootpopup').click(function(){
    var frametarget = $(this).attr('href');
  var targetmodal = $(this).attr('target');
  if (targetmodal == undefined) {
    targetmodal = '#popupModal';
  } else { 
    targetmodal = '#'+targetmodal;
  }
  if ($(this).attr('title') != undefined) {
    $(targetmodal+ ' .modal-header h3').html($(this).attr('title'));
    $(targetmodal+' .modal-header').show();
  } else {
     $(targetmodal+' .modal-header h3').html('');
    $(targetmodal+' .modal-header').hide();
  }  
    $(targetmodal).on('show', function () {
        $('iframe').attr("src", frametarget );   
	});
    $(targetmodal).modal({show:true});
  return false;
    
});

});  // Opening Document Ready





