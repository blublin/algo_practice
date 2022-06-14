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
console.log(connections);


function bfs(start, target) {

    // FIFO To-Be-Checked array
    const queue = [start]
    // Been-Checked set (unique)
    const seen = new Set();

    // While there is something in queue
    while (queue) {

        // pop off from start
        const airport = queue.shift();

        // get the array value from connection
        const destinations = connections.get(airport);

        // iterate through the array of destinations, the values of the airport in the Map object
        for (const destination of destinations) {

            // Check if we fonud the target
            if (destination === target) {
                    console.log (`I found the target: ${target}`);
                }
            
            // If we haven't seen this airport before
            if ( !seen.has(destination))  {
                // Add it to seen
                seen.add(destination);
                // Add it to the To-Be-Checked array
                queue.push(destination);
                console.log(destination);
            }
        }
    }
}

bfs('PHX', 'BKK');