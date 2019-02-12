// FullPageJs Script
    new fullpage('#fullpage', {
            autoScrolling:true,
            responsiveWidth:480,
            anchors: ['section1', 'section2', 'section3', 'section4'],
            menu: '#menu',
            paddingTop: '5em',
            });
        fullpage_api.setAllowScrolling(true);

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