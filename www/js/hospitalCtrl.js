angular.module('starter.controllers', [])

.controller('HospitalCtrl', function($scope, HospitalData) {

  $scope.$on('$ionicView.beforeEnter', function(e) {
    
     // $scope.choice = $stateParams.type_of_hospital
  	 // $scope.city = "Chicago"

      $scope.searchHospitals = function(){

      	 $scope.items = HospitalData.Responses.get({type_of_hospital:"General Hospital", city:"Chicago" });  
      }
        
  }) 
})	