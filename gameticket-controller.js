const Gameticket = require("./models/gameticket");

exports.createGameticket = function(req, res){
    let newGameticket = new Gameticket(req.body);
    newGameticket.save(function(err, gameticket){
        if(err){
            res.status(400).json(err);
        }
        res.json(gameticket);
    });
};

exports.getGametickets = function(req, res){
    Gameticket.find({}, function(err, gametickets){
        if(err){
            res.status(400).json(err);
        }
        res.json(gametickets);
    });
};

exports.getGameticket = function(req, res) {
    Gameticket.findOne({_id: req.params.id}, function (err, gameticket) {
      if (err) {
        res.status(400).json(err);
      } 
      res.json(gameticket);
    }); 
};

exports.updateGameticket = function(req, res) {
    Gameticket.findOneAndUpdate({_id: req.params.id}, req.body, {new: true},function (err, gameticket) {
      if (err) {
        res.status(400).json(err);
      } 
      res.json(gameticket);
    }); 
};

exports.deleteGameticket = function(req, res) {
    Gameticket.findByIdAndRemove(req.params.id, function (err, gameticket) {
      if (err) {
        res.status(400).json(err);
      } 
      res.json(gameticket);
    }); 
};

