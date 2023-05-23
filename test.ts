let item = 0
basic.forever(function () {
    whaleysans.showNumber(item)
    item += 1
    if (item > 120) {
        item = 0
    }
})