// const { now } = require('../utils')

function calcScore({ kills, power, units }) {
    return Math.round(kills * 5 + power * 10 + units)
}

function isAllowedToSendUnits({ owner_from, owner_to, player_index }) {
    return (
        owner_from === player_index ||
        owner_to === player_index ||
        owner_to === undefined
    )
}

function calcRecruitment({ power, clicks }) {
    return Math.round((power * clicks) / 100)
}

module.exports = {
    calcScore,
    isAllowedToSendUnits,
    calcRecruitment
}
