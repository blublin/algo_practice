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
const connections = new Map();

// Add Node
function addNode(airport) {
    connections.set(airport, []);
}

function addEdge(origin, destination) {
    connections.get(origin).push(destination);
    connections.get(destination).push(origin);
}

airports.forEach(addNode);
routes.forEach(route => addEdge(...route));

console.log(connections);

function bfs(start) {

    // FIFO To-Be-Checked array
    const queue = [start]
    // Been-Checked set (unique)
    const seen = new Set();

    while (queue) {

        // pop off from start
        const airport = queue.shift();

        const destinations = connections.get(airport);

        // iterate through the array of destinations, the values of the airport in the Map object
        for (const destination of destinations) {

            queue.push(destination);
            
            if (destination === 'BKK') {
                console.log ("I found BKK");
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

bfs('PHX');