const tabItems = document.querySelectorAll('.tab-item');
//this one is to grab all the tab items from the html
const tabContentItems = document.querySelectorAll('.tab-content-item');
//this one grabs all the tab contents from the individual tabs
function selectItem(e) {
    removeBorder();
    removeShow();
    //try adding border to the current tab
    this.classList.add('tab-border');
    //grab content items from the DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    //add show class
    tabContentItem.classList.add('show');
}
function removeBorder() {
    //this function helps us in removing the border from the other tab items
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow() {
    //this function helps us in removing the show from the other tab items
    tabContentItems.forEach(item => item.classList.remove('show'));
}
tabItems.forEach(item => item.addEventListener('click', selectItem));
