(function() {
  var app = angular.module('myApp.worlds', ['ngResource']);

  app.factory('worldFactory', ['$http', '$resource', function($http, $resource) {
    // var worldList = 
    return {
      worldList: $resource('data/worlds.json').query()
    };

  }]);

})();