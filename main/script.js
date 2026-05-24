
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if(window.scrollY > 40){
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

const fades = document.querySelectorAll('.fade');

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  });
},{threshold:0.15});

fades.forEach(el => observer.observe(el));

const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', ()=>{
  mobileMenu.style.display =
    mobileMenu.style.display === 'flex'
    ? 'none'
    : 'flex';
});

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      target.scrollIntoView({behavior:'smooth'});
      mobileMenu.style.display = 'none';
    }
  });
});

const form = document.getElementById('contactForm');
const success = document.getElementById('success');

form.addEventListener('submit', function(e){
  e.preventDefault();
  success.textContent = '✓ Message Sent Successfully';
  success.style.color = '#25D366';
  form.reset();

  setTimeout(()=>{
    success.textContent = '';
  },4000);
});
