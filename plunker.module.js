(function() {
  'use strict';

  angular
    .module('plunker', ['ngMessages', 'ngRoute'])
    .config(moduleConfig)
    .run(moduleRun);

  moduleConfig.$inject = ['$routeProvider'];

  function moduleConfig($routeProvider) {
    $routeProvider
      .when('/user-list', {
        templateUrl: 'user-list.tmpl.html',
        controller: 'UserListController',
        controllerAs: 'userListVm'
      })
      .when('/user-detail/:id', {
        templateUrl: 'user-detail.tmpl.html',
        controller: 'UserDetailController',
        controllerAs: 'userVm'
      })
      .when('/add-user', {
        templateUrl: 'add-user.tmpl.html',
        controller: 'AddUserController',
        controllerAs: 'addUserVm'
      })
      .otherwise({
        redirectTo: '/user-list'
      });
  }

  moduleRun.$inject = [];

  function moduleRun() {
    console.log('App Started');
  }
})();
