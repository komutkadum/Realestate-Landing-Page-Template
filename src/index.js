function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }
  tablinks = document.getElementsByClassName('tablinks');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }
  document.getElementById(cityName).style.display = 'block';
  evt.currentTarget.className += ' active';
}
document.getElementById('defaultOpen').click();

// highlight on scroll
// Get all sections that have an ID defined
const sections = document.querySelectorAll('section[id]');
// Add an event listener listening for scroll
window.addEventListener('scroll', navHighlighter);

function navHighlighter() {
  // Get current scroll position
  let scrollY = window.pageYOffset;

  // Now we loop through sections to get height, top and ID values for each
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 80;
    let sectionId = current.getAttribute('id');
    /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
    // if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
    //   document
    //     .querySelector('.navigation a[href*=' + sectionId + ']')
    //     .classList.add('active');
    // } else {
    //   document
    //     .querySelector('.navigation a[href*=' + sectionId + ']')
    //     .classList.remove('active');
    // }
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.navigation a#' + sectionId + '1')
        .classList.add('active');
    } else {
      document
        .querySelector('.navigation a#' + sectionId + '1')
        .classList.remove('active');
    }
  });
}

// Get the modal
let modal = document.getElementById('myModal');
//letGet the button that opens the modal
let btn = document.getElementById('myBtn');
// Get the <span> element that closes the modal
let span = document.getElementsByClassName('close')[0];
// getting modal button
let modalButton = document.getElementById('modalButton');
let modalHeader = document.getElementById('modalHeader');
// When the user clicks the button, open the modal
// btn.onclick = function () {
//   modal.style.display = 'block';
// };
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none';
};

function modalDisplay(buttonText = '', headerText = '') {
  modalButton.innerText = buttonText;
  modalHeader.innerText = headerText;
  modal.style.display = 'block';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

function openNav() {
  document.getElementById('mobileNavigation').classList.toggle('hidden');
}
