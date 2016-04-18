angular.module('app', ['ui.router'])
  .controller('AppCtrl', AppCtrl)
  .config(function ($stateProvider, $urlRouterProvider) {
    //Default state 
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
      .state('home', {
        url: '/home',
        controller: 'HomeCtrl',
        controllerAs: 'home',
        templateUrl: './app/home/home.html'
      })
      .state('elvish', {
        url: '/elvish',
        controller: 'ElvishCtrl',
        controllerAs: 'elvish',
        templateUrl: './app/elvish/elvish.html'
      })
  });

function AppCtrl() {
  this.message = 'hello world'; 
}

