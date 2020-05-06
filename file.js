// Grabing all the icons
const boxes = document.querySelectorAll('.tab-item');
const tabContent = document.querySelectorAll('.tab-content-item');

// This function occurs on click
function showItem(e){
    removeBorder();
    display();
    this.classList.add('tab-border');
    
    const showing = document.querySelector(`#${this.id}-content`);
    showing.classList.add('show');
    
}

// The function to remove the red border
function removeBorder() {
    boxes.forEach(box => box.classList.remove('tab-border'));
}
// The function to remove the display content
function display() {
    tabContent.forEach(box => box.classList.remove('show'));
}



boxes.forEach(box => box.addEventListener('click', showItem));

