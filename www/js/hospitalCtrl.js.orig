angular.module('starter.controllers')

.controller('HospitalCtrl', function($scope, HospitalData, $ionicLoading) {

  $scope.$on('$ionicView.beforeEnter', function(e) {
    
        $ionicLoading.show({
          content: 'Loading...',
          animation: 'fade-in',
          showBackdrop: true,
          maxWidth: 200,
          showDelay: 0
        });
    
   

     $scope.hospital={}

     
     
  })

  $scope.$on('$ionicView.afterEnter', function() {

     
     $scope.hospitals = HospitalData.AllResponses.query();
     $ionicLoading.hide();
     $scope.navigate=function(msg){
      alert(msg);
     $location.path("/maps")
     }

  })


  // $scope.searchHospitals = function(){

	 //   $scope.hospitals = HospitalData.Responses.query({ type_of_hospital:$scope.hospital.choice, city:$scope.hospital.city });  

		//    //console.log($scope.hello)
		//    //console.log($scope.hosp)
   
  //     } 

   $scope.toggleDetails = function(q){
   		$scope[q] = !$scope[q]
   }

   $scope.detailsVisible = function(q){
   		return $scope[q]
   }

   $scope.openMap = function(){
    
   }

})	

