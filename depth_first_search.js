// Data
const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');

const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'], 
    ['MEX', 'BKK'], 
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK']
];

// GRAPH/TREE
// Object with extra features
const connections = new Map();

// Add Node
function addNode(airport) {
    // 1 airport in, set airport as key with value of empty array
    // Add a NODE object
    connections.set(airport, []);
}

function addEdge(origin, destination) {
    // Get array value, add new destination
    connections.get(origin).push(destination);
    // Undirected, so add both ways
    connections.get(destination).push(origin);
}

// Iterate through airports and pass each airport to addNode
airports.forEach(addNode);
// Iterate through routes and pass each array to addEdge
routes.forEach(route => addEdge(route[0], route[1]));

// Test output connections to see all origins and destinations
// console.log(connections);

const dfs = (start, target, alreadySeen = new Set(), steps = 0) => {


    console.log(`Currently at ${start} after ${steps} steps.`);
    // Add to set of alreadySeen 
    alreadySeen.add(start);

    const destinations = connections.get(start);



    for (const dest of destinations) {
        steps = steps + 1;
        if (dest === target) {
            return `Depth First Search found ${target} in ${steps} steps.`
        }
        // If we have not yet seen this destination
        if (!alreadySeen.has(dest)){
            // recursively call with new destination
            dfs(dest, target, alreadySeen, steps);
        }
    }
}

dfs('PHX', 'BKK')