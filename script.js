const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  if (this.scrollY > 20) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});

function menuClick() {
  document.getElementById('nav-links').classList.toggle('active');
  document.getElementById('memu-btn-icon').classList.toggle('active');
}

document.getElementById('nav-links').addEventListener('click', () => {
  document.getElementById('nav-links').classList.remove('active');
  document.getElementById('memu-btn-icon').classList.remove('active');
});
