const container = document.getElementById('container')

const leftTop = document.getElementById('left-top')
const rightop = document.getElementById('right-top')
const rightBottom = document.getElementById('right-bottom')
const leftBottom = document.getElementById('left-bottom')

const handleChangeBorder = () => {
    container.style.borderRadius = `${leftTop.value}px ${rightop.value}px ${rightBottom.value}px ${leftBottom.value}px`
}

leftTop.onchange = () => handleChangeBorder()
rightop.onchange = () => handleChangeBorder()
rightBottom.onchange = () => handleChangeBorder()
leftBottom.onchange = () => handleChangeBorder()
