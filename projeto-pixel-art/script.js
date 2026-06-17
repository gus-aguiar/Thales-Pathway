window.onload = function () {
    let button = document.getElementById('button-random-color');
    let color2 = document.querySelector('.block2');
    let color3 = document.querySelector('.block3');
    let color4 = document.querySelector('.block4');

    document.querySelector('.block2').style.backgroundColor = localStorage.getItem('cor2');
    document.querySelector('.block3').style.backgroundColor = localStorage.getItem('cor3');
    document.querySelector('.block4').style.backgroundColor = localStorage.getItem('cor4');



    button.addEventListener('click', function (){

        randomColor(color2);
        randomColor(color3);
        randomColor(color4);

            localStorage.setItem('cor2', color2.style.backgroundColor);
            localStorage.setItem('cor3', color3.style.backgroundColor);
            localStorage.setItem('cor4', color4.style.backgroundColor);

    });

    function randomColor(cor){

        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);

        cor.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
    }


};