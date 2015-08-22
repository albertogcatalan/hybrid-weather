
// angular.module is a global place for creating, registering and retrieving Angular modules

angular.module('weather', ['ionic', 'weather.controllers'])

.run(function($ionicPlatform) {
//
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html',
    controller:'TabsController'
  })

  // Each tab has its own nav history stack:

  .state('tab.dashboard', {
    url: '/dashboard',
    views: {
      'tab-dashboard': {
        templateUrl: 'templates/dashboard.html',
        controller: 'DashboardController'
      }
    }
  })

  .state('tab.information', {
      url: '/information',
      views: {
        'tab-information': {
          templateUrl: 'templates/information.html',
          controller: 'InformationController'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dashboard');

});
