const container = document.querySelector("section")
const original = document.querySelector("article")

const cloned = original.cloneNode(true)
container.appendChild(cloned)

const threshold = 120

window.scrollTo(0,threshold)
window.addEventListener('scroll', () => {
    const halfH = original.clientHeight

    if(window.scrollY > halfH + threshold){
        window.scrollTo(0, window.scrollY - halfH)
    }else if (window.scrollY < threshold){
        window.scrollTo(0, halfH + window.scrollY)
    }
})