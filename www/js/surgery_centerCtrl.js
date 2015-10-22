angular.module('starter.controllers')


.controller('SurgeryCenterCtrl', function($scope, SurgeryCenterData, $ionicLoading) {

  $scope.$on('$ionicView.beforeEnter', function(e) {
    
		$ionicLoading.show({
	          content: 'Loading...',
	          animation: 'fade-in',
	          showBackdrop: true,
	          maxWidth: 200,
	          showDelay: 0
	        });
	    
   

     $scope.astc={}

  }) 


 $scope.$on('$ionicView.afterEnter', function() {

	$scope.astcs = SurgeryCenterData.Responses.query();  

	$ionicLoading.hide();
     $scope.navigate=function(msg){
      alert(msg);
     $location.path("/maps")
     }

})

 $scope.toggleDetails = function(q){
   		$scope[q] = !$scope[q]
   }

   $scope.detailsVisible = function(q){
   		return $scope[q]
   }


})
