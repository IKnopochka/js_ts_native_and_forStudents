//handler
//listener
//subscriber

const sm = document.getElementById('small')
const md = document.getElementById('medium')
const bg = document.getElementById('big')
const onClickHandler = (e) => {
    //e.stopPropagation()
    console.dir(e)
    if(e.target.tagName === 'BUTTON'){
        alert(e.target.name)
    }

    //e.stopPropagation()
}
/*
sm.onclick = onClickHandler
sm.onclick = null*/

sm.addEventListener('click', onClickHandler)
//md.addEventListener('click', onClickHandler)
//bg.addEventListener('click', onClickHandler)

//sm.removeEventListener('click', onClickHandler)