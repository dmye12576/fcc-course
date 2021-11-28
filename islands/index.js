var globe = [[0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
             [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
             [0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
             [0, 0, 0, 0, 1, 1, 1, 1, 0, 0],
             [0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
             [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
             [1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
             [0, 1, 0, 0, 0, 0, 0, 0, 1, 0]];

// 1 - land
// 0 - Sea
// Horizontally or Vertically, NOT diagonal
// How many islands are on the map
// 7

const positionAlreadyFound = (x, y, foundPositions) => {
    return foundPositions[x] && foundPositions[x][y]
}

const isLand = (x, y, globe) => {
    return globe[x] && globe[x][y] == 1
}

const positionFound = (x, y, foundPositions) => {
    if (!foundPositions[x]) {
        foundPositions[x] = {}
    }
    foundPositions[x][y] = true
}

const findNeighbours = (x, y, globe, foundPositions) => {
    if (positionAlreadyFound(x, y, foundPositions)) return;

    positionFound(x, y, foundPositions)
    if (isLand(x - 1, y, globe)) {
        findNeighbours(x - 1, y, globe, foundPositions)
    }

    if (isLand(x + 1, y, globe)) {
        findNeighbours(x + 1, y, globe, foundPositions)
    }

    if (isLand(x, y - 1, globe)) {
        findNeighbours(x, y - 1, globe, foundPositions)
    }

    if (isLand(x, y + 1, globe)) {
        findNeighbours(x, y + 1, globe, foundPositions)
    }
}

function countIslands(globe) {
    let islands = 0
    let foundPositions = {}

    for (let x = 0; x < globe.length; x++) {
        for (let y = 0; y < globe[x].length; y++) {
            if (globe[x][y] == 1 && !positionAlreadyFound(x, y, foundPositions)){
                findNeighbours(x, y, globe, foundPositions)
                console.log('-------------------')
                console.log(foundPositions)
                islands++
            }
        }
    }

    return islands
}


function testIslands() {
    if (countIslands(globe) == 7) {
        console.log('it works')
    } else {
        console.log('didnt work')
    }

}

testIslands()
