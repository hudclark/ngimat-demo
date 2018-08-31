
function updateMarsCountDown () {
    var liftoff = Date.parse('2020-1-1')
    var zeroPad = function (str) {
        return ('0' + str).slice(-2)
    }
    var diff = liftoff - new Date().getTime()
    var seconds = zeroPad(Math.floor((diff / 1000) % 60))
    var mins = zeroPad(Math.floor((diff / 1000 / 60) % 60))
    var hours = zeroPad(Math.floor((diff / (1000 * 60 * 60)) % 24))
    var days = Math.floor(diff / (1000 * 60 * 60 * 24))

    $('.countdown .days .value').text(days)
    $('.countdown .hours .value').text(hours)
    $('.countdown .minutes .value').text(mins)
    $('.countdown .seconds .value').text(seconds)
}

function beginMarsCountdown () {
    setInterval(updateMarsCountDown, 1000)
    updateMarsCountDown()
}

$(document).ready(function () {
    console.log('hello!')
    beginMarsCountdown()
})