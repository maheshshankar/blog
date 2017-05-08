
var app = angular.module("myApp",['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/index',{templateUrl:'templates/articleList.html',controller:'listCtrl'})
	.when('/newArticle',{templateUrl:'templates/addArticle.html',controller:'addCtrl'})
	.when('/article/:id',{templateUrl:'templates/singleArticle.html',controller:'singleArticleCtrl'})
	.otherwise({redirectTo:'/index'})
});

app.controller("myCtrl",function(){
	console.log("I m In Controller");
});



app.controller("addCtrl",function($scope, $http, $location){
	console.log("I m In add Controller");
	$scope.addNewArticle = function(){
		console.log($scope.articleDetails);
		$http.post("http://localhost:3200/blog/author", $scope.articleDetails)
			.success(function(data){
				if(data.msg === 'Article Saved Successfully..!'){
					$location.path('/index');
				}
			})
			.error(function(){
				console.log("not found");
			})
	}

});


app.controller("listCtrl",function($scope, $http, $location){
	console.log("I m In list Controller");
	$scope.enableComment = false;
	$scope.getAllArticles = function(){
		$http.get("http://localhost:3200/blog")
				.success(function(data){
					$scope.allArticles = data;
				})
				.error(function(){
					console.log("not found");
				})
	}
	$scope.getAllArticles();

	/*$scope.getSingleArticle = function (id) {
		$location.path('/article/' + id);
    };*/

	$scope.articleData = [];
	$scope.searchTag = function () {
        console.log($scope.tagName, $scope.allArticles);
        if($scope.tagName){
            for(var i = 0; i < $scope.allArticles.length; i++){
                //$scope.articleData.push($scope.allArticles[i]);
                //console.log(docs[0].tags[0]);
                if($scope.allArticles[i].tags.includes($scope.tagName)){
                    $scope.articleData.push($scope.allArticles[i]);
                }
            }
            $scope.allArticles = $scope.articleData;
        }else{
            $scope.getAllArticles();
        }

    }

});


app.controller("singleArticleCtrl",function($scope, $http, $routeParams){
    console.log("I m In Single Article", $routeParams.id);
    $scope.disAbleLike = true;
    var articleId = $routeParams.id;
    $scope.getArticleData = function (articleId) {
        $http.get("http://localhost:3200/blog/getSingleArticle?id=" + articleId)
            .success(function (data) {
                $scope.articleData = data;
            })
            .error(function () {
                console.log("not found");
            })
    };
    $scope.getArticleData(articleId);

    $scope.likeArticle = function (type, articleId) {
    	console.log($scope.disAbleLike);
    	if(type === 'Like'){
            $scope.disAbleLike = false;
		}else{
            $scope.disAbleLike = true;
		}
        $http.post("http://localhost:3200/blog/like", {id: articleId, type: type})
            .success(function (data) {
                $scope.getArticleData(articleId);
                //$scope.disAbleLike = false;
            })
            .error(function () {
                console.log("not found");
            })
    };

    /*$scope.disLikeArticle = function (type, articleId) {
        console.log($scope.disAbleLike);
        console.log(type, articleId);
		$scope.disAbleLike = true;
		$scope.likeArticle(type, articleId);
    };*/

    $scope.addComment = function (id, comment) {
        $http.post("http://localhost:3200/blog/addComment", {id: id, comment: comment})
            .success(function (data) {
            	$scope.articleComment = '';
                $scope.getArticleData(id);
            })
            .error(function () {
                console.log("not found");
            })
    };

});