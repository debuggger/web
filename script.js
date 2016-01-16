(function(){
	var app = angular.module('mysite', ['ngSanitize']);
	
	
	app.controller('mainCtrl', ['$scope', function($scope){
		console.log('main controller');
		
		$scope.activeTab = "homePage.html";
		
		$scope.resumeClicked = function(){
			$scope.activeTab = "resume.html";
		};
		
		$scope.projectsClicked = function(){
			$scope.activeTab = "projects.html";
		};
		
		$scope.contactClicked = function(){
			$scope.activeTab = "contact.html";
		};
		
	}]);
	
	app.controller('homePageCtrl', ['$scope', function($scope){
		console.log('homePage controller');
	}]);
	
	app.controller('resumeCtrl', ['$scope', function($scope){
		console.log('resume controller');
	}]);
	
	app.controller('contactCtrl', ['$scope', function($scope){
		console.log('resume controller');
	}]);
	
	
	app.controller('projectsCtrl', ['$scope', '$sce', function($scope, $sce){
		console.log('contact controller');
		
		$scope.projects = [
							{
								'title':'Handwritten digit classification',
								'desc': $sce.trustAsHtml('\
								<p>\
									The project is intended to compare the performances of 2 classification algorithms namely, Logistic Regression and Neural Networks. The classification problem being solved is that of handwritten digit recognition, an instance of multi class classification involving classifying digits between 0-9. The training and test data used is from the MNIST data-set. The aim of the project is to find the optimal set of weight values that results in the least misclassification rate.\
									<img src="574-p3.png">\
								</p>\
								')
							},
							{
								'title':'Linear Regression',
								'desc': 'This project was intended to predict the relevance of search engine results using Linear Regression'
							},
							{
								'title':'Linear Regression',
								'desc': 'This project was intended to predict the relevance of search engine results using Linear Regression'
							},
							{
								'title':'Linear Regression',
								'desc': 'This project was intended to predict the relevance of search engine results using Linear Regression'
							},
							{
								'title':'Linear Regression',
								'desc': 'This project was intended to predict the relevance of search engine results using Linear Regression'
							}];
		
		
		
		$scope.tileClicked = function(index){
			
			$scope.activeProject = $scope.projects[index];
			$('#myModal').modal({
			  keyboard: false,
			  show: true
			});
		};
		
	}]);
	
	
})()