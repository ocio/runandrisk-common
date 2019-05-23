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

module.exports = { uuid, randomInt, shuffle, now }

function uid(length) {
    // if (length === undefined) length = 32
    var text = []
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    var charsLength = chars.length

    for (var i = 0; i < length; i++)
        text.push(chars.charAt(Math.floor(Math.random() * charsLength)))

    return text.join('')
}
