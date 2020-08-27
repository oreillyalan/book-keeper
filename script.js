const modal = document.getElementById('modal');
const modalShow = document.getElementById('show-modal');
const modalClose = document.getElementById('close-modal');
const bookmarkForm = document.getElementById('bookmark-form');
const websiteNameEl = document.getElementById('website-name');
const websiteUrlEl = document.getElementById('website-url');
const bookmarksContainer = document.getElementById('bookmarks-container');

// Event Handler
function showModal(){
    modal.classList.add('show-modal');
    websiteNameEl.focus();
}
function removeModal(){
    modal.classList.remove('show-modal');
}

function isModalShowingCheck(e){
   e.target === modal ? removeModal() : false; 
}

// Event Listener
modalShow.addEventListener('click', showModal);
modalClose.addEventListener('click', () => modal.classList.remove('show-modal'));
window.addEventListener('click', (e)=> isModalShowingCheck(e)); 