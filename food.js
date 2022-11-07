import {onSnake, expandSnake} from "./snake.js";
import {randomGridPosition} from "./grid.js";

let food = getRandomFoodPosition();
const EXPANSION_RATE = 1;

export function update(gameBoard){

    let rep = onSnake(food);
    console.log(rep);
    if(rep){
        expandSnake(EXPANSION_RATE);
        food = getRandomFoodPosition();
    }


}


export function draw(gameBoard){

    const foodElement = document.createElement("div");
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add("food");
    gameBoard.appendChild(foodElement);

}

function getRandomFoodPosition(){
    let newPosition, flag =0; 
    while(newPosition === null || flag === 0){

        newPosition = randomGridPosition();
        if(onSnake(newPosition) === false){
            flag = 1;
        }
    }

    return newPosition;
}
