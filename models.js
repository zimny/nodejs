
var mongoose = require('mongoose').Mongoose;
db = mongoose.connect('mongodb://localhost/nodepad');

mongoose.model('Document', {
      properties: ['title', 'data', 'tags'],

        indexes: [
            'title'
              ]
              });

exports.Document = function(db) {
    return db.model('Document');
};
