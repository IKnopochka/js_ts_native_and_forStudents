
const sml = document.getElementById('small')
const mdm = document.getElementById('medium')
const big = document.getElementById('big')

const a = document.getElementById('a')

function onClickHandler(e) {
    e.stopPropagation()
    console.dir(`${e.currentTarget.id}`)
}

function onClickHandlerForA(e) {
    e.preventDefault()
    console.dir(`${e.currentTarget.id}`)
}

sml.onclick = onClickHandler
mdm.onclick = onClickHandler
big.onclick = onClickHandler

sml.addEventListener('click', onClickHandler)
sml.addEventListener('click', onClickHandler,true)

sml.removeEventListener('click', onClickHandler)
sml.removeEventListener('click', onClickHandler, true)

a.addEventListener('click', onClickHandlerForA)