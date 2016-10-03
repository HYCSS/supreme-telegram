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

'use strict';

// Create a namespace for the app
var hyCharades = {};

/**
 * GAME MODEL 
 *  
 * The hyCharades.model object contains a series of functions 
 * that establish the rules of the game.
 */ 

hyCharades.model = {};

// Initialize game settings
hyCharades.model.init = function() {
	hyCharades.model.teams = [
		{
			name: "Team One",
			points: 0
		},
		{
			name: "Team Two",
			points: 0
		}
	];
	hyCharades.model.turn_no = 0;
	hyCharades.model.round_no = 0;
	hyCharades.model.current_team = {};
	hyCharades.model.seconds_per_turn = 90;
	hyCharades.model.full_deck = true;
	hyCharades.model.cards = [
		[
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
		], // [0]
		[
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
		], // [1]
		[
			"margin: 0 auto",
			"internet explorer",
			"terminal",
			"Homeward Bound",
			"span",
			"repeater field",
			"concatenate",
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
		] // [2]
	];
}; // hyCharades.model.init

hyCharades.model.nextTurn = function() {
	// Determine the current team
	hyCharades.model.current_team = hyCharades.model.teams[hyCharades.model.turn_no % 2];
	// Increment the turn number
	hyCharades.model.turn_no++;
	// Start the turn with a full deck of cards
	hyCharades.model.full_deck = true;
};

hyCharades.model.nextRound = function() {
	// Increment the round number
	hyCharades.model.round_no++;
};

hyCharades.model.getCurrentTeamIndex = function() {
	return _.findIndex(hyCharades.model.teams, function(team) { 
		return team.name === hyCharades.model.current_team.name 
	});
};

hyCharades.model.addScore = function() {
	var index = hyCharades.model.getCurrentTeamIndex();
	
	// Increment the current team's points with the round multiplier
	hyCharades.model.teams[index].points += hyCharades.model.round_no;

	console.log('teams[', index, ']: +', hyCharades.model.round_no);
	console.log(hyCharades.model.teams[0].name, ': ', hyCharades.model.teams[0].points);
	console.log(hyCharades.model.teams[1].name, ': ', hyCharades.model.teams[1].points);
};

hyCharades.model.gameResult = function() {
	return hyCharades.model.teams[0].points > hyCharades.model.teams[1].points ? "Team One wins!" :
	       hyCharades.model.teams[0].points < hyCharades.model.teams[1].points ? "Team Two wins!" :
	                                                                             "It's a tie!"
	;
};

/**
 * GAME CONTROLLERS
 * 
 * Functions within the hyCharades root namespace process user input,
 * make changes to the game model data, by calling functions within hyCharades.model, 
 * and update the game state/view accordingly, by manipulating DOM elements.
 */ 

// Arrive on page and the avatar screen is displayed with instructions
hyCharades.startGame = function() {
	// When the user clicks the start button,
	// screen fades to play mode
	hyCharades.$.get('.start-btn').one('click', function() {
		hyCharades.$.get('.start-screen')
			.fadeOut(function() {
				hyCharades.$.get('.game-screen').fadeIn();
				hyCharades.$.get('.next-btn').focus();
			});
		hyCharades.startTurn();
	}).focus();
};

hyCharades.startTurn = function() {
	// Determine the current team and turn number
	hyCharades.model.nextTurn();
	
	// Determine the current round
	if (hyCharades.model.current_team.name === hyCharades.model.teams[0].name) {
		hyCharades.model.nextRound();
	}	
	
	console.info('round: ', hyCharades.model.round_no);
	console.info('turn: ', hyCharades.model.turn_no);
	console.info('current team: ', hyCharades.model.current_team.name);

	// Set the 'next' button text (next card)
	hyCharades.$.get('.next-btn')
		.off()
		.fadeOut(function() {
			hyCharades.$.get('.next-btn')
				.text("Next Card")
				.fadeIn()
				.focus()
		});

	// Show the current turn details
	hyCharades.$.get('.current-turn').text(
		"Round " + hyCharades.model.round_no + " – " + hyCharades.model.current_team.name
	);
	// Show the current round number  * Move this to updateScoreboard? *
	hyCharades.$.get('.round').text(hyCharades.model.round_no);
	// Update the scoreboard
	hyCharades.updateScoreboard();
	// Reset the timer
	hyCharades.resetTimer();
	// Start the timer
	hyCharades.setTimer();
	// Draw a card
	hyCharades.nextCard(hyCharades.model.cards);
};

hyCharades.updateScoreboard = function () {
	hyCharades.$.get('.team-one-score').text(hyCharades.model.teams[0].points);
	hyCharades.$.get('.team-two-score').text(hyCharades.model.teams[1].points);
};

hyCharades.resetTimer = function() {
	var sec = hyCharades.model.seconds_per_turn % 60,
		min = Math.floor(hyCharades.model.seconds_per_turn / 60);

	// Initialize the text content and colour of timer elements
	hyCharades.$.get('.timer-container > h3').text("Time");
	hyCharades.$.get('.timer').css('color', '#fff');
	hyCharades.$.get('.min').html(min);
	hyCharades.$.get('.sec').html(sec);
};

hyCharades.setTimer = function() {
	var seconds, countdown, sec, min;

	// Start the timer at 90 seconds
	seconds   = hyCharades.model.seconds_per_turn;
	countdown = window.setInterval(function() {
		// Utility function - display seconds with leading zero
		// when there are fewer than 10 seconds remaining
		var pad = function(n) { return n < 10 ? "0" + n : n };

		// Calculate the number of minutes and seconds left
		sec = seconds % 60;
		min = Math.floor(seconds / 60);

		// Update div.timer with minutes and seconds left
		hyCharades.$.get('.min').html(min);
		hyCharades.$.get('.sec').html(pad(sec));

		// Change colour of digits when there are fewer than 10 seconds left
		if (seconds < 10) {
			hyCharades.$.get('.timer').css('color', '#ED1C24');//.fadeOut(500).fadeIn(500);
		}
		// When time is up
		if (seconds === 0) {
			// Stop countdown and display timeout message
			window.clearInterval(countdown);
			hyCharades.$.get('.timer-container > h3').text("Time's up!");
			// End the turn
			hyCharades.endTurn();
		}		

		seconds--; // decrease seconds by 1

	},1000);
};

hyCharades.nextCard = function(cards) {
	var deck;

	// If at the beginning of the turn, use the full deck of cards
	if (hyCharades.model.full_deck === true) {
		// Shuffle the appropriate deck for the round number
		deck = _.shuffle(cards[hyCharades.model.round_no - 1]);
		// And set the full deck flag to false
		hyCharades.model.full_deck = false;
	} else {
		// Otherwise, use the reduced deck
		deck = cards;
	}

	console.log('deck', deck);
	console.log('Deck length: ', deck.length);	

	// Show the card and remove it from the deck
	hyCharades.$.get('.charades-card').html(deck.pop());

	// Add click event listener to 'next' button
	hyCharades.$.get('.next-btn').one('click', function() {
		// Increment the team's points
		hyCharades.model.addScore();
		// Update scoreboard
		hyCharades.updateScoreboard();
		// Draw the next card
		hyCharades.nextCard(deck);
	});
};

hyCharades.endTurn = function() {
	// Switch 'next' button text and click event listener
	hyCharades.$.get('.next-btn')
		.off()
		.fadeOut(function() {
			// If this is not the last turn (6), 
			// start the next turn when the 'next' button is clicked
			if (hyCharades.model.turn_no < 6) {
				hyCharades.$.get('.next-btn')
					.text("Next Turn")
					.one('click', function() {
						hyCharades.startTurn();
					});
			} else {
				// Otherwise, end the game when the 'next' button is clicked
				hyCharades.$.get('.next-btn')
					.text("Game Over")
					.one('click', function() {
						hyCharades.endGame();
					});
			}
		})
		.fadeIn()
		.focus();
};

hyCharades.endGame = function() {
	// Hide the game screen
	hyCharades.$.get('.game-screen')
		.fadeOut(function () {
			// Declare a winner (or a tie)			
			hyCharades.$.get('.winner').text(hyCharades.model.gameResult());
			// Show final scores
			hyCharades.updateScoreboard();
			// Show the result screen
			hyCharades.$.get('.result-screen').fadeIn();
			// Add click event listener to 'new game' button
			// Reset the game and return to start screen 
			// when the 'new game' button is clicked
			hyCharades.$.get('.new-game-btn')
				.one('click', function() {
					// Hide the result screen
					hyCharades.$.get('.result-screen')
						.fadeOut(function() {
							// Show the start screen
							hyCharades.$.get('.start-screen').fadeIn();
							// Reset game settings and start a new game
							hyCharades.init();
						});
				})
				.focus();
		});
};

hyCharades.init = function() {
	// Initialize game settings
	hyCharades.model.init();
	// Start the game
	hyCharades.startGame();
};

$(function() {
	// Initialize game settings and start the game
	hyCharades.init();
});

/** 
 * SELECTOR CACHE
 * 
 * Define a cache object to store jQuery selectors for improved performance,
 * using a constructor function.
 * Source: "Selector Caching in jQuery" by Eric Mann | ttmm.io/tech/selector-caching-jquery/
 */
function Selector_Cache() {
	var collection = {};

	function get_from_cache( selector ) {
		// Add the selector to the cache if not already present
		if ( undefined === collection[ selector ] ) {
			collection[ selector ] = $( selector );
		}
		return collection[ selector ];
	}

	console.log('selectors: ', collection);

	return { get: get_from_cache };
}

/**
 * Create an instance of the selector cache in the app namespace.
 * Usage $( '#element' ) becomes hyCharades.$.get( '#element' )
 */ 
hyCharades.$ = new Selector_Cache();


/*

GAMELOOP PSEUDOCODE

Countdown clock begins
Every time user hits space bar a new charades card appears and a point is added to that team's total
When clock reaches 0 an overlay appears asking for the next team to come up.
Round 2 begins
Team 1 clicks start button and random chrades card appears
Countdown clock begins
Every time user hits space bar a new charades card appears and a point is added to that team's total
When clock reaches 0, overlay appears asking for hte next team to come up.
Round 3 begins
Team 1 clicks start button and random chrades card appears
Countdown clock begins
Every time user hits space bar a new charades card appears and a point is added to that team's total
When clock reaches 0, overlay appears asking for hte next team to come up.
Final points are displayed on the screen.

*/

