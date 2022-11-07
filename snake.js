import { getInputDirection } from "./input.js";

export const SNAKE_SPEED = 2;

const snakeBody = [{x:11, y: 11}];
let newSegments = 0;

export function update(gameBoard){

    addNewSegments();
    const inputDirection = getInputDirection();
    for(let i = snakeBody.length - 2; i >= 0; i--){
        snakeBody[i + 1] = { ...snakeBody[i] } ;
    }
    
    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}


export function draw(gameBoard){

    snakeBody.forEach(segment => {
        const snakeElement = document.createElement("div");
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.classList.add("snake");
        gameBoard.appendChild(snakeElement);
    });
}

export function onSnake(position, {ignoreHead = false} = {}){

    const pos = position;
    return snakeBody.some((segment, index )=> {
        if(ignoreHead && index === 0) return false;
        return equalPositions(segment,pos);
    });
}

export function expandSnake(EXPANSION_RATE){

    newSegments += EXPANSION_RATE;
}

function equalPositions(pos1,pos2){
    
    console.log("coming");
    const result =  pos1.x === pos2.x && pos1.y === pos2.y;  
    console.log(result);
    return result;
}

function addNewSegments(){
    for( let i = 0; i < newSegments; i++){
        snakeBody.push({ ...snakeBody[snakeBody.length - 1]});
    }

    newSegments = 0;
}

export function getSnakeHead(){
    return snakeBody[0];
}

export function snakeIntersection(){

    return onSnake(snakeBody[0], {ignoreHead: true});
}