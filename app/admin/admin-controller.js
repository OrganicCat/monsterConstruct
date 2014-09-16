(function() {

  var app = angular.module('myApp.admin', ['firebase', 'myApp.player']);

  app.controller('AdminController', ['$firebase', '$scope', function($firebase, $scope) {
    var admin = this;

    admin.playerLevel = 0;
    admin.monsterHP = 0;
    admin.playerdamage = function () { return (admin.playerLevel * 0.45) + 3; };
    admin.playerstrength = function () { return Math.ceil((admin.playerdamage() * .75) * 10) / 10; };
    admin.totalhits = function () { return Math.ceil(admin.monsterHP / admin.playerstrength()); };

    var numHits = (admin.playerLevel * 0.45) + 3;

    /*var ref = new Firebase("https://monster-construct.firebaseio.com/player");
    // create an AngularFire reference to the data
    var sync = $firebase(ref);
    // download the data into a local object
    var syncObject = sync.$asObject();
    syncObject.$bindTo($scope, 'admin.data');*/

  }]);

})();