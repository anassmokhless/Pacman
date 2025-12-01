const board = ["pink","blue","green","red","purple"];
const myBoard = [];
const tempBoard = [
    1,1,1,1,1,1,1,1,1,1,
    1,2,3,2,2,2,2,2,2,1,
    1,2,1,1,1,1,1,1,2,1,
    1,2,2,2,2,2,2,2,2,1,
    1,2,1,1,1,1,1,1,2,1,
    1,2,2,2,2,2,2,2,2,1,
    1,2,1,1,1,1,1,1,2,1,
    1,2,2,2,2,2,2,2,2,1,
    1,2,2,2,2,2,2,2,2,1,
    1,1,1,1,1,1,1,1,1,1
];
const ghosts = [];
const g = {
    x:"",
    y:"",
    h:80,
    size:10,
    ghosts:6,
    inplay:false
}
const player ={
    pos:31,
    speed:4,
    cool:0,
    pause:false
}

//select all interactive game elements
document.addEventListener("DOMContentLoaded", () => {
    g.grid = document.querySelector(".grid"); //gameBoard
    g.pacman = document.querySelector(".pacman"); //pacman
    g.eye = document.querySelector("eye"); //pacman eye
    g.mouth = document.querySelector(".mouth"); //pacman mouth
    g.ghost = document.querySelector(".ghost"); //ghosts
    g.ghost.style.display = "none";

    createGame(); // create game board
});

document.addEventListener("keydown", (event)=>{
    player.play = requestAnimationFrame(move);
});

function createGame(){
    for(let i = 0; i<g.ghosts;i++){
        createGhost();
    }
    tempBoard.forEach((cell) =>{
        createSquare(cell);
    })

    for(let i=0;i<g.size;i++){
        g.x += ` ${g.h}px ` //cell grid height
    }

    g.grid.style.gridTemplateColumns = g.x;
    g.grid.style.gridTemplateRows = g.x;
}

function createSquare(val){
    const div = document.createElement("div");
    div.classList.add("box");
    if(val === 1){
        div.classList.add("wall");
    }
    if(val === 2){
        const dot = document.createElement("div");
        dot.classList.add("dot");
        div.append(dot);
    }
    if(val === 3){
        const superdot = document.createElement("div");
        superdot.classList.add("superdot");
        div.append(superdot);
    }

    g.grid.append(div);
    myBoard.push(div);
}

function createGhost(){
    let newGhost = g.ghost.cloneNode(true);
    newGhost.pos = 11 + ghosts.length;
    newGhost.style.display = "block";
    newGhost.style.backgroundColor = board[ghosts.length];
    ghosts.push(newGhost);
}

function move(){
    ghosts.forEach((ghost)=>{
        myBoard[ghost.pos].append(ghost);
    })

    myBoard[player.pos].append(g.pacman);
}

