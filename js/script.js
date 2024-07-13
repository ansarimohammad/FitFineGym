// let contactus = document.querySelector('.nav').children[1].children[3];
// let contactus = document.getElementById('contact');

// contactus.addEventListener('click', ()=>{
//     alert("Hey you are clicked!!")
//     window.location.href = 'contactus.html';
// })




let hamburger = document.querySelector('.hamb-main');
let navbar = document.querySelector('.nav');
let nav_ul = document.querySelector('.ul-nav');
let hamb1 = document.querySelector('.h-resp1');
let hamb2 = document.querySelector('.h-resp2');
let header = document.querySelector('.header');


hamburger.addEventListener("click", ()=>{
    navbar.classList.toggle('nav-resp');
    nav_ul.classList.toggle('ul-resp');
    
    if (header.classList.contains("head-resp")){

        header.classList.remove("head-resp");
    } else {
        header.classList.add("head-resp");
    }

})




// SLIDER START 

// Selecting all elements with the class "prevButton" and adding event listener
document.querySelectorAll('.prev').forEach(function(button) {
    button.addEventListener('click', function() {
      let cards = document.querySelectorAll('.container6-inside .plan1');
      // Find currently visible plan1
      let visibleCard = document.querySelector('.container6-inside .invi-remove');
      if (visibleCard) {
        // Get index of visible card
        let visibleIndex = Array.from(cards).indexOf(visibleCard);
        // Hide current card
        visibleCard.classList.remove('invi-remove');
        // Show previous card if it exists
        if (visibleIndex > 0) {
          cards[visibleIndex - 1].classList.add('invi-remove');
        } else { // Otherwise, show the last card
          cards[cards.length - 1].classList.add('invi-remove');
        }
      }
    });
  });
  
  // Selecting all elements with the class "nextButton" and adding event listener
  document.querySelectorAll('.next').forEach(function(button) {
    button.addEventListener('click', function() {
      let cards = document.querySelectorAll('.container6-inside .plan1');
      // Find currently visible card
      let visibleCard = document.querySelector('.container6-inside .invi-remove');
      if (visibleCard) {
        // Get index of visible card
        let visibleIndex = Array.from(cards).indexOf(visibleCard);
        // Hide current card
        visibleCard.classList.remove('invi-remove');
        // Show next card if it exists
        if (visibleIndex < cards.length - 1) {
          cards[visibleIndex + 1].classList.add('invi-remove');
        } else { // Otherwise, show the first card
          cards[0].classList.add('invi-remove');
        }
      }
    });
  });
  

//   SLIDER END 



// // POPUP FOR NO COUPON AVAILABLE START

// Function to close the popup
function closePopup_coupon() {
  document.getElementById('overlay-notification').style.display = 'none';
  document.getElementById('popup-notification').style.display = 'none';
}

// Event listener to show the popup when the button is clicked
let N_Coupon_btn = document.getElementById('showPopupBtn-coupon');

N_Coupon_btn.addEventListener('click', ()=>{

  document.getElementById('overlay-notification').style.display = 'block';
  document.getElementById('popup-notification').style.display = 'block';

});

// // END OF POPUP FOR NO COUPON AVAILABLE 



// // START OF POPUP FORM FOR BOOK CLASS //

document.addEventListener('DOMContentLoaded', function() {
  var openPopupBtn = document.querySelectorAll('.openPopupBtn').forEach(function(button) {
    // Event listener for opening the popup form
    button.addEventListener('click', openPopup);

  });
  
  var closePopupBtn = document.querySelector('.close');
  var popupForm = document.getElementById('popupForm');
  var overlay = document.getElementById('overlay-class');

  // Function to open the popup form
  function openPopup() {
    popupForm.style.display = 'block';
    overlay.style.display = 'block';
  }

  // Function to close the popup form
  function closePopup() {
    popupForm.style.display = 'none';
    overlay.style.display = 'none';
  }

  

  // Event listener for closing the popup form
  closePopupBtn.addEventListener('click', closePopup);

  // Close the popup form when clicking outside of it or pressing Escape key
  window.addEventListener('click', function(event) {
    if (event.target == overlay) {
      closePopup();
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      closePopup();
    }
  });
});


// // END OF POPUP BOOK CLASS //




// // START OF POPUP FORM FOR PLAN //

document.addEventListener('DOMContentLoaded', function() {
  var openPopupBtn2 = document.querySelectorAll('.openPopupBtn2').forEach(function(button) {
    // Event listener for opening the popup form
    button.addEventListener('click', openPopup2);

  });
  
  var closePopupBtn2 = document.querySelector('.close-plan');
  var popupForm2 = document.getElementById('popupForm2');
  var overlay2 = document.getElementById('overlay-plan');

  // Function to open the popup form
  function openPopup2() {
    popupForm2.style.display = 'block';
    overlay2.style.display = 'block';
  }

  // Function to close the popup form
  function closePopup2() {
    popupForm2.style.display = 'none';
    overlay2.style.display = 'none';
  }

  

  // Event listener for closing the popup form
  closePopupBtn2.addEventListener('click', closePopup2);

  // Close the popup form when clicking outside of it or pressing Escape key
  window.addEventListener('click', function(event) {
    if (event.target == overlay2) {
      closePopup2();
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      closePopup2();
    }
  });
});


// // END OF POPUP PLAN //