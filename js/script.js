// Строгий режим
"use strict"

document.addEventListener('click', documentAction)

function documentAction(e) {
    const targetElement = e.target
    
    targetElement.closest('.icon-menu') ? document.body.classList.toggle('menu-open') : null

    if (targetElement.closest('[data-spoller]')) {
        const currentElement = targetElement.closest('[data-spoller]')
        if (!currentElement.nextElementSibling.classList.contains('--sliding')) {
            currentElement.classList.toggle('active')
        }
        // currentElement.nextElementSibling.hidden = !currentElement.nextElementSibling.hidden
        slideToggle(currentElement.nextElementSibling)

        // if (currentElement.nextElementSibling.hidden === true) {
        //     currentElement.nextElementSibling.hidden === false 
        // } else {
        //     currentElement.nextElementSibling.hidden === true
        // }
    }
}

const spollers = document.querySelectorAll('[data-spoller]') 

if (spollers.length) {
    spollers.forEach(spoller => {
        spoller.nextElementSibling.hidden = true
    })
}

let slideDown = (target, duration = 500) => {
    if (!target.classList.contains('--sliding')) {
        target.classList.add('--sliding')
        target.hidden = false
        let height = target.offsetHeight
        
        target.style.paddingTop = 0
        target.style.paddingBottom = 0
        target.style.marginTop = 0
        target.style.marginBottom = 0

        target.style.overflow = 'hidden'
        target.style.height = 0

        target.offsetHeight

        target.style.transitionProperty = `height, margin, padding`
        target.style.transitionDuration = `${duration}ms`
        
        target.style.height = `${height}px`

        target.style.removeProperty('padding-top')
        target.style.removeProperty('padding-bottom')
        target.style.removeProperty('margin-top')
        target.style.removeProperty('margin-bottom')

        setTimeout(() => {    
            target.style.removeProperty('height')
            target.style.removeProperty('overflow')
            target.style.removeProperty('transition-duration')
            target.style.removeProperty('transition-property')
            target.classList.remove('--sliding')
        }, duration) 
    }
}
let slideUp = (target, duration = 500) => {
    if (!target.classList.contains('--sliding')) {
        target.classList.add('--sliding')
        let height = target.offsetHeight

        target.style.transitionProperty = `height, margin, padding`
        target.style.transitionDuration = `${duration}ms`
        target.style.height = `${height}px`

        target.offsetHeight
        
        target.style.overflow = 'hidden'
        target.style.paddingTop = 0
        target.style.paddingBottom = 0
        target.style.marginTop = 0
        target.style.marginBottom = 0

        
        target.style.height = 0
        
        
        setTimeout(() => {
            target.style.removeProperty('padding-top')
            target.style.removeProperty('padding-bottom')
            target.style.removeProperty('margin-top')
            target.style.removeProperty('margin-bottom')

            target.style.removeProperty('height')
            target.style.removeProperty('overflow')
            target.style.removeProperty('transition-duration')
            target.style.removeProperty('transition-property')
            target.classList.remove('--sliding')

            target.hidden = true
        }, duration) 
    }
}
let slideToggle = (target, duration = 500) => {
    target.hidden ? slideDown(target, duration) : slideUp(target, duration)
}