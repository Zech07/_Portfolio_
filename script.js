// Select all buttons and nav links
document.querySelectorAll('.nav-btn, .project-btn, .glow-btn').forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.classList.add('float-effect');
    });
    button.addEventListener('mouseleave', () => {
        button.classList.remove('float-effect');
    });
});
