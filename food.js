import { randomGridPosition } from './grid.js'
import { onSnake, expandSnake } from './snake.js'

let food = randomGridPosition()
const expansion_rate = 1
let score = 0;

export function update() {
  document.getElementById('Score').innerHTML = `${score}`
    if (onSnake(food)) {
        expandSnake(expansion_rate)
        food = randomGridPosition()
        score += 1;
    }
}

export function draw(gameBoard) {
  const foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  gameBoard.appendChild(foodElement);
}