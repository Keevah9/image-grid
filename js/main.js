

const prev = document.querySelector('.leftArrow')
const next = document.querySelector('.rightArrow')
const mainImg = document.querySelectorAll('img')
const modalImg = document.querySelector('.modalImg')
const modal = document.querySelector('.images')

mainImg.forEach(items => {
     items.addEventListener('click', (e) => {
        const selected = e.target
        if(selected.id === 'myImg' ){
            modal.style.display = 'block'
            modalImg.src = selected.src
        }
        console.log(selected.id)
    })
    const closeBtn = document.querySelector('.closeBtn')
    closeBtn.addEventListener('click', ()=>{
        modal.style.display = 'none'
    })
})

// let slideIndex = 1
// showSlides(slideIndex)

// next.addEventListener('click', (n) =>{
//     showSlides(slideIndex += n)
// })


// function current(n){
//     showSlides(slideIndex = n)
// }
// function showSlides(n){
//     let i
//     let myImage = document.getElementsByClassName('image')
//     if(n > myImage.length) {slideIndex = 1}
//     if(n < 1){slideIndex = myImage.length}
//     for( i = 0; i<myImage.length; i++){
//         myImage[i].style.display = 'none'
//     }
//     myImage[slideIndex-1].style.display = 'block'
// }