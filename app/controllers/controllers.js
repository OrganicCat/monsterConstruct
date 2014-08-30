(function() {
  var app = angular.module('myApp.controllers', []);

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
    getDamage: function() {
      return this.stats.strength + this.weapon.damage;
    }
  };

  var monsters = [
  {
    maxhp: 10,
    hp: 10,
    name: "Rat",
    damage: 1,
    level: 1,
    reward: {
      gold: 1,
      exp: 1
    }
  },
  {
    maxhp: 20,
    hp: 20,
    name: "Skeleton",
    damage: 2,
    level: 2,
    reward: {
      gold: 2,
      exp: 2
    }
  }];

  app.controller('FightController', function() {
    var fight = this;

    fight.player = player;
    fight.monster = {};
    fight.monsterList = monsters;
    fight.result = [];

    fight.combat = function() {
      fight.monster.hp -= fight.player.getDamage();

      if (fight.monster.hp > 0) {
        fight.player.hp -= fight.monster.damage;
        fight.result.push(fight.player.name + " did " + fight.player.getDamage() + " damage.");
      } else {
        fight.levelUp();
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

    fight.levelUp = function() {
      var expToLevel = fight.player.level * 10;
      fight.player.exp += fight.monster.reward.exp;
      if (fight.player.exp >= expToLevel) {
        fight.player.exp = 0;
        fight.player.level++;
        fight.player.damage++;
        fight.player.maxhp += 10;
        fight.player.hp = fight.player.maxhp;
      }
    };

  });

})();