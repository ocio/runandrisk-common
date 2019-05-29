const Honeycomb = require('honeycomb-grid')
const Hex = Honeycomb.extendHex()

function createGrid(...args) {
    return Honeycomb.defineGrid(...args)
}

function distance({ tile1, tile2 }) {
    return Hex(tile1.col, tile1.row).distance(Hex(tile2.col, tile2.row))
}

module.exports = { createGrid, distance }
