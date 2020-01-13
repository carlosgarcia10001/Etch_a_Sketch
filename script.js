const grid = document.querySelector('#grid-container');
function colored(e){
    e.target.removeAttribute('class');
    e.target.setAttribute('class', 'square colored');
}

function clear(){
    const size = prompt("What size would you like the new grid to be?");
    while(grid.firstElementChild){
        grid.removeChild(grid.firstElementChild);
    }
    initializeGrid(size);
}
function initializeGrid(size){
    let gridCSS = 'repeat('+size+',1fr)';

    grid.style.gridTemplateColumns = gridCSS;
    grid.style.gridTemplateRows = gridCSS;
    let squaresize = 800/size;
    for(let i = 0; i < size*size; i++){
        var square = document.createElement('div')
        square.setAttribute('class','square uncolored');
        console.log(square.style.height);
        grid.appendChild(square);
        square.addEventListener('mouseover',colored);    
    }
    console.log(square.style.height);
}
let button = document.querySelector('button');
button.addEventListener('click',clear);

initializeGrid(16);
