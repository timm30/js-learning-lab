let homeScore = 0
let guestScore = 0

let homeScoreEl = document.getElementById('home-score')
let guestScoreEl = document.getElementById('guest-score')

let homeBoardEl = document.getElementById('home-board')
let guestBoardEl = document.getElementById('guest-board')

function addHome(score) {
    homeScore += score
    homeScoreEl.textContent = homeScore
    updateLeader()
}

function addGuest(score) {
    guestScore += score
    guestScoreEl.textContent = guestScore
    updateLeader()
}

function resetScore() {
    homeScore = 0
    guestScore = 0

    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore
    updateLeader()
}

function updateLeader() {
    if (homeScore > guestScore) {
        homeBoardEl.classList.add('leading')
        guestBoardEl.classList.remove('leading')
    } else if 
    (guestScore > homeScore) {
        homeBoardEl.classList.remove('leading')
        guestBoardEl.classList.add('leading')
    } else {
        homeBoardEl.classList.remove('leading')
        guestBoardEl.classList.remove('leading')
    }
}