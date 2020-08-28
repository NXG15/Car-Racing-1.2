class Game{
    constructor(){

    }

    getState(){
        var gamestateref = database.ref("gamestate");
        gamestateref.on("value",function(data){
           gameState = data.val();
        })
    }
    
    update(state){
        database.ref('/').update({
            gamestate: state
        });
    }

    start(){
        if(gameState ==0){
            player = new Player();
            player.getCount();

            form = new Form();
            form.display();
        }
    }

    play(){
        form.myHide();

        //Game text
        textSize(30);
        text("Game has started",120,100);

        Player.getPlayerInfo();

        if(allPlayers !== undefined){
            var displayPosition = 130;

            //console.log(allPlayers);
            for(var plr in allPlayers){
                displayPosition = displayPosition + 20;
                
                if(plr == "player" + player.index){
                    fill("red");
                    //text(plr,160,displayPosition);
                }

                else{
                    fill("black");
                }

                textSize(15);
                text(allPlayers[plr].name + " : " + allPlayers[plr].distance,120,
                displayPosition)
            }
        }

        if(keyIsDown(UP_ARROW) && player.index != null){
            player.distance= player.distance + 50;

            player.update();
        }

    }

    
}