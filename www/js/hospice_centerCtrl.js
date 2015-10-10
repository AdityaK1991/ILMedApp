angular.module('starter.controllers')

.controller('HospiceCenterCtrl', function($scope, HospiceData) {

  $scope.$on('$ionicView.beforeEnter', function(e) {
    
      $scope.items = HospiceData.Responses.query({

      });  

  }) 
})