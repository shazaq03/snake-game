let inputDirection = { "x" : 0, "y": 0};

window.addEventListener("keydown", (e) =>{

    switch(e.key){
        case "w":
            if(inputDirection.y !== 0) return;
            inputDirection = { x: 0, y: -1};
            break;

        case "s":
            if(inputDirection.y !== 0) return;
            inputDirection = { x: 0, y: 1};
            break;
        
        case "a":
            if(inputDirection.x !== 0) return;
            inputDirection = { x: -1, y: 0};
            break;

        case "d":
            if(inputDirection.x !== 0) return;
            inputDirection = { x: 1, y: 0};
            break;
    }
})


export function getInputDirection(){
    return inputDirection;
}