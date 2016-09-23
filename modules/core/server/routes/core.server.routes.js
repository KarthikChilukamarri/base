/**
 * Created by MrKK on 9/1/16.
 */

var controller = require('../controllers/core.server.controller');
var mainController = require('../controllers/main.server.controller');

module.exports = function(app) {
    
    app
        .route('/')
        .get(mainController.index);

}