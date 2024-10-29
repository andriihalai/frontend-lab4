const birthDetails = document.getElementById('birth-details');
const education = document.querySelector('p.education');

let areBirthDetailsActive = false;
let isEducationActive = false;

birthDetails.onclick = function () {
  if (!areBirthDetailsActive) {
    birthDetails.style.backgroundColor = '#0000FF';
    birthDetails.style.color = '#C1ABA6';
    areBirthDetailsActive = true;
  } else {
    birthDetails.style.backgroundColor = '#6E0D25';
    birthDetails.style.color = '#FFF';
    areBirthDetailsActive = false;
  }
};

education.onclick = function () {
  if (!isEducationActive) {
    education.style.backgroundColor = '#008080';
    education.style.color = '#FFA500';
    isEducationActive = true;
  } else {
    education.style.backgroundColor = '#800080';
    education.style.color = '#32CD32';
    isEducationActive = false;
  }
};

function increase(e) {
  const images = document.getElementsByTagName('img');
  const currentImage = images[images.length - 1];
  currentImage.width += 50;
  currentImage.height += 50;
}

function decrease() {
  const images = document.getElementsByTagName('img');
  const currentImage = images[images.length - 1];
  currentImage.width -= 50;
  currentImage.height -= 50;

  if (!currentImage.width || !currentImage.height) {
    deleteImage();
  }
}

function appendImage() {
  const imagesContainer = document.getElementById('imgs-container');
  const img = document.createElement('img');
  img.style.marginBottom = '5px';
  img.width = 400;
  img.height = 200;
  img.src =
    'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQlCg2lJCuf9QiIzDT8ESUASFcWWuu1uT5Xboq1DhUUGzOklMSF9s0esO7HSvyDSFlYkbnh_hrAMczJnSuarWjjE6I9dxdVlWOgHmbQSw';
  imagesContainer.appendChild(img);
}

function deleteImage() {
  const imagesContainer = document.getElementById('imgs-container');
  const images = imagesContainer.children;
  images[images.length - 1].remove();
}

document.getElementById('increase-btn').onclick = increase;
document.getElementById('decrease-btn').onclick = decrease;
document.getElementById('add-btn').onclick = appendImage;
document.getElementById('delete-btn').onclick = deleteImage;
