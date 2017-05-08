/**
 * Created by vemulma on 3/22/2017.
 */

const Article = require('../schema/newArticleSchema.js');

function getArticle(req){
    return new Promise(function(resolve, reject){

        var articleId = req.query.id;

        Article.findById({_id : articleId},(err, doc) => {
            if(err) throw err.message;
            resolve(doc);
        })
    })
}

module.exports = getArticle;