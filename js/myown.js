 $(document).ready(function(){

           /* Slider options */

  $('.carousel').carousel({
    interval: false
  });

          /* scroll to init */

    var scroll = new SmoothScroll('.nav-link');

         /* modal window init */

    var modal = new VanillaModal.default(); 

                /* Scroll to usage */
                        
  $('#dynamic-to-top').hide();
        
                // fade in #back-top
        
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 400) {
        $('#dynamic-to-top').fadeIn();
      } else {
        $('#dynamic-to-top').fadeOut();
      }
    });
        
                         // scroll body to 0px on click
            
    $('#dynamic-to-top').click(function () {
      $('body, html').animate({
        scrollTop: 0
      }, 500);
      return false;
    });
  });

  function validateName() {
    var a = $("#contact-name"),
        b = a.val().trim(),
        c = new RegExp(/^[а-яА-яіІЇїЄєґҐёЁA-Za-z]+$/),
        d = c.test(b);
        !d ? (a.parent().removeClass("has-success").addClass("has-error"), nameSuccess = !1) : (a.parent().removeClass("has-error").addClass("has-success"), nameSuccess = !0);
	}

	function validateEmail() {
    var a = $("#contact-email"),
        b = a.val().trim(),
        c = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i),
        d = c.test(b);
        d ? (a.parent().removeClass("has-error").addClass("has-success"), emailSuccess = !0) : (a.parent().removeClass("has-success").addClass("has-error"), emailSuccess = !1);
	}

	function validateMessage() {
    var a = $("#contact-message"),
        b = a.val().trim();
        b.length > 1 ? (a.parent().removeClass("has-error").addClass("has-success"), messageSuccess = !0) : (a.parent().removeClass("has-success").addClass("has-error"), messageSuccess = !1);
	}

	var nameSuccess = !1,
      emailSuccess = !1,
      messageSuccess = !1,
      $elements = $("input, textarea");
  $elements.on("focus", function() {
    var a = $(this);
    $elements.each(function() {
      var b = $(this);
      b !== a && $(this).parent().css("opacity", 0.5);
     }), 
          a.parent().css("opacity", 1);
	}),

  $("#contact-name").on("blur", validateName),
  $("#contact-email").on("blur", validateEmail),
  $("#contact-message").on("blur", validateMessage),
  $("#contact-send").on("click", function(a) {
    validateName(),
    validateEmail(),
    validateMessage(),
    nameSuccess && emailSuccess && messageSuccess ? $(this).text("отправлено") : nameSuccess ? emailSuccess ? messageSuccess || ($("#contact-message").focus(), 
    a.preventDefault()) : ($("#contact-email").focus(), a.preventDefault()) : ($("#contact-name").focus(), a.preventDefault());
	});        
});

