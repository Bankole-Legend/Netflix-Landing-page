// Grabing all the icons
const boxes = document.querySelectorAll('tab-item');
const tabContent = document.querySelectorAll('tab-content-item');

function showItem(){
    removeBorder()
    this.classList.add('tab-border')
}

function removeBorder() {
    boxes.forEach(box => box.classList.remove('tab-border'))
}
function removeBorder() {
    tabContent.forEach(box => box.classList.remove('show'))
}


boxes.forEach(item => item.addEventListener('click', showItem))

