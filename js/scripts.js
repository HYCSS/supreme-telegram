/*                                                                                               *\
                   .__                       __                                            
             ____  |  |__    ____    _______/  |_    ____________  _____     ____    ____  
            / ___\ |  |  \  /  _ \  /  ___/\   __\  /  ___/\____ \ \__  \  _/ ___\ _/ __ \ 
           / /_/  >|   Y  \(  <_> ) \___ \  |  |    \___ \ |  |_> > / __ \_\  \___ \  ___/ 
           \___  / |___|  / \____/ /____  > |__|   /____  >|   __/ (____  / \___  > \___  >
          /_____/       \/              \/              \/ |__|         \/      \/      \/ 
                           __    .__ .__   .__           .__             
                          |  | __|__||  |  |  |  _____   |  |__    ______
                          |  |/ /|  ||  |  |  |  \__  \  |  |  \  /  ___/
                          |    < |  ||  |__|  |__ / __ \_|   Y  \ \___ \ 
                          |__|_ \|__||____/|____/(____  /|___|  //____  >
                               \/                     \/      \



                                        P  R  E  S  E  N  T


              .__                      __                    _____.___.               
              |  |__  _____     ____  |  | __  ____  _______ \__  |   |  ____   __ __ 
              |  |  \ \__  \  _/ ___\ |  |/ /_/ __ \ \_  __ \ /   |   | /  _ \ |  |  \
              |   Y  \ / __ \_\  \___ |    < \  ___/  |  | \/ \____   |(  <_> )|  |  /
              |___|  /(____  / \___  >|__|_ \ \___  > |__|    / ______| \____/ |____/ 
                   \/      \/      \/      \/     \/          \/                      
                     .___                 .__                                 .___                
   ____    ____    __| _/  ____     ____  |  |__  _____   _______ _____     __| _/  ____    ______
 _/ ___\  /  _ \  / __ | _/ __ \  _/ ___\ |  |  \ \__  \  \_  __ \\__  \   / __ | _/ __ \  /  ___/
 \  \___ (  <_> )/ /_/ | \  ___/  \  \___ |   Y  \ / __ \_ |  | \/ / __ \_/ /_/ | \  ___/  \___ \ 
  \___  > \____/ \____ |  \___  >  \___  >|___|  /(____  / |__|   (____  /\____ |  \___  >/____  >
      \/              \/      \/       \/      \/      \/              \/      \/      \/      \/ 

\*                                                                                               */

//  ------------- SCRIPTS -------------


// CHARADES CARDS ---------------------

var round1 = [
	"fatal error",
	"nesting",
	"strong",
	"z-index",
	"focus",
	"closure",
	"API key",
	"Ajax call",
	"list item",
	"search and replace",
	"ladies learning code",
	"fishbowl",
	"touch",
	"react",
	"blockquote",
	":before",
	":after",
	"hover",
	"wrapper",
	"push",
	"handlebars",
	"link",
	"scope",
	"extends",
	"header",
	"footer",
	"body",
	"fetch",
	"gulp watch",
	"padding",
	"sick!",
	"slice",
	"flexbox",
	"flex-wrap",
	"float",
	"loop",
	"child element",
	"parent element",
	"pizza"
]

var round2 = [
	"curly braces",
	"hero image",
	"font awesome",
	"promise",
	"add class",
	"embed",
	"deploy",
	"help cue",
	"smooth scroll",
	"form",
	"SASS",
	"mixins",
	"closure",
	"ghost space",
	"callback function",
	"marquee",
	"fat arrow",
	"responsive",
	"position: fixed",
	"clearfix",
	"fade in",
	"important!",
	"Simon Bloom",
	"event listener", 
	"JavaScript",
	"master branch",
	"filter",
	"flickity",
	"canvas",
	"calc()",
	"sibling element",
	"box sizing",
	"carousel", 
	"background image",
	"Salad Clurb"
]

var round3 = [
	"margin 0 auto",
	"internet explorer",
	"terminal",
	"Homeward Bound",
	"span",
	"repeater field",
	"concatinate",
	"git init",
	"git push master origin",
	"dank meme",
	"if...else statement",
	"jQuery",
	"masonry",
	"firebase",
	"bahn mi boys",
	"Sylvia Nguyen",
	"Ryan Christiani",
	"nth-child",
	"div",
	"Red Hot Chili Peppers",
	"Jack Nicholson in 1974"
]



// Arrive on page and the avatar screen is displayed with instructions


// User clicks start button
// Screen fades to play mode 
$('.start-button').on('click', function(){
	$('.screen-1').css('opacity', '0');
	$('.screen-2').css('opacity', '1');
	startGame();
});
// Clock is at 2:00min (120seconds)
// Team 1 clicks start button and random chrades card appears 
var startGame = function(){
	//start at 120 sec
	var seconds = 120;
	
	var countdown = window.setInterval(function(){
		//update div.timer with seconds left
		$('.timer').html(seconds);
		if (seconds===0) {
			//when time is up stop countdown and empty div
			window.clearInterval(countdown);
			$('.timer').html('');
		}seconds--;//decrease seconds by 1

	},1000);
}
// Countdown clock begins
// Every time user hits space bar a new charades card appears and a point is added to that team's total
// When clock reaches 0 an overlay appears asking for the next team to come up.
// Round 2 begins
// Team 1 clicks start button and random chrades card appears 
// Countdown clock begins
// Every time user hits space bar a new charades card appears and a point is added to that team's total
// When clock reaches 0, overlay appears asking for hte next team to come up.
// Round 3 begins
// Team 1 clicks start button and random chrades card appears 
// Countdown clock begins
// Every time user hits space bar a new charades card appears and a point is added to that team's total
// When clock reaches 0, overlay appears asking for hte next team to come up.
// Final points are displayed on the screen.





$(window).keypress(function(e) {
    if (e.which === 32) {


    }
});