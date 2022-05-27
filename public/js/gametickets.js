let gameIds=[];
let apiURL = "https://iwa-ca2t.herokuapp.com/gametickets"
let gameSelected='';

// retrieve my games
function retrieveGames(gameId){
    
    let url = apiURL + gameId;
    
    fetch(url)
    .then(function (response){
        return response.json();
    })
    .then(function(game){
    
        let strHtml = "<h1>"+game.gaelicgame+"</h1>"

        strHtml+="<h2>More info: </h2>"+
            "<h2>"+ game.moreinfos.replace(/\\n/g, "<br />"); +"</h2>"
        $("#mygame").append(strHtml);

    }).catch(function (err){
        console.log(err);
    }); 

};

//delete my game
function delete_gameticket(){


    if(!gameSelected == ''){
    
            fetch(apiURL+gameSelected,{
                method: 'delete',
            }).then(response => response.json()) 
            .then(json => {
                console.log(json)
                newID =json._id ;
            })
            .catch(err => console.log(err));
            
            
            document.getElementById("artists"+gameSelected).remove();
            
            gameIds.splice(gameIds.indexOf(gameSelected));
            $("#mygame").empty();
            gameSelected ='';
            }
    

    
};

//show games  
function showGames(gameId){
    $("#mygame").empty();
    showConcert(gameId);
    gameSelected = gameId;
};

