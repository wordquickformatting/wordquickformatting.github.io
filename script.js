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
let currentImage = 0;
const moveLeft = document.getElementById('move-left');
const moveRight = document.getElementById('move-right');

const closeBtn = document.getElementById('close-modal-btn');

function resetMoveDisplay() {
  moveLeft.style.display = 'unset';
  moveRight.style.display = 'unset';
}

function updateMoveDisplay() {
  if (currentImage <= 1) moveLeft.style.display = 'none';
  else if (currentImage >= imgs.length) moveRight.style.display = 'none';
  else {
    resetMoveDisplay();
  }
}

closeBtn.onclick = () => {
  modal.style.display = 'none';
  resetMoveDisplay();
};

function feedbackClick(src, index) {
  modal.style.display = 'block';
  modalImg.src = src;
  currentImage = index;
  updateMoveDisplay();
}

moveLeft.onclick = function () {
  currentImage -= 1;
  updateMoveDisplay();
  if (currentImage < 1) return;
  let imgSrc = currentImage;
  imgSrc = `assets/feedback-${imgSrc}.jpg`;
  modalImg.src = imgSrc;
};

moveRight.onclick = function () {
  currentImage += 1;
  updateMoveDisplay();
  if (currentImage > imgs.length) return;
  let imgSrc = currentImage;
  imgSrc = `assets/feedback-${imgSrc}.jpg`;
  modalImg.src = imgSrc;
};
