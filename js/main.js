function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth',
    })
}

var button = document.querySelector('.a');

button.addEventListener('click', () => {
    console.log('You click a button')
})