//precommit eslint settings for package json
      // "*.js": [
      //   "npm run prettier",
      //   "npm run lint",
      //   "git add"
      // ]


/* scroll to init */

var scroll = new SmoothScroll('.nav-link');

/* modal window init */

var modal = new VanillaModal.default();

/* get all links that has Modal and if they have Modal in href property and 
       add to them event listener that when clicks initialize tiny slider  */

var a = document.querySelectorAll('a');

for (var j = 0; j < a.length; j++) {
  if (a[j].href.indexOf('Modal') !== -1) {
    a[j].addEventListener('click', initTnsSlider);
  }
}
/* init tns slider when click on link */

function initTnsSlider() {
  var index = this.href.indexOf('#');
  var linkToModal = this.href.substr(index);
  var queryContainer = linkToModal + ' .carousel';
  var carousel = document.querySelector(linkToModal + ' .carousel');
  tns({ container: carousel, nav: false, controlsText: ['', ''] });
}

/* fade in #back-top */

var toTopElement = document.getElementById('dynamic-to-top');

window.addEventListener('scroll', function() {
  if (window.pageYOffset > 400) {
    toTopElement.classList.remove('hide');
  } else {
    toTopElement.classList.add('hide');
  }
});

/* show hide menu on mobile */

var btn = document.querySelector('.navbar-toggler');

if (btn) {
  menu = document.querySelector('.navbar-collapse');
  btn.addEventListener('click', function() {
    menu.classList.toggle('is-open');
    this.classList.toggle('close');
  });
}

/* form validate */

(function() {
  var contactForm = document.getElementById('contact-form');
  var nameField = document.getElementById('contact-name');
  var emailField = document.getElementById('contact-email');
  var textField = document.getElementById('contact-message');
  var formBtn = document.getElementById('contact-send');

  var validRegExp = {
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    name: /^[а-яА-яіІЇїЄєґҐёЁA-Za-z]+$/,
  };

  var hasError = function(field) {
    if (field.type === 'button' || field.type === 'submit') {
      return;
    }

    var emailTest = validRegExp.email.test(field.value);
    var nameTest = validRegExp.name.test(field.value);

    if (field.value === '') {
      return 'Будь ласка заповніть поле';
    }
    if (field.name === 'field-name' && !nameTest) {
      return "Ви ввели неправильне ім'я";
    }
    if (field.name === 'field-email' && !emailTest) {
      return 'Ви ввели невірний email';
    }
  };

  var showError = function(field, error) {
    field.classList.add('form-error');
    var id = field.id || field.name;

    if (!id) return;
    var message = field.form.querySelector('.error-message#error-for-' + id);

    if (!message) {
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
    if (!id) return;

    var message = field.form.querySelector('.error-message#error-for-' + id);
    if (!message) return;

    message.innerHTML = '';
    message.style.display = 'none';
    message.style.visibility = 'hidden';
  };

  contactForm.addEventListener(
    'blur',
    function(event) {
      var error = hasError(event.target);
      if (error) {
        showError(event.target, error);
        return;
      }
      removeError(event.target);
    },
    true,
  );

  document.addEventListener('submit', function(event) {
    var fields = event.target.elements;
    var fieldsLen = fields.length;

    var error, hasErrors;
    for (var i = 0; i < fieldsLen; i++) {
      error = hasError(fields[i]);
      if (error) {
        showError(fields[i], error);
        if (!hasErrors) {
          hasErrors = fields[i];
        }
      }
    }

    if (hasErrors) {
      event.preventDefault();
      hasErrors.focus();
    }
  });
})();
