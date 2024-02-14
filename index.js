/* Up arrow at the bottom right of the page to scroll to the top if clicked */
document.addEventListener("DOMContentLoaded", function(){
    var backToTopButton = document.querySelector(".back-to-top");
  
    window.onscroll = function() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.classList.remove("d-none");
      } else {
        backToTopButton.classList.add("d-none");
      }
    };
  
    backToTopButton.addEventListener("click", function(e) {
      e.preventDefault();
      window.scrollTo({top: 0, behavior: 'smooth'});
    });
  });