window.onload = function () {
    let button = document.getElementById('button-random-color');
    let color = document.querySelectorAll('.color');
    let color1 = document.querySelector('.block1');
    let color2 = document.querySelector('.block2');
    let color3 = document.querySelector('.block3');
    let color4 = document.querySelector('.block4');
    let board = document.getElementById('pixel-board');
    let buttonLimpar = document.getElementById('clear-board');
    let generateboard = document.getElementById('generate-board');

    let colorPalette = JSON.parse(localStorage.getItem('colorPalette'));
    document.querySelector('.block2').style.backgroundColor = colorPalette.cor2;    //buscar cores da paleta no localstorage
    document.querySelector('.block3').style.backgroundColor = colorPalette.cor3;
    document.querySelector('.block4').style.backgroundColor = colorPalette.cor4;
    


    button.addEventListener('click', function (){   //atribuir e guardar cores da paleta no localstorage

        randomColor(color2);
        randomColor(color3);
        randomColor(color4);

            let colorPalette = {
                        cor2: color2.style.backgroundColor,
                        cor3: color3.style.backgroundColor,
                        cor4: color4.style.backgroundColor
                        };

            localStorage.setItem('colorPalette', JSON.stringify(colorPalette));
    });

    function randomColor(cor){  //atribuir cor aleatoria na paleta

        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);

        cor.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
    }

    generate();

    function generate(){

        let input = localStorage.getItem('boardSize');

        document.getElementById('pixel-board').style.gridTemplateColumns = 'repeat('+input+', 40px)';
    
        for(let index = 0; index < input*input; index += 1){    //criar elemento pixel do board no html 
        
        let createPixel = document.createElement('div'); 

        createPixel.className = 'pixel';

        board.appendChild(createPixel);
    }

        let pixel = document.querySelectorAll('.pixel');


        for(let index = 0; index < pixel.length; index += 1){    //atribuir uma cor da paleta ao pixel

        pixel[index].addEventListener('click', function (){

        let selected = document.querySelector('.selected');    

        this.style.backgroundColor = getComputedStyle(selected).backgroundColor;
    });

    }

    for(let index = 0; index < pixel.length; index += 1){  //limpar cores do board

        buttonLimpar.addEventListener('click', function (){  

        pixel[index].style.backgroundColor = 'white';

        localStorage.setItem(`pixel${index}`, pixel[index].style.backgroundColor);
    });

    }

     for(let index = 0; index < pixel.length; index += 1){   //guardar a cor do pixel no localstorage

        pixel[index].addEventListener('click', function saveBoard(){  

        localStorage.setItem(`pixel${index}`, pixel[index].style.backgroundColor);
    });

    }
    
    for(let index = 0; index < pixel.length; index += 1){   //buscar cor do pixel no localstorage


        pixel[index].style.backgroundColor = localStorage.getItem(`pixel${index}`);
    };

    generateboard.addEventListener('click', function (){    //criar board de acordo com tamanho atribuido ao input


        let input = document.getElementById('board-size').value;

        if(isNaN(input) || input === ''){
            alert('Digite um número válido');
            return;
        }

        if(localStorage.getItem('boardSize') != document.getElementById('board-size').value){
        input = document.getElementById('board-size').value;
        }
        else{
        input = localStorage.getItem('boardSize');
        }

        if(isNaN(input || input === '')){
            alert('Digite um número válido');
            return;
        }

        if(input < 5){
            input = 5;
        }
        else if(input > 50){
            input = 50;
        }

         for(let index = 0; index < input*input; index += 1){
            localStorage.removeItem(`pixel${index}`);
        };

        localStorage.setItem('boardSize', input);

        document.getElementById('pixel-board').style.gridTemplateColumns = 'repeat('+input+', 40px)';

        let deletePixel = document.querySelectorAll('.pixel');

        for(let index = 0; index < deletePixel.length; index += 1){
            
            deletePixel[index].remove();

        }

        for(let index = 0; index < input*input; index += 1){    //criar elemento pixel do board no html 
        
        let createPixel = document.createElement('div'); 

        createPixel.className = 'pixel';

        board.appendChild(createPixel);
    }

          let pixel = document.querySelectorAll('.pixel');


        for(let index = 0; index < pixel.length; index += 1){    //atribuir uma cor da paleta ao pixel

        pixel[index].addEventListener('click', function (){

        let selected = document.querySelector('.selected');    

        this.style.backgroundColor = getComputedStyle(selected).backgroundColor;
    });

    }

    for(let index = 0; index < pixel.length; index += 1){  //limpar cores do board

        buttonLimpar.addEventListener('click', function (){  

        pixel[index].style.backgroundColor = 'white';

        localStorage.setItem(`pixel${index}`, pixel[index].style.backgroundColor);
    });

    }

     for(let index = 0; index < pixel.length; index += 1){   //guardar a cor do pixel no localstorage

        pixel[index].addEventListener('click', function saveBoard(){  

        localStorage.setItem(`pixel${index}`, pixel[index].style.backgroundColor);
    });

    }

    });

};


    for (let indexCor = 0; indexCor < color.length; indexCor += 1) {    //selecionar uma cor da paleta

    color[indexCor].addEventListener('click', function (){

        for (let index = 0; index < color.length; index += 1) {
            color[index].classList.remove('selected');
        }

        color[indexCor].classList.add('selected');
    });
    
    }   

    

      

};