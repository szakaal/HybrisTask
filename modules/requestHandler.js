let images = require('./images');

//Request handler object. Should be class, but I had a lot of problems with
//importing / require`ing ES6 classes.
let requestHandler = {
    handle: (request, logger, callback) => {
        let requestQuery = request.query;
        logger('log', requestQuery);
        let foundImages = images.find(requestQuery.quantity, requestQuery.resolution);
        logger('found ' + foundImages.length + ' images.');
        callback(foundImages);
    }
};
module.exports = requestHandler;
