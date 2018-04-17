
let app = document.getElementById("app");

let gamesList = document.getElementById("gamesList");
let genresList = document.getElementById("genresList");
let idealList = document.getElementById("idealList");
let playerList = document.getElementById("playerList");
let mechanicsList = document.getElementById("mechanicsList");

let games = [];
let genres = [];
let ideal = [];
let players = [];
let mechanics = [];

// ES6 way of making an ajax call - These work on 'promises' which I don't fully understand yet.
let data;

fetch('https://darrencarlin.com/games.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {

        // This is a loop to console.log all games in sample, this will be the basis of any call to adjust the filter. 
        // forEach is basically taking the games variable which is an array of objects and doing something with them.
        // Usually this is used for arrays with objects inside for simple array use a regualr javascript for loop.

        data.forEach(function (game, index) {

            //console.log(game)
            //console.log(index)

            // In order for us to be able to display cetrain items we can use this syntax
            // This is called dot notation, you can also use square bracks but I find this 
            // easier.

            //console.log(game.name) // Display the name of the game using dot notation.

            //console.log(game["difficulty"]) // Display the difficulty using square brack notation.

            // console.log(game.type) // If the items are in an array it will automatically display the entire array

            // console.log(game.type[3]) // This will display the 3rd index within type

            // These next lines are taking each item (genre, name, idealFor, players) from each game 
            // and putting them into their own array.

			
			// Games
			
			games.push(game.name);
			
			// Genres 
			
			genres.push(game.genre);
		    genres = flattenSort(genres);
			
			// Ideal 
			
			ideal.push(game.idealFor);
			ideal = flattenSort(ideal);
			 
			 // Players 
			 
			players.push(game.players.playersMax);
			players = findMax(players);
			
			// Type 
			
			mechanics.push(game.mechanics);
            mechanics = flattenSort(mechanics);
				
            // Flattening & Sorting arrays (see functions below)

             
        });

        // These functions are flattening (merging) and sorting 
		// (removing duplicates) arrays

        function flatten(arr) {
            return arr.reduce((a, b) => a.concat(b), [])
        }

        function flattenSort(arr) {
            return [...new Set(arr.reduce((a, b) => a.concat(b), []))]
        }

        function findMax(arr) {
            return [Math.max(...arr)];
        }

        // These loops are for populating the drop down menus in the HTML, we 
		// are using template strings which are called 'back ticks' which are  
		// a little more convienet than normal string building.


        for (let i = 0; i < games.length; i++) {
            gamesList.innerHTML += `<option value="${games[i]}"> ${games[i]} </option>`;

        }

        for (let i = 0; i < genres.length; i++) {
            genresList.innerHTML += `<option value="${genres[i]}"> ${genres[i]} </option>`;
        }

        for (let i = 0; i < ideal.length; i++) {
            idealList.innerHTML += `<option value="${ideal[i]}"> ${ideal[i]} </option>`;
        }

        for (let i = 2; i <= players; i++) {
            playerList.innerHTML += `<option value="${[i]}"> ${[i]} </option>`;
        }

        for (let i = 0; i < mechanics.length; i++) {
            mechanicsList.innerHTML += `<option value="${mechanics[i]}"> ${mechanics[i]} </option>`;
        }

    })
    .catch(function (error) {
        console.log(error);
    });
