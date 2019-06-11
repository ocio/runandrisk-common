const { now } = require('../utils')

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

function nextRecruitment() {
    return now() + 3 * 60 // timestamp + minutes * seconds
}

function stopRecruitment(n) {
    return n + 30 // seconds
}

module.exports = {
    calcScore,
    isAllowedToSendUnits,
    nextRecruitment,
    stopRecruitment
}
