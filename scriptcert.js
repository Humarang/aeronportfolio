const images = [
    'cert/cert.jpg',
    'cert/cert2.jpg',
    'cert/cert3.jpg',
    'cert/cert4.jpg',
    'cert/cert1.jpg',
    'cert/cert5.jpg', // Add more image URLs as needed
];

let currentIndex = 0;

const imgElement = document.getElementById('current-photo');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

function updateImage() {
    imgElement.src = images[currentIndex];
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateImage();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateImage();
});

// Initialize with the first image
updateImage();