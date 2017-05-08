/**
 * Created by vemulma on 3/22/2017.
 */

const Article = require('../schema/newArticleSchema.js');

function getTagArticle(req){
    return new Promise(function(resolve, reject){

        var tagName = req.query.tag;


        console.log("tagName - - " + tagName);
        Article.find((err, docs) => {
            if(err) throw err.message;



            //resolve(docs);
            /*var articles = docs.filter(function(articles){
                if(articles.tags.includes(tagName)){
                    return articles;
                }
            });*/

            var articleData = [];
            console.log(typeof JSON.stringify(articleData));
            for(var i = 0; i < docs.length; i++){
                articleData.push(docs[i]);
                //console.log(docs[0].tags[0]);
                /*if(docs[i].tags.includes(tagName)){
                    articleData.push(docs[i]);
                }*/
            }
            var datata = Array.from(articleData)
            console.log('data - - ' +  datata + "typeee - - " + typeof datata);

        })
    })
}

module.exports = getTagArticle;