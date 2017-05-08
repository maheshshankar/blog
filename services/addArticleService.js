/**
 * Created by vemulma on 3/22/2017.
 */

const Article = require('../schema/newArticleSchema.js');

function addArticle(req){

    return new Promise(function(resolve, reject){
        var article = new Article();
        article.title = req.body.title;
        article.description = req.body.description;
        article.tags = req.body.tags;
        article.likes = 0;
        article.comments = req.body.comments;
        article.date = Date();

        article.save((err) => {
            if(err) throw err.message;
            resolve({"msg":"Article Saved Successfully..!"});
        })
    })
}

module.exports = addArticle;