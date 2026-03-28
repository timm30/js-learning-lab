//track water, study and exercise
//initialize counter for water, study and exercise
//incremental for water, study and exercise count
//log all three

let water = 0
let study = 0
let exercise = 0

let waterEl = document.getElementById('water-count')
let studyEl = document.getElementById('study-count')
let exerciseEl = document.getElementById('exercise-count')

let logEl = document.getElementById('log-el')

function incrementWater() {
    water += 1
    waterEl.textContent = water
}

function incrementStudy() {
    study += 1
    studyEl.textContent = study
}

function incrementExercise() {
    exercise += 1
    exerciseEl.textContent = exercise
}

function save() {
    let log = `💧 ${water} | 📚 ${study} | 💪 ${exercise} - `
    logEl.textContent += log
    
    //reset
    water = 0
    study = 0
    exercise = 0
    
    waterEl.textContent = 0
    studyEl.textContent = 0
    exerciseEl.textContent = 0
    
}