/**
 * Created by vemulma on 3/22/2017.
 */
var mongoose = require('mongoose');

(function() {
    module.exports = function(app) {
        mongoose.connect("mongodb://localhost/blog", function(err) {
            if (err) throw err;
            console.log('DB Connection Established...!');
        });

        var db = mongoose.connection;
        mongoose.promise = global.Promise;
    }
})();
