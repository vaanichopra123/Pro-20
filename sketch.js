var issImage,sleepImg,gymImg,bathImg,brushImg
, drinkImg, eatImg,moveImg;
var bk,ass;
function preload(){
    issImage=loadImage("images/iss.png");
    sleepImg=loadImage("images/sleep.png")
    gymImg=loadAnimation("images/gym1.png",
    "images/gym2.png","images/gym11.png","images/gym12.png")
    bathImg=loadAnimation("images/bath1.png","images/bath2.png")
    brushImg=loadImage("images/brush.png")
    drinkImg=loadAnimation("images/drink1.png","images/drink2.png")
    eatImg=loadAnimation("images/eat1.png","images/eat2.png")
    moveImg=loadAnimation("images/move1.png")
}

function setup(){
    createCanvas(800,500)
    
    bk=createSprite(400,250,200,200)
    bk.addImage(issImage)  

    ass=createSprite(400,325)
   
    ass.scale=0.1
    
    bk.scale=0.17

}

function draw(){
    background("white") 
    
    if(keyWentDown("UP_ARROW")) {
ass.addImage(brushImg)
ass.scale=0.1
    }

    if(keyWentDown("DOWN_ARROW")) {
        ass.addAnimation("gym",gymImg)
        ass.changeAnimation("gym",gymImg)
        ass.scale=0.1
            }

            if(keyWentDown("LEFT_ARROW")) {
                ass.addAnimation("eat",eatImg)
                ass.changeAnimation("eat",eatImg)
                ass.scale=0.1
                    }

                    
            if(keyWentDown("RIGHT_ARROW")) {
                ass.addAnimation("bath",bathImg)
                ass.changeAnimation("bath",bathImg)
                ass.scale=0.1
                    }

                    if(keyWentDown("m")) {
                        ass.addAnimation("move",moveImg)
                        ass.changeAnimation("move",moveImg)
                        ass.scale=0.1
                            }
drawSprites();
textSize(15)
fill("red")
text("INSTRUCTION:",120,60)
text("UP ARROW=BRUSHING",120,80)
text("DOWN ARROW=GYM",120,100)
text("LEFT ARROW=EAT",120,120)
text("RIGHT ARROW=BATH",120,140)
text("LEFT ARROW=MOVE",120,160)
}