$(document).ready(function() {
	var info = [{
		heading: "What you'll find at Decker Creek B&amp;B&amp;B:",
		content: "Your own private cabin with screened porch, fenced yard, kitchen, patio, grill, whirlpool tub and many other amenities. Dog bowls, towels, beds, crates (available if needed) and homemade dog biscuits. A full country breakfast from local farms. Room to roam. Area guides, resources and recommendations. Nearby activities, including golf, canoeing and trail rides. Downtown Austin just 14 miles away.",
	},
	{
		heading: "Cabin 1: Hilltop",
		content: "Cabin 1/Hilltop is about 300 feet from our house and in view of the lightly used rural road. The whirlpool tub is in the living area with views of the countryside and the TV (with VCR and DVD players). The bathroom includes a spacious standing shower. The yard is mostly open with several shade trees.",
		rates: "$169/night based on two nights or more. Two-night minimum on weekends.",
		image: "img/Cabin1Thumb.jpg"
	},
	{
		heading: "Cabin 2: Treehouse",
		content: "Cabin 2/Treehouse, is down the hill away from the road, about 200 feet from Cabin 1. Here you are surrounded by trees, yet the porch is high off the ground. The whirlpool tub is in the bathroom, for more privacy. The yard is woodsy, with many trees and shrubs.",
		rates: "$169/night based on two nights or more. Two-night minimum on weekends.",
		image: "img/Cabin2Thumb.jpg"
	},
	{
		heading: "About Us",
		content: "Decker Creek B&B&B is dedicated to providing a dog-friendly rural getaway near Austin, Texas, on 50 acres of woods and meadows intersected by Decker Creek. Downtown Austin is 14 miles away. Your hosts are Pat, Byron, Beau, Razr and Shiva Rathbun. We are members of the Texas Bed and Breakfast Association.",
		// email: "Email us: <a href="mailto:pat.rathbun@gmail.com"> pat.rathbun@gmail.com </a>",
		// phone: "Call us: <a href="tel=+1-512-743-8835"> 512-743-8835 </a> / <a href="tel=+1-512-743-8090"> 512-743-8090 </a>"

		// *** Trying to make email & phone numbers clickable, but this code breaks all functionality. Try putting inside the 'on click' function instead ***
	},
	
	// {
	// 	heading: "Rates and Policies",
	// 	policies: [
	// 	"$169 a night plus tax based on double occupancy.", 
	// 	"Two-night minimum stay on weekends.", 
	// 	"$25 per-day additional person charge.", 
	// 	"All guests must agree to and sign a release form outlining property policies.",
	// 	"When checking our calendar, a day with a line through it (and a cabin number in that line) means that the cabin is booked for that night.",
	// 	"We sometimes have cancellations, so let us know if you want to be contacted if a date opens up."
	// 	],
	// }

		{
		heading: "Rates, Policies and Amenities",
		content:"The base nightly rate is $169 plus tax, with a two-night minimum on weekends. <br> Weekday one-night stays are $179 plus tax. <br> Each cabin is designed for two people. <br> $25 a night for extra people, including children. <br> There are no charges or limits for dogs. <br> Check the calendar for availability, and call us to book. <br> Check-in is 3 p.m. and check-out is noon unless circumstances allow flexibility. <br> <br> Amenities include: fenced yard at cabin, screened porch, patio, grill, jetted tub, compact but full kitchen, central heat and air, wi-fi, local TV, DVD player, iPod dock, dog stuff (bowls, towels, sheets, crates, etc)."

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

$('#ratesPolicies').on('click', function() {
	$('.greenBlock').empty();
	// var content = '<br><h4 class="whiteText" id="mainInfo">' +info[4].heading+ '</h4><p id="mainInfoText"><ul class="listStyle"><li>' +info[4].policies[0]+ '</li><li>' +info[4].policies[1]+ '</li><li>' +info[4].policies[2]+ '</li><li>' +info[4].policies[3]+ '</li><li>' +info[4].policies[4]+ '</li><li>' +info[4].policies[5]+ '</li>';
	var content = '<br><h4 class="whiteText" id="mainInfo">' +info[4].heading+ '</h4><p id="mainInfoText">' +info[4].content;
	$('.greenBlock').html(content);

});


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





