(function() {
  var app = angular.module('myApp.worlds', []);

  app.controller('WorldController', ['$http', function($http) {
    var worldCtrl = this,
    	world;
    
    worldCtrl.getWorldList = function() {};
    worldCtrl.getMonsterList = function() {};
    worldCtrl.getWorldInfo = function(worldID) {};

  }]);

})();