function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('navLinks').classList.remove('active');
    });
});
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        document.getElementById('navLinks').classList.remove('active');
    }
});
const logoSlides = document.querySelectorAll('.logo-slide');
let currentLogoIndex = 0;
function showNextLogo() {
    logoSlides.forEach(slide => slide.classList.remove('active'));
    logoSlides[currentLogoIndex].classList.add('active');
    currentLogoIndex = (currentLogoIndex + 1) % logoSlides.length;
}
showNextLogo();
setInterval(showNextLogo, 5000);
const stats = document.querySelectorAll('.stat-number');
stats.forEach(stat => {
    const target = parseInt(stat.getAttribute('data-target'));
    let count = 0;
    const increment = target / 100;
    const updateCount = () => {
        count += increment;
        if (count < target) {
            stat.textContent = Math.ceil(count);
            setTimeout(updateCount, 20);
        } else {
            stat.textContent = target;
        }
    };
    updateCount();
});
window.addEventListener('load', () => {
    const loader = document.querySelector('.pyramid-loader');
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 500);
});
console.log('Scripts loaded');

