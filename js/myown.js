/* $(document).ready(function(){*/

          /* scroll to init */

    var scroll = new SmoothScroll('.nav-link');

         /* modal window init */

    var modal = new VanillaModal.default(); 

        /* tiny slider init */

    var sliders = document.querySelectorAll('.carousel');
    var len = sliders.length;
    
    for(var i=0; i<len; i++) {
      tns({container: sliders[i], nav: false, controlsText:['','']});
    }
        

                /* fade in #back-top */

var toTopElement = document.getElementById('dynamic-to-top');    

window.addEventListener('scroll', function() {
  if(window.pageYOffset > 400) {
    toTopElement.classList.remove('hide');
  } else {
    toTopElement.classList.add('hide');
  }
});


                /* form validate */

(function(){

  var contactForm = document.getElementById('contact-form');
  var nameField = document.getElementById('contact-name');
  var emailField = document.getElementById('contact-email');
  var textField = document.getElementById('contact-message');
  var formBtn = document.getElementById('contact-send');

  var validRegExp = {
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  name:  /^[а-яА-яіІЇїЄєґҐёЁA-Za-z]+$/
  };

  var hasError = function(field) {
  if(field.type === 'button' || field.type === 'submit') {
    return ;
  }

  var emailTest = validRegExp.email.test(field.value);
  var nameTest = validRegExp.name.test(field.value);

  if(field.value === '') {
    return 'Будь ласка заповніть поле';
  }
  if(field.name === 'field-name' && !nameTest) {
    return "Ви ввели неправильне ім'я";
  }
  if(field.name === 'field-email' && !emailTest) {
    return 'Ви ввели невірний email'; 
  }
  };

  var showError = function(field, error) {

  field.classList.add('form-error');
  var id = field.id || field.name;

  if(!id) return;
  var message = field.form.querySelector('.error-message#error-for-' + id);

  if(!message) {
    message = document.createElement('div');
    message.className = 'error-message';
    message.id = 'error-for-' + id;
    field.parentNode.insertBefore(message, field.nextSibling);
  }

  field.setAttribute('aria-describedby', 'error-for-' + id);

  message.innerHTML = error;

  message.style.display = 'block';
  message.style.visibility = 'visible';
  };

  var removeError = function(field) {
  field.classList.remove('form-error');
  field.removeAttribute('aria-describedby');

  var id = field.id || field.name;
  if(!id) return;

  var message = field.form.querySelector('.error-message#error-for-' + id);
  if(!message) return;

  message.innerHTML = '';
  message.style.display = 'none';
  message.style.visibility = 'hidden';
  }

  contactForm.addEventListener('blur', function(event){
  var error = hasError(event.target);
  if(error) {
    showError(event.target, error);
    return;
  }
  removeError(event.target);
  }, true);

  document.addEventListener('submit', function(event) {
  var fields = event.target.elements;
  var fieldsLen = fields.length;

  var error, hasErrors;
  for(var i = 0; i < fieldsLen; i++) {
    error = hasError(fields[i]);
    if(error) {
      showError(fields[i], error);
      if(!hasErrors) {
        hasErrors = fields[i];
      }
    }
  }

  if(hasErrors) {
    event.preventDefault();
    hasErrors.focus();
  }
  });

})();
/*
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

*/