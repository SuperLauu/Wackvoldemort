const square = document.querySelectorAll('.square')
const voldemort = document.querySelectorAll('.voldemort')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')

let result = 0
let currentTime = timeLeft.textContent

function randomSquare() {
  square.forEach(className => {
    className.classList.remove('voldemort')
  })
  let randomPosition = square[Math.floor(Math.random() * 9)]
  randomPosition.classList.add('voldemort')

  //voldemort random
  hitPosition = randomPosition.id
}

square.forEach(id => {
  id.addEventListener('mouseup', () => {
    if (id.id === hitPosition) {
      result = result + 1
      score.textContent = result
      hitPosition = null
    }
  })
})


function moveVoldemort() {
  let timerId = null
  timerId = setInterval(randomSquare, 500)
}

moveVoldemort()


function countDown() {
  currentTime--
  timeLeft.textContent = currentTime

  if (currentTime === 0) {
    clearInterval(timerId)
    alert('GAME OVER! Tu puntuación es ' + result)
    location.reload()
  }
}

let timerId = setInterval(countDown, 1000)

