angular.module('starter.controllers', [])

.controller('HospitalCtrl', function($scope, HospitalData) {

  $scope.$on('$ionicView.beforeEnter', function(e) {
    
   
      $scope.items = HospitalData.Responses.query({

      });  

  }) 
})