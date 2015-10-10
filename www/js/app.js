// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(['$ionicConfigProvider', function($ionicConfigProvider) {

    $ionicConfigProvider.tabs.position('bottom'); // other values: top

}])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.

  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.main', {
    url: '/main',
    views: {
      'tab-main': {
        templateUrl: 'templates/tab-main.html',
        controller: 'MainCtrl'
      }
    }
  })

  .state('tab.hospitalSearch', {
    url: '/main/hospitals',
    views: {
      'tab-main': {
        templateUrl: 'templates/hospitalSearch.html',
        controller: "HospitalCtrl"
      }
    }
  })


  .state('tab.surgeryCenters', {
    url: '/main/surgeryCenter',
    views: {
      'tab-main': {
        templateUrl: 'templates/surgeryCenters.html',
        controller: 'SurgeryCenterCtrl'
      }
    }
  })

  .state('tab.hospiceCenters', {
    url: '/main/hospiceCenter',
    views: {
      'tab-main': {
        templateUrl: 'templates/hospiceCenters.html',
        controller: 'HospiceCenterCtrl'
      }
    }
  })

  .state('tab.healthAgencies', {
    url: '/main/healthAgency',
    views: {
      'tab-main': {
        templateUrl: 'templates/healthAgencies.html',
        controller: 'HealthAgencyCtrl'
      }
    }
  })


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/main');

});
