// menu hamburguer

const hamburguer = document.querySelector('#hamburguer')

hamburguer.addEventListener('click', () => {
    const headerNav = document.querySelector('#header__nav')

    if (headerNav.classList.contains('activeNav')) {
        headerNav.classList.remove('activeNav')
        hamburguer.classList.remove('activeHamburguer')
    } else {
        headerNav.classList.add('activeNav')
        hamburguer.classList.add('activeHamburguer')
    }
})

// Slide

const leftArrow = document.querySelector('#left-direction')
const rightArrow = document.querySelector('#right-direction')
const slideContainer = document.querySelector('.slide-container')
let left = 0

leftArrow.addEventListener('click', ()=>{
    left -= 100
    if(left >= 0){
        slideContainer.style.left = `-${left}%`
    }else{
        left = 0
    }
})

rightArrow.addEventListener('click', ()=>{
    if(left < 200){
        left += 100
        slideContainer.style.left = `-${left}%`
    }
})

// Portfolio Section

/* botoes */

let portfolioButtons = document.querySelectorAll('.buttons-button')
let portfolioButtonsGreenActive = document.querySelector('.buttons-button--green-active')

/* imagens */
let portfolioCards = document.querySelectorAll('.portfolio-card')
let portfolioAppCards = document.querySelectorAll('.portfolio-card--app')
let portfolioWebCards = document.querySelectorAll('.portfolio-card--web')
let portfolioCardCards = document.querySelectorAll('.portfolio-card--card')
let imgCards = []

/* close overlay */

const closeButton = document.querySelector('.close-overlay')

/* overlay de imagens */

let backgroundOverlay = document.querySelector('.portfolio-section__overlay')
let imgOverlay = document.querySelector('#img-overlay')
let portfolioImages = document.querySelectorAll('.portfolio-img')
let imgItems = []


portfolioCards.forEach((card, index)=>{
    imgCards.push(card)
})

portfolioButtons.forEach((buttonSelect, index)=>{
    buttonSelect.addEventListener('click', function(){
        selectCardType(buttonSelect, index)
    })
})

function selectCardType(buttonSelect, index){
    let cards = imgCards
    cards.forEach(function(cardItem){
        if(index === 0){
            if(cardItem.classList.contains('portfolio-card')){
                cardItem.style.display = 'flex'
            }
        }else if(index === 1){
            if(cardItem.classList.contains('portfolio-card--app')){
                buttonSelect.classList.add('buttons-button--green-active')
                cardItem.style.display = 'flex'
            }else{
                buttonSelect.classList.remove('buttons-button--green-active')
                cardItem.style.display = 'none'
            }
        }else if(index === 2){
            if(cardItem.classList.contains('portfolio-card--web')){
                cardItem.style.display = 'flex'
            }else{
                buttonSelect.classList.remove('buttons-button--green-active')
                cardItem.style.display = 'none'
            }
        }else if(index === 3){
            if(cardItem.classList.contains('portfolio-card--card')){
                buttonSelect.classList.add('buttons-button--green-active')
                cardItem.style.display = 'flex'
            }else{
                buttonSelect.classList.remove('buttons-button--green-active')
                cardItem.style.display = 'none'
            }
        }
    })
}



portfolioImages.forEach((imgItem, imgIndex)=>{
    imgItems.push(imgItem)
})

imgCards.forEach((cardClick, cardClickIndex)=>{
    cardClick.addEventListener('click', function(){
        let imgItem = imgItems[cardClickIndex]
        if(imgItem){
            backgroundOverlay.classList.add('active-overlay')
            imgOverlay.src = imgItem.src
        }
    })
})

closeButton.addEventListener('click', ()=>{
    backgroundOverlay.classList.remove('active-overlay')
})