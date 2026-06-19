window.onload = function () {
    let button = document.getElementById('button-random-color');
    let color = document.querySelectorAll('.color');
    let color1 = document.querySelector('.block1');
    let color2 = document.querySelector('.block2');
    let color3 = document.querySelector('.block3');
    let color4 = document.querySelector('.block4');
    let board = document.getElementById('pixel-board');
    let buttonLimpar = document.getElementById('clear-board');

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


    for(let index = 0; index < 25; index += 1){
        
        let pixel = document.createElement('div'); 

        pixel.className = 'pixel';

        board.appendChild(pixel);
    }


    for (let indexCor = 0; indexCor < color.length; indexCor += 1) {

    color[indexCor].addEventListener('click', function (){

        for (let index = 0; index < color.length; index += 1) {
            color[index].classList.remove('selected');
        }

        color[indexCor].classList.add('selected');
    });
    
    }

    let pixel = document.querySelectorAll('.pixel');
    

    for(let index = 0; index < pixel.length; index += 1){

        pixel[index].addEventListener('click', function (){

        let selected = document.querySelector('.selected');    

        pixel[index].style.backgroundColor = getComputedStyle(selected).backgroundColor;
    });

    }

     for(let index = 0; index < pixel.length; index += 1){

        buttonLimpar.addEventListener('click', function (){  

        pixel[index].style.backgroundColor = 'white';

        localStorage.setItem(`pixel${index}`, pixel[index].style.backgroundColor);
    });

    }

    for(let index = 0; index < pixel.length; index += 1){

        pixel[index].addEventListener('click', function saveBoard(){  

        localStorage.setItem(`pixel${index}`, pixel[index].style.backgroundColor);
    });

    }    

    for(let index = 0; index < pixel.length; index += 1){


        pixel[index].style.backgroundColor = localStorage.getItem(`pixel${index}`);
    };

      

};