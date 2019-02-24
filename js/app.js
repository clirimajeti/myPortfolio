ScrollOut();
// Toggle Script
    const ball = document.querySelector('.ball');
        ball.addEventListener('click', () => {
            ball.classList.toggle('night');
            document.body.classList.toggle('black');
        })