const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

const learnMoreToggle = document.getElementById('learnMoreToggle');
const description = document.getElementById('description');

if (learnMoreToggle) {
    learnMoreToggle.addEventListener('click', () => {
        if (description.style.display === 'none' || description.style.display === '') {
            description.style.display = 'grid';
            learnMoreToggle.textContent = 'Go Back';
        } else {
            description.style.display = 'none';
            learnMoreToggle.textContent = 'Learn More';
        }
    });
}

