(function() {
  var app = angular.module('myApp.worlds', []);

  app.controller('WorldController', ['$http', function($http) {
    var world = this;
    
    world.worldList = { name: 'World 1' };

  }]);

})();