angular.module('starter.controllers')

.controller('HospitalCtrl', function($scope, HospitalData) {

  $scope.$on('$ionicView.beforeEnter', function(e) {
    
     $scope.hospital={}

     $scope.hospitals = HospitalData.AllResponses.query({});
     
  })


  $scope.searchHospitals = function(){

	   $scope.hospitals = HospitalData.Responses.query({ type_of_hospital:$scope.hospital.choice, city:$scope.hospital.city }); 
      } 

   $scope.toggleDetails = function(q){
   		$scope[q] = !$scope[q]
   }

   $scope.detailsVisible = function(q){
   		return $scope[q]
   }

   $scope.openMap = function(){
    
   }

})	

