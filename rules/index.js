const { TILE } = require('../const')
// const { now } = require('../utils')

function calcScore({ kills, power, units }) {
    return Math.round(kills * 1 + power * 5 + units * 2)
}

function calcPercentageConquered({ conquered, tile_type }) {
    return conquered + (tile_type === TILE.COTTAGE ? 2 : 1)
}

function isAllowedToSendUnits({ owner_from, owner_to, player_index }) {
    return (
        owner_from === undefined ||
        owner_to === undefined ||
        owner_from === player_index ||
        owner_to === player_index
    )
}

function calcRecruitment({ power, clicks }) {
    return Math.round((power * clicks) / 200)
}

module.exports = {
    calcScore,
    isAllowedToSendUnits,
    calcRecruitment,
    calcPercentageConquered
}
