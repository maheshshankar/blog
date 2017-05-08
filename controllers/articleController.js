/**
 * Created by vemulma on 3/22/2017.
 */

const addArticleService = require('../services/addArticleService.js');
const getAllArticlesService = require('../services/getAllArticlesService.js');
const addLikeService = require('../services/addLikesService.js');
const addCommentService = require('../services/addCommentService.js');
const getArticleService = require('../services/getArticleService.js');
const getTagsArticleService = require('../services/getTagArticleService.js');

exports.addArticle = function(req, res){
  addArticleService(req)
      .then(function(data){
          res.json(data);
      });
};

exports.getAllArticles = function(req, res){
    getAllArticlesService(req)
        .then(function(data){
            res.json(data);
        });
};

exports.addLikes = function(req, res){
    addLikeService(req)
        .then(function(data){
            res.json(data);
        });
};

exports.addComments = function(req, res){
    addCommentService(req)
        .then(function(data){
            res.json(data);
        });
};

exports.getArticle = function(req, res){
    getArticleService(req)
        .then(function(data){
            res.json(data);
        });
};

exports.getArticlesTags = function(req, res){
    getTagsArticleService(req)
        .then(function(data){
            res.json(data);
        });
};