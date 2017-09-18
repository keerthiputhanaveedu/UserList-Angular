(function() {
  'use strict';

  angular
    .module('plunker')
    .controller('UserListController', UserListController);

  UserListController.$inject = ['userService'];

  function UserListController(userService) {
    var userListVm = this;

    init();

    function init() {
      console.log('in UserListController');

      userListVm.sorter = {
        sortBy: 'firstName',
        sortOrder: false
      };

      userService.getUsers()
        .then(function(data) {
          userListVm.users = data;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
})();
