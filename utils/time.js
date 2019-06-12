function TimeServer(timestamp, ms = true) {
    const toMs = t => (ms ? t : t * 1000)
    const fromMs = t => (ms ? t : Math.round(t / 1000))
    const server = new Date(toMs(timestamp))
    const local = new Date()
    const diff = local.getTime() - server.getTime()
    const now = () => Date.now() - diff
    return {
        now: () => fromMs(now()),
        date: () => new Date(now()),
        isAfter: t => now() > toMs(t)
    }
}

// start = 1000000000 // 2001-09-09T01:46:40.000Z
// recruit = 1000000003 // 2001-09-09T01:46:40.000Z
// t = TimeServer(start, false)
// console.log(t.date())
// setTimeout(() => {
//     console.log(t.now())
//     console.log(t.date())
//     console.log(t.isAfter(recruit))
//     console.log(t.isBefore(recruit))
// }, 1000)

module.exports = TimeServer
