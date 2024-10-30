let star = document.getElementById('star')
let moon = document.getElementById('moon')
let mountains3 = document.getElementById('mountains3')
let mountains4 = document.getElementById('mountains4')
let river = document.getElementById('river')
let boat = document.getElementById('boat')
let haru = document.querySelector('.haru')

window.onscroll = function() {
    let value = scrollY
    star.style.left = value + 'px';
    moon.style.top = value * 3 + 'px';
    mountains3.style.top = value * 2 + 'px';
    mountains4.style.top = value * 1.5 + 'px';
    river.style.top = value + 'px';
    boat.style.top = value + 'px';
    boat.style.left = value + 'px';
    haru.style.fontSize = value + 'px';
    if (scrollY >= 70) {
        haru.style.fontSize = 70 + 'px';
        haru.style.position = 'fixed';
        if(scrollY >= 300) {
            haru.style.display = 'none';
        } else {
            haru.style.display = 'block';
        }
    }

    // 379
}