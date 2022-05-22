const { route } = require("express/lib/application");

module.exports.UPLOAD_PATH = 'uploads';

const   express = require("express"),
        router = express.Router(),
        gameticketCtrl = require("./gameticket-controller"),
        multer = require('multer'),
        upload = multer({ dest: module.exports.UPLOAD_PATH }),
        app = express(),
        path = require('path');

router.use(express.static(__dirname + '/public/'));

router.post('/gametickets', gameticketCtrl.createGameticket);
router.get('/gametickets', gameticketCtrl.getGametickets);
router.get('/gametickets/:id', gameticketCtrl.getGameticket);
router.put('/gametickets/:id', gameticketCtrl.updateGameticket);
router.delete('/gametickets/:id', gameticketCtrl.deleteGameticket);

//show the index.html at the index
router.get('/',(req, res) => {
    res.sendFile('index.html', {
        root: path.join(__dirname, './views')
    })
});


module.exports = router;