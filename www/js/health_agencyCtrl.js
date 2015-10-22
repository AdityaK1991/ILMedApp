angular.module('starter.controllers')


.controller('HealthAgencyCtrl', function($scope, HealthAgencyData, $ionicLoading) {

  $scope.$on('$ionicView.beforeEnter', function(e) {
    
   $ionicLoading.show({
	          content: 'Loading...',
	          animation: 'fade-in',
	          showBackdrop: true,
	          maxWidth: 200,
	          showDelay: 0
	        });
	    
   

     $scope.health_agency={}

  })


 $scope.$on('$ionicView.afterEnter', function() {

  $scope.health_agencies = HealthAgencyData.Responses.query();   

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