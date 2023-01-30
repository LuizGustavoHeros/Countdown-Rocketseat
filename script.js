const daysText = document.querySelector('#days')
const hoursText = document.querySelector('#hours')
const minutesText = document.querySelector('#minutes')
const secondsText = document.querySelector('#seconds')

const newYearDate = new Date('1 Jan 2024')

setInterval(() => {
  const currentDate = new Date()
  const totalSeconds = (newYearDate - currentDate) / 1000

  const days = Math.floor((totalSeconds / 3600) / 24)
  const hours = Math.floor((totalSeconds / 3600) % 24)
  const minutes = Math.floor((totalSeconds / 60) % 60)
  const seconds = Math.floor(totalSeconds % 60)

  daysText.innerText = addPadStart(days)
  hoursText.innerText = addPadStart(hours)
  minutesText.innerText = addPadStart(minutes)
  secondsText.innerText = addPadStart(seconds)

}, 1000)

function addPadStart(value) {
  return value < 10 ? `0${value}` : value
}