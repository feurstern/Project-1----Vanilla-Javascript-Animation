const canvas =  document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

const canvasWidth = canvas.width = 600;
const canvasHeight =  canvas.height = 600;

//sprite width is the result from the actual size the pixel of image's width current image width 6867/12(column)= 573
const spriteWidhth =575;
//sprite height is the actual of the height from the pciture 5230px height / the number of animation 5230/10
const spirteHeight= 523;

/*
blinking problem
I encounter the problem when I want to animate the sprite it reach to empty space, so will make it like blank
And I have to make it slowely animate by using gameframe and stage frame.

*/
let frameX=0;
let frameY=0;

// late gameframe for making the sprite animate slowly
let gameFrame = 0;
// to slowdown the animation the 
const staggerFrame = 5;


const playerImage = new Image();
playerImage.src ="./src/pic/shadow_dog.png";
let x =1;

const animate=()=>{
    ctx.clearRect(0,0, canvasWidth, canvasHeight);
    //ctxdrawimage(image, source x, source y, source height, source width, destination height, destination width)
    ctx.drawImage(playerImage, frameX*spriteWidhth, frameY*spirteHeight, spriteWidhth, spirteHeight,0,0, spriteWidhth, spirteHeight);

    if(gameFrame % staggerFrame ==0){
        if(frameX<6) frameX++
        else frameX=0;

    }
    gameFrame++;
   
    requestAnimationFrame(animate);



};
animate();
