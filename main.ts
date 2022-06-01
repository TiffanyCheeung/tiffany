controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 9 5 9 5 9 . . . . . . 
        . . 9 5 9 5 9 5 9 5 9 . . . . . 
        . 9 5 9 5 9 5 9 5 9 5 . . . . . 
        9 5 9 5 9 5 9 5 9 5 . . . . . . 
        . . 5 9 5 9 5 9 5 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 50, 50)
})
let projectile: Sprite = null
let mySprite: Sprite = null
effects.starField.startScreenEffect()
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . 4 4 4 6 6 6 
    . . . . . . 4 4 4 4 4 8 4 . . . 
    . . . 4 4 4 4 8 3 8 8 3 4 . . . 
    . . 4 4 8 8 8 8 8 8 3 8 4 3 . . 
    3 4 4 3 8 3 8 3 3 3 8 3 4 3 3 . 
    4 4 4 8 3 8 3 8 3 8 3 8 4 3 3 . 
    3 3 4 4 3 3 3 3 3 3 3 3 4 3 . . 
    . . 3 3 4 4 8 8 8 3 8 4 4 . . . 
    . . . . 3 4 4 4 8 8 3 4 4 4 . . 
    . . . . . 3 3 4 4 4 4 4 4 4 6 6 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
