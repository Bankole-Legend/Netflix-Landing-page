<<<<<<< HEAD
// Grabing the necessary classes
const boxes = document.querySelectorAll('.tab-item');
const tabContent = document.querySelectorAll('.tab-content-item');

// This function occurs on click
function showItem(e){
    removeBorder();
    display();
    this.classList.add('tab-border');
    
    const showing = document.querySelector(`#${this.id}-content`);
    showing.classList.add('show');
    console.log(this.id);
    
   
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

=======
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
>>>>>>> c53cfd4ebef68db56a452c94caa2cda9d6358604
