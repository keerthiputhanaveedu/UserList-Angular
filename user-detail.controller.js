(function() {
  'use strict';

  angular
    .module('plunker')
    .controller('UserDetailController', UserDetailController);

  UserDetailController.$inject = ['userService', '$routeParams'];

  function UserDetailController(userService, $routeParams) {
    var userVm = this;

    init();

    function init() {
      userService
        .getUser($routeParams.id)
        .then(function(data) {
          userVm.user = data;
        }, function(error) {
          console.log(error);
        });
      }
  }
})();
