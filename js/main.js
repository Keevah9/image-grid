
const leftArrow = document.querySelector('.leftArrow')
const rightArrow = document.querySelector('.rightArrow')
const mainImg = document.querySelectorAll('img')
const modalImg = document.querySelector('.modalImg')
const modal = document.querySelector('.images')

mainImg.forEach(items => {
     items.addEventListener('click', (e) => {
        const selected = e.target
        if(selected.id === 'myImg' ){
            modal.style.display = 'block'
            modalImg.src = selected.dataset.biggerSrc || selected.src
        }
        console.log(selected.id)
    })
    const closeBtn = document.querySelector('.closeBtn')
    closeBtn.addEventListener('click', ()=>{
        modal.style.display = 'none'
    })
})
