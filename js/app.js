var app = angular.module('myApp',[]);

app.controller('myValues', function($scope){
     var books;
     var data = {};
     var array = [];
     var thumbnail = [];
     var val = false;
    $scope.books = books;
    $scope.array = data.items;
    $scope.thumbnail = thumbnail;
    $scope.val = val;

	$scope.bookSearch = function(books){
		$.ajax({
			   	url: "https://www.googleapis.com/books/v1/volumes?q=" + books,
			   	dataType: "json",
				success: function(data){
					$scope.array = (data.items);
				
					$scope.val = true;
					
					
					
				},
					type: 'GET'
		});	
		
		
	}
});
		
 
		
		

				




