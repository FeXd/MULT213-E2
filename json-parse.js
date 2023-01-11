const wnba_player_data = `{
    "players": [
        {
            "name": "A'ja Wilson",
            "team": "Las Vegas Aces",
            "points_per_game": 20.5,
            "rebounds_per_game": 8.5,
            "assists_per_game": 2.0
        },
        {
            "name": "Breanna Stewart",
            "team": "Seattle Storm",
            "points_per_game": 18.0,
            "rebounds_per_game": 8.8,
            "assists_per_game": 3.4
        },
        {
            "name": "Nneka Ogwumike",
            "team": "Los Angeles Sparks",
            "points_per_game": 19.7,
            "rebounds_per_game": 9.1,
            "assists_per_game": 1.5
        },
        {
            "name": "Kelsey Plum",
            "team": "Las Vegas Aces",
            "points_per_game": 17.5,
            "rebounds_per_game": 2.8,
            "assists_per_game": 5.1
        }
    ]
}`;

const data = JSON.parse(wnba_player_data);

console.log(data);

for (let i = 0; i < data.players.length; i++) {
    let player = data.players[i].points_per_game;
    console.log(player);
}

// Some quick notes about data types
const example_numbers = [7, 42, 9001, 8.98, 29, 3.14];

// To get ONE item out of the array, we use the index
console.log(example_numbers[0]); // will log 7

// JavaScript Objects - remember key value
let example_object = {"name":"Arlin"};

// To get values out of JavaScript Object, we need the key
console.log(example_object['name']);
console.log(example_object.name); // dot notation
