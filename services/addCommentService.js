/**
 * Created by vemulma on 3/22/2017.
 */

const Article = require('../schema/newArticleSchema.js');

function addLike(req){
    return new Promise(function(resolve, reject){
        var articleId = req.body.id;
        var comment = req.body.comment;
        Article.findById({_id:articleId}, function (err, doc) {
            if(err) throw err;
            doc.comments.push(comment);

            doc.save(function (err) {
                if (err) throw err;
                resolve({"msg":"Comment for Article Added Successfully..!"});
            })
        })
    })
}

module.exports = addLike;