/**
 * Creates a leaderboard table given match log
 * @param {string} matchLog
 * @returns {string} leaderboard - formatted leaderboard viewable in terminal
 */
export const tournamentTally = (matchLog) => {
	// Do not change the spaces
	const header = "Team                           | MP |  W |  D |  L |  P";

	// Sample Team Object
	const team = {
		name: "Allegoric Alaskans",
		games: 3,
		wins: 1,
		draws: 1,
		losses: 1,
		points: 3,
	};

	// Sample Row for Leaderboard - follow the spaces exactly
	const leaderboardString = `${team.name.padEnd(30, " ")} |  ${
		team.games
	} |  ${team.wins} |  ${team.draws}|${team.losses}| ${team.points
		.toString()
		.padStart(2, " ")}`;

	// Write your code here
};

// Sample Test Cases
// Test Case 1
console.log(
	tournamentTally(`Allegoric Alaskans;Blithering Badgers;win
Devastating Donkeys;Courageous Californians;draw
Devastating Donkeys;Allegoric Alaskans;win
Courageous Californians;Blithering Badgers;loss
Blithering Badgers;Devastating Donkeys;loss
Allegoric Alaskans;Courageous Californians;win`)
);
// Test Case 2
console.log("\n\n\n");
console.log(
	tournamentTally(
		`Courageous Californians;Devastating Donkeys;win
Allegoric Alaskans;Blithering Badgers;win
Devastating Donkeys;Allegoric Alaskans;loss
Courageous Californians;Blithering Badgers;win
Blithering Badgers;Devastating Donkeys;draw
Allegoric Alaskans;Courageous Californians;draw`
	)
);
