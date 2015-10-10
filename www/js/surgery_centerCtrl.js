angular.module('starter.controllers')


.controller('SurgeryCenterCtrl', function($scope, SurgeryCenterData) {

  $scope.$on('$ionicView.beforeEnter', function(e) {
    
   
      $scope.items = SurgeryCenterData.Responses.query({

      });  
         console.log($scope.items)

  }) 
})
