/**
 * Created by vemulma on 3/22/2017.
 */

const Article = require('../schema/newArticleSchema.js');

function addLike(req){
    return new Promise(function(resolve, reject){
        var articleId = req.body.id;
        var type = req.body.type;
        Article.findById({_id:articleId}, function (err, doc) {
            if(err) throw err;
            if(type === 'UnLike'){
                doc.likes = doc.likes - 1;
            }else{
                doc.likes = doc.likes + 1;
            }


            doc.save(function (err) {
                if (err) throw err;
                resolve({"msg":"Article Like Updated Successfully..!"});
            })
        })
    })
}

module.exports = addLike;