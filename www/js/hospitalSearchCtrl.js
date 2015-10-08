angular.module('starter.controllers', [])

.controller('HospitalSearchCtrl', function($scope, HospitalData) {

 
  $scope.$on('$ionicView.beforeEnter', function(e) {
    
  //    // $scope.choice = $stateParams.type_of_hospital
  // 	  //$scope.city = $stateParams.city
  // 	  $scope.choice

  //     $scope.searchHospitals = function(){

  //     	 $scope.items = HospitalData.Responses.query({type_of_hospital:$scope.choice, city:$scope.city} 

  //    	 });  
  //     }
        
  }) 
})	