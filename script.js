// script.js - v3 behavior (smooth scroll, contact demo, mobile menu)
document.addEventListener('click', function(e){
  const t = e.target;
  // smooth scroll for anchor links
  if(t.matches('a[href^="#"]')){
    e.preventDefault();
    const id = t.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
  }
});

// Contact form demo (if present)
const form = document.getElementById('contactForm');
if(form){
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const status = document.getElementById('formStatus');
    status.textContent = 'Sending...';
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    if(!name || !email || !message){
      status.textContent = 'Please complete all fields.';
      status.style.color = 'crimson';
      return;
    }
    setTimeout(()=>{
      status.style.color = '';
      status.textContent = 'Thanks — we received your message.';
      form.reset();
    }, 900);
  });
}

// mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
if(menuToggle && mainNav){
  menuToggle.addEventListener('click', ()=>{
    mainNav.classList.toggle('open');
  });
}

// highlight nav link for current page
(function highlightActive(){
  const links = document.querySelectorAll('.main-nav .nav-link');
  const current = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach(a=>{
    if(a.getAttribute('href') === current) a.classList.add('active');
  });
})();
