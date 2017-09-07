(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse the navbar when page is scrolled
  $(window).scroll(function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  });

  $('#modal-structure').on('show.bs.modal', function(event) {
    var button = $(event.relatedTarget); // Button that triggered the modal
    var projectNumber = button.data('number'); // Extract info from data-* attributes
    var title = button.text();
    var body = $(".modal-body-" + projectNumber);
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this);
    var modalTitle = modal.find('.modal-title');
    var modalBody = modal.find('.modal-body');

    switch (projectNumber) {
      case 1:
        modalTitle.text(title);
        modalBody.html(body.html());
        break;
      case 2:
        modalTitle.text(title);
        modalBody.html(body.html());
        break;
      case 3:
        modalTitle.text(title);
        modalBody.html(body.html());
        break;
      case 4:
        modalTitle.text(title);
        modalBody.html(body.html());
        break;
      default:

    }
  });

})(jQuery); // End of use strict
