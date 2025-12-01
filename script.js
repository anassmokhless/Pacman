const board = ["pink","blue","green","red","purple"];
const myBoard = [];
const ghosts = [];
const g = {
    x:"",
    y:"",
    h:100,
    size:25,
    ghosts:6,
    inplay:false
}
const player ={
    pos:20,
    speed:4,
    cool:0,
    pause:false
}

document.addEventListener("DOMContentLoaded", () => {
    g.grid = document.querySelector(".grid"); //gameBoard
    g.pacman = document.querySelector(".pacman"); //pacman

    console.log(g);
    console.log(pacman);
})