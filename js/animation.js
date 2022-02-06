// ADD NEW LETTER
const animateTileBounce = (tile) => {
    tile.classList.add('is-filled', 'animate__animated', 'animate__bounceIn')
}

// SUBMIT NON-EXISTANT WORD
const animateRowShake = (row) => {
    row.classList.animate('animate__shake')

    setTimeout(() => {
        row.classList.add('animate__animated', 'animate__shake')
    }, 0)
}

// SUBMIT EXISTING WORD
const animateTileReveal = (row) => {

    row.querySelectorAll('.tile').forEach((tile, index) => {
        tile.classList.remove('animate__bounceIn', 'animate__flipInY')

        setTimeout(() => {
            tile.style.visibility = 'visible'
            tile.classList.add('animate__flipInY', `animate__delay-${index}s`)
        }, 0)
    })

}

// CORRECT WORD!!
const animateTileDance = (row) => {

    row.querySelectorAll('.tile').forEach((tile, index) => {
        tile.innerHTML = solution.charAt(index)

        tile.classList.remove('animate__bounceIn', 'animate__flipInY', 'animate__bounce')

        setTimeout(() => {
            tile.classList.add('animate__bounce', `animate__delay-${index}s`)
        }, 0)
    })

}

// WHOLE BOARD FALLS
const youVeryMuchLose = () => {
    let board = document.querySelector('.board')
    board.classList.add('animate__animated', 'animate__hinge')
}
