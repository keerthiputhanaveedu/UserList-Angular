(function() {
  'use strict';

  angular
    .module('plunker')
    .service('userService', userService);

  userService.$inject = ['$http', '$q'];

  function userService($http, $q) {
    var self = this;

    self.getUsers = getUsers;
    self.getUser = getUser;
    self.createUser = createUser;

    function getUsers() {
      return $http.get('http://mocker.egen.io/users')
        .then(successFn, errorFn);
    }

    function getUser(id) {
      return $http.get('http://mocker.egen.io/users/' + id)
        .then(successFn, errorFn);
    }

    function createUser(user) {
      return $http.post('http://mocker.egen.io/users', user)
        .then(successFn, errorFn);
    }

    function successFn(response) {
      return response.data; //RESOLVE
    }

    function errorFn(response) {
      return $q.reject(error.status); //REJECT
    }
  }
})();
