let gameIds=[];

//Heroku app access collection gametickets
let apiURL = "https://iwa-ca2kelly.herokuapp.com/gametickets"

//variable to the selected game
let gameSelected='';

//form to diplay field to the user if click ADD game
function add_new_gameticket(){
    $("#mygame").empty();
    let strHtml = 
    "<form class = 'formgame' > " +
    "<label gamelabel='gamel'>Game Ticket: </label>" +
    "<input gameinput='gametext' id='gameticket_type'><br>" +
    "<label moreinfolabel='moreinfol'>More Info: </label>" +
    "<input moreinfoinput='moreinfotext' id = 'moreinfo_type'><br></br>" +
    "<input id='gametickets_id' type='hidden' value=''/>"+
    "<button type='button1' class='btn1' onclick ='submitGaelicgame()'>Add a game</button>"+
    "</form>"
    $("#mygame").append(strHtml);
}

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
        $("#my-retrieve").append(strHtml);

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
            $("#my-retrieve").empty();
            gameSelected ='';
            }
    

    
};

//show games  
function showGames(gameId){
    $("#my-retrieve").empty();
    retrieveGames(gameId);
    gameSelected = gameId;
};

function getGames(){
    
    fetch(apiURL)
    .then(function (response){
        return response.json();
    })
    .then(function(data){
        for (var i = 0; i< data.length ; i++ ){
            var id = data[i]._id;
            if(!gameIds.includes(id)){
            document.getElementById("my-retrieve").innerHTML +=
            "<li id='name"+id+"' onclick= \"showGames('"+id+"')\">" + data[i].gaelicgame+"</li>"
            gameIds.push(id);
            }
         
        }
    }).catch(function (err){
        console.log(err);
    }); 
    console.log(gameIds);

};


$(document).ready(function(){
    getGames();
});