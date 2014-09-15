'use strict';

describe("World", function() {
  var world;

  beforeEach(function() {
    angular.mock.module('myApp.worlds');
  });

  it("should have a controller named WorldController", inject(function($controller) {
    var worldCtrl = $controller('WorldController');
    expect(worldCtrl).toBeDefined();
  }));

  describe("world tasks", function() {
    var worldCtrl;

    beforeEach(inject(function($controller) {
      worldCtrl = $controller('WorldController');
    }));

    it("create a world list", function() {
      var worldList = worldCtrl.worldList;
      expect(worldList.name).toEqual('World 1');
      console.log(worldList.name);
    });

    it("create a world name", function() {
      var worldList = worldCtrl.worldList;
      expect(worldList.name).toEqual('World 1');
      console.log(worldList.name);
    });
  });
  

});