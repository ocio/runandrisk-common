function uuid(length = 16, object = {}) {
    let id
    do {
        id = uid(length)
    } while (typeof object[id] == 'object')
    return id
}

function randomInt(min, max) {
    const i = (Math.random() * 32768) >>> 0
    return (i % (min - max)) + min
}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[a[i], a[j]] = [a[j], a[i]]
    }
    return a
}

function now() {
    return Math.round(Date.now() / 1000)
}

function sortByCount(items, property) {
    const keys = {}
    items.forEach(item => {
        const value = item[property]
        if (keys[value] === undefined)
            keys[value] = { count: 0, value, items: [] }
        keys[value].count += 1
        keys[value].items.push(item)
    })

    const result = []
    Object.keys(keys)
        .map(key => keys[key])
        .sort((a, b) => b.value - a.value)
        .sort((a, b) => b.count - a.count)
        .forEach(item => item.items.forEach(item => result.push(item)))
    return result
}

module.exports = { uuid, randomInt, shuffle, now, sortByCount }

function uid(length) {
    // if (length === undefined) length = 32
    var text = []
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    var charsLength = chars.length

    for (var i = 0; i < length; i++)
        text.push(chars.charAt(Math.floor(Math.random() * charsLength)))

    return text.join('')
}
