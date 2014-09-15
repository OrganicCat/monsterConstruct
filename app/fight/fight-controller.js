(function() {
  var app = angular.module('myApp.combat', ['firebase']);

  var player = {
    maxhp: 10,
    hp: 10,
    name: "Hero",
    stats: {
      strength: 2
    },
    level: 1,
    weapon: {
      name: "Rusty Dagger",
      damage: 1
    },
    exp: 0,
    gold: 0,
    getDamage: function() {
      return this.stats.strength + this.weapon.damage;
    }
  };

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

  app.controller('FightController', ['$http', 'monsterService', function($http, monsterService) {
    var fight = this;

    fight.player = player;
    fight.monster = {};
    fight.weaponList = {};
    fight.selectedWeapon = {};
    fight.result = [];
    // monsterService.monsterList.success(function(data) { fight.monsterList = data });
    fight.monsterList = monsterService.monsterList;
    // var test = monsterService.monsterList;

    $http.get('data/weapons.json').success(function(data) { fight.weaponList = data; });

    fight.combat = function() {
      fight.monster.hp -= fight.player.getDamage();

      fight.result.push(fight.player.name + " did " + fight.player.getDamage() + " damage.");

      if (fight.monster.hp > 0) {
        fight.player.hp -= fight.monster.damage;
        fight.result.push(fight.monster.name + " did " + fight.monster.damage + " damage.");
      } else {
        fight.rewards();
        fight.result.push(fight.monster.name + " lost the battle!");
      }

      if (fight.player.hp < 1) {
        fight.result.push(fight.player.name + " lost the battle!");
      }
    };

    fight.heal = function() {
      fight.monster.hp = fight.monster.maxhp;
      fight.player.hp = fight.player.maxhp;
      fight.result = [];
    };

    fight.rewards = function() {
      fight.player.exp += fight.monster.reward.exp;
      fight.levelUp();
      fight.player.gold += fight.monster.reward.gold;
    };

    fight.levelUp = function() {
      var expToLevel = fight.player.level * 10;
      
      if (fight.player.exp >= expToLevel) {
        fight.player.exp = 0;
        fight.player.level++;
        fight.player.stats.strength += fight.player.level;
        fight.player.maxhp += 10;
        fight.player.hp = fight.player.maxhp;
      }
    };

    // Move this into a buy/sell controller later
    fight.buyWeapon = function() {
      if (fight.player.gold >= fight.selectedWeapon.cost) {
        fight.player.gold -= fight.selectedWeapon.cost;
        fight.player.weapon = fight.selectedWeapon;
      }
    };

  }]);

})();