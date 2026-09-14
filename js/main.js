document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
      var expanded = nav.classList.contains('open');
      toggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });
    nav.querySelectorAll('.nav-links a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
      });
    });
  }

  var form = document.querySelector('.contact-form');
  if (form) {
    var CONTACT_EMAIL = 'jeff.kadis@multisportconstruction.com';
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = form.querySelector('#name').value.trim();
      var email = form.querySelector('#email').value.trim();
      var phone = form.querySelector('#phone').value.trim();
      var service = form.querySelector('#service').value;
      var message = form.querySelector('#message').value.trim();

      var subject = 'Quote request: ' + service + ' — ' + name;
      var bodyLines = [
        'Name: ' + name,
        'Email: ' + email,
        'Phone: ' + (phone || '—'),
        'Service needed: ' + service,
        '',
        'Project details:',
        message
      ];
      var mailtoUrl = 'mailto:' + CONTACT_EMAIL
        + '?subject=' + encodeURIComponent(subject)
        + '&body=' + encodeURIComponent(bodyLines.join('\n'));

      window.location.href = mailtoUrl;

      var note = form.querySelector('.form-status');
      if (note) {
        note.textContent = 'Opening your email app with this message pre-filled — just hit send there to reach us.';
      }
    });
  }
});
