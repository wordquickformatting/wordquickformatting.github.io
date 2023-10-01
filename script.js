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

const modal = document.getElementById('modal-feedback');
const modalImg = document.getElementById('feedback-modal-img');

const imgs = document.getElementsByClassName('feedback-img');

// imgs.forEach(img => {
//   img.onclick = () => {
//     modal.style.display = 'block';
//     modalImg.src = img.src;
//   };
// });

function feedbackClick(src) {
  modal.style.display = 'block';
  modalImg.src = src;
}

const closeBtn = document.getElementById('close-modal-btn');

closeBtn.onclick = () => {
  modal.style.display = 'none';
};
