// Grabing all the icons
const boxes = document.querySelectorAll('.tab-item');
const tabContent = document.querySelectorAll('.tab-content-item');

function showItem() {
    boxes.forEach(box => box.classList.remove("tab-border"));
    tabContent.forEach(box => box.classList.remove('show'));

    this.classList.add("tab-border");
    
    document.querySelector(`#${this.id}-content`).classList.add("show");
}

boxes.forEach(item => item.addEventListener('click', showItem))
