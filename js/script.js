
const video = document.querySelector('.modal-trailer span')
const open = document.querySelector('.modal')
const hidden = document.querySelector('.app')
const btnClose = document.querySelector('.modal button')
const btnPoster3 = document.getElementById('btnPoster3')
const btnPoster1 = document.getElementById('btnPoster1')
const btnPoster2 = document.getElementById('btnPoster2')


const barbie = `<iframe width="900" height="500" src="https://www.youtube.com/embed/Ujs1Ud7k49M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
const Jones = `<iframe width="900" height="500" src="https://www.youtube.com/embed/VbEVNmAhYOg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
const Oppen = `<iframe width="900" height="500" src="https://www.youtube.com/embed/kEGlCYF5gaU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`




btnPoster1.onclick = () => {
    video.innerHTML = barbie
    hidden.classList.add('hidden')
    open.classList.add('open')
    
}
btnPoster2.onclick = () => {
    video.innerHTML = Oppen
    hidden.classList.add('hidden')
    open.classList.add('open')
}
btnPoster3.onclick = () => {
    video.innerHTML = Jones
    hidden.classList.add('hidden')
    open.classList.add('open')
}


btnClose.onclick = () => {
    open.classList.remove('open')
    hidden.classList.remove('hidden')
}