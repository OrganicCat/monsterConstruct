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
    gold: 0,
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
      gold: 10,
      exp: 5
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

  var weaponList = [
  {
    name: "Rusty Dagger",
    damage: 2,
    cost: 5
  },
  {
    name: "Shiny Dagger",
    damage: 10,
    cost: 50
  },
  {
    name: "Shortsword",
    damage: 15,
    cost: 100
  }
  ];

  app.controller('FightController', function() {
    var fight = this;

    fight.player = player;
    fight.monster = {};
    fight.monsterList = monsters;
    fight.weaponList = weaponList;
    fight.selectedWeapon = {};
    fight.result = [];

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
        fight.player.stats.strength++;
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

  });

})();