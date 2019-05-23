const TILE = {
    COTTAGE: 0,
    VILLAGE: 1
}

const INSTRUCTION = {
    CONQUEST: 0, // when troops CONQUEST a tile
    ADD: 1 // add units
}

const GAME_STATUS = {
    WAITING_PLAYERS: 'WAITING_PLAYERS',
    PLAYING: 'PLAYING'
}

module.exports = { TILE, INSTRUCTION, GAME_STATUS }
