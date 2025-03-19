for (let i = 1; i < 11; i++) {
	// Takes i and counts to 10 starting from 1
	console.log(i);
}

i = 1; // Takes i and counts to 10 starting from 1
while (i < 11) {
	console.log(i);
	i++;
}
/* The for loop has i declared in the loop, while the while loop has i declared outside of the loop. Both loops will count to 10 starting from 1. */

const favGames = [
	// Array of favorite games
	"Monochrome Mobius: Rights and Wrongs Forgotten",
	"The Legend of Zelda Twilight Princess",
	"Monster Hunter Wilds",
	"Sonic Adventure 2 Battle",
	"Pathfinder Wrath of the Righteous",
];

for (let i = 0; i < favGames.length; i++) {
	// Shows list of favorite games in the form of item # and game
	console.log(`Item ${i + 1}: ${favGames[i]}`);
}

const players = [
	// Array of players
	{ player: "Raiblis", kills: 10, deaths: 2 },
	{ player: "Kai", kills: 5, deaths: 3 },
	{ player: "Jade", kills: 7, deaths: 5 },
];
