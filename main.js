/*
 * By Lee Delarm
 * Monster Construct
 *
 * A game to demonstrate basic Angular.js principles. Growing from using
 * basic template structures like Knockout.js to directives, modules, and
 * controllers.
 */
(function() {
  var app = angular.module('monsterconstruct', []);

  app.controller('FightController', function() {
    var fight = this;
    fight.player = player;
    fight.monster = monster;
    fight.result = "";

    fight.combat = function() {
      fight.monster.hp -= fight.player.damage;

      if (fight.monster.hp > 0) {
        fight.player.hp -= fight.monster.damage;
        fight.result = fight.player.name + " did " + fight.player.damage + " damage.";
      } else {
        fight.result = fight.monster.name + " lost the battle!";
      }

      if (fight.player.hp < 1) {
        fight.result = fight.player.name + " lost the battle!";
      }
    };

    fight.heal = function() {
      fight.monster.hp = 10;
      fight.player.hp = 10;
    };
  });

  var player = {
    hp: 10,
    name: "Hero",
    damage: 2,
    level: 1,
    exp: 0
  };

  var monster = {
    hp: 10,
    name: "Rat",
    damage: 1,
    level: 1,
    exp: 1
  };

})();
