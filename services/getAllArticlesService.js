/**
 * Created by vemulma on 3/22/2017.
 */

const Article = require('../schema/newArticleSchema.js');

function getAllArticles(req){
    return new Promise(function(resolve, reject){
      
        Article.find((err, docs) => {
            if(err) throw err.message;
            resolve(docs);
        })
    })
}

module.exports = getAllArticles;