angular.module('starter.controllers')


.controller('HealthAgencyCtrl', function($scope, HealthAgencyData) {

  $scope.$on('$ionicView.beforeEnter', function(e) {
    
   
      $scope.items = HealthAgencyData.Responses.query({

      });  

  }) 
})