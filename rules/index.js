function calcScore({ kills, power, units }) {
    return Math.round(kills * 5 + power * 10 + units)
}

module.exports = { calcScore }
