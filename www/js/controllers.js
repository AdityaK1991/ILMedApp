angular.module('starter.controllers', [])

.controller('MainCtrl', function($scope) {

  
})


.controller('HospitalCtrl', function($scope, HospitalData) {

  $scope.$on('$ionicView.beforeEnter', function(e) {
    
   
      $scope.items = HospitalData.Responses.query({

      });  

  }) 
})


.controller('SurgeryCenterCtrl', function($scope, SurgeryCenterData) {

  $scope.$on('$ionicView.beforeEnter', function(e) {
    
   
      $scope.items = SurgeryCenterData.Responses.query({

      });  

  }) 
})


.controller('HospiceCenterCtrl', function($scope, HospiceData) {

  $scope.$on('$ionicView.beforeEnter', function(e) {
    
   
      $scope.items = HospiceData.Responses.query({

      });  

  }) 
})


.controller('HealthAgencyCtrl', function($scope, HealthAgencyData) {

  $scope.$on('$ionicView.beforeEnter', function(e) {
    
   
      $scope.items = HealthAgencyData.Responses.query({

      });  

  }) 
});