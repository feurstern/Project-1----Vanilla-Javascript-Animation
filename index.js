const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

const canvasWidth = canvas.width = 600;
const canvasHeight = canvas.height = 600;

//sprite width is the result from the actual size the pixel of image's width current image width 6867/12(column)= 573
const spriteWidhth = 575;
//sprite height is the actual of the height from the pciture 5230px height / the number of animation 5230/10
const spirteHeight = 523;


let playerState = "bite";

/*
blinking problem
I encounter the problem when I want to animate the sprite it reach to empty space, so will make it like blank
And I have to make it slowely animate by using gameframe and stage frame.

*/
//let frameX=0;
//let frameY=0;



// late gameframe for making the sprite animate slowly
let gameFrame = 0;
// to slowdown the animation the 
const staggerFrame = 5;

// This the main container to hold the data of the animations
const spritesAnimation = [];

// This map of the sprite
const animationStates = [
    // create the object properties for each states
    {
        name: 'idle',
        // The value of frames is equal how many rows in the states. idle has 7 frames.
        frames: 7
    },

    {
        name: 'jump',
        frames: 7,

    },

    {
        name: 'fall',
        frames: 7,

    },

    {
        name: 'run',
        frames: 9,

    },

    {
        name: 'dizzy',
        frames: 11,

    },

    {
        name: 'sit',
        frames: 5,

    },
    {
        name: 'roll',
        frames: 7,

    },

    {
        name: 'bite',
        frames: 7,

    },

    {
        name: 'ko',
        frames: 12,

    },

    {
        name: 'gethit',
        frames: 4,

    },







];

animationStates.forEach((state, index) => {
    let frames = {
        loc: [],
    }
    for (let i = 0; i < state.frames; i++) {
        let positionX = i * spriteWidhth;
        let positionY = index * spirteHeight;
        frames.loc.push({ x: positionX, y: positionY });


    }
    spritesAnimation[state.name] = frames;
});

console.log(animationStates);

const playerImage = new Image();
playerImage.src = "./src/pic/shadow_dog.png";
let x = 1;

const animate = () => {
    //declare position to cycle horizontal sprite and modulus by 6, because it's idle animation contain six animation
    let position = Math.floor(gameFrame / staggerFrame) % spritesAnimation[playerState].loc.length;

    let frameX = spriteWidhth * position;
    let frameY = spritesAnimation[playerState].loc[position].y;

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    //ctxdrawimage(image, source x, source y, source height, source width, destination height, destination width)
    ctx.drawImage(playerImage, frameX, frameY, spriteWidhth, spirteHeight, 0, 0, spriteWidhth, spirteHeight);

    /*
    if(gameFrame % staggerFrame ==0){
        //problem occur when we change the frameX since we have only the value framex<6. So we need to put it inside object.
        if(frameX<6) frameX++
        else frameX=0;

    }
    */
    gameFrame++;

    requestAnimationFrame(animate);



};
animate();