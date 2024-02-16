// Строгий режим
"use strict"

document.addEventListener('click', documentAction)

function documentAction(e) {
    const targetElement = e.target
    
    targetElement.closest('.icon-menu') ? document.body.classList.toggle('menu-open') : null
}