
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const toggleBtn = document.getElementById('darkToggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggleBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});


const revealSections = document.querySelectorAll('.about, .projects, .skills, .contact');

const revealOnScroll = () => {
  const triggerPoint = window.innerHeight * 0.85;
  revealSections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerPoint) {
      section.style.opacity = 1;
      section.style.transform = 'translateY(0)';
    }
  });
};

revealSections.forEach(section => {
  section.style.opacity = 0;
  section.style.transform = 'translateY(40px)';
  section.style.transition = 'all 0.7s ease';
});

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();


const sendBtn = document.getElementById('sendBtn');
if (sendBtn) {
  sendBtn.addEventListener('click', function (e) {
    e.preventDefault(); 
    alert('Your message has been sent to Laiba');
  });
}
