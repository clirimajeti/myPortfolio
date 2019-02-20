ScrollOut();
// Toggle Script
    const ball = document.querySelector('.ball');
        ball.addEventListener('click', () => {
            ball.classList.toggle('night');
            document.body.classList.toggle('black');
        })

    document.getElementsByTagName('video')[0].onended = function () {
        this.load();
        this.play();
        };