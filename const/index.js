const OWNER = {
    ME: 1,
    ENEMY: 2
}

const TILE = {
    COTTAGE: 0,
    VILLAGE: 1
}

const ELEMENT_TYPE = {
    VILLAGE: 'VILLAGE',
    COTTAGE: 'COTTAGE',
    TROOPS: 'TROOPS',
    LINE: 'LINE'
}

const GAME_STATUS = {
    WAITING_PLAYERS: 'WAITING_PLAYERS',
    PLAYING: 'PLAYING'
}

module.exports = {
    OWNER,
    TILE,
    ELEMENT_TYPE,
    GAME_STATUS
}

// const INSTRUCTION = {
//     BOARD: 0, // creates the board
//     CONQUEST: 1, // when troops CONQUEST a tile
//     ADD: 2, // add or substract units
//     LEAVE: 3 // when troops LEAVE a tile
// }
