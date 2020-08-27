const modal = document.getElementById('modal');
const modalShow = document.getElementById('show-modal');
const modalClose = document.getElementById('close-modal');
const bookmarkForm = document.getElementById('bookmark-form');
const websiteNameEl = document.getElementById('website-name');
const websiteUrlEl = document.getElementById('website-url');
const bookmarksContainer = document.getElementById('bookmarks-container');

let bookmarks = [];


// Event Handlers
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

function storeBookmarkFunction(e){
    e.preventDefault();
    const nameValue = websiteNameEl.value;
    let urlValue = websiteUrlEl.value;
    !urlValue.includes('http://','https://') ? urlValue = `https://${urlValue}` : false;
    if(!validate(nameValue, urlValue)){
        return false;
    }
    const bookmark = {
        name : nameValue,
        url : urlValue,
    };
    bookmarks.push(bookmark);
    localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
    bookmarkForm.reset();
    websiteNameEl.focus();

}


// Event Listeners
modalShow.addEventListener('click', showModal);
modalClose.addEventListener('click', () => modal.classList.remove('show-modal'));
window.addEventListener('click', (e)=> isModalShowingCheck(e)); 
bookmarkForm.addEventListener('submit', storeBookmarkFunction);


// Validate Form
function validate(nameValue, urlValue){
    const expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;
    const regex = new RegExp(expression);
    if(!nameValue || !urlValue) {
        alert('Please enter data for both fields');
        return false;
    }

    if(!urlValue.match(regex)){ 
        alert('Please provide a valid web address');
        return false;
    }

    return true;
}
