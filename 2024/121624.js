//Grasshopper - Create the rooms - 8kyu
/* You are creating an "Escape the room" game. The first step is to create a hash table ( dict in Python) called rooms that contains all of the rooms of the game. There should be at least 3 rooms inside it, each room being a hash table with at least 3 properties (e.g. name, description, completed). */

// Add rooms here
var rooms = { "bedroom": {name: "bedroom", description: "the room where one sleeps", completed: true},
             "office": {name: "office", description: "the room where one works", completed: false},
             "kitchen": {name: "kitchen", description: "the room where one cooks", completed: true},
}
