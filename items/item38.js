"use strict";
function Scene(context, width, height, images) {
    this.context = context;
    this.width = width;
    this.height = height;
    this.images = images;
    this.actors = [];
}
Scene.prototype.register = function (actor) {
    this.actors.push(actor);
};
Scene.prototype.unRegister = function (actor) {
    var index = this.actors.indexOf(actor);
    if (index === -1) {
        return;
    }
    this.actors.splice(index, 1);
};
Scene.prototype.draw = function () {
    this.context.clearRect(0, 0, this.width, this.height);
    this.actors.forEach(function (actor) {
        actor.draw();
    });
};

// Actor
function Actor(scene, x, y) {
    this.scene = scene;
    this.x = x;
    this.y = y;
    scene.register(this);
}
Actor.prototype.moveTo = function (x, y) {
    this.x = x;
    this.y = y;
    this.scene.draw();
};
Actor.prototype.exit = function () {
    this.scene.unRegister(this);
    this.scene.draw();
};
Actor.prototype.draw = function () {
    var image = this.scene.images[this.type];
    this.scene.context.drawImage(image, this.x, this.y);
};
Actor.prototype.width = function () {
    return this.scene.images[this.type].width;
};
Actor.prototype.height = function () {
    return this.scene.images[this.type].height;
};

function SpaceShip(scene, x, y) {
    Actor.call(this, scene, x, y);
    this.points = 0;
}
SpaceShip.prototype = Object.create(Actor.prototype);
// share
SpaceShip.prototype.type = "spaceShip";
SpaceShip.prototype.scorePoint = function () {
    this.points++;
};
SpaceShip.prototype.left = function () {
    this.moveTo(Math.max(this.x - 10, 0), this.y);
};
SpaceShip.prototype.right = function () {
    var maxWidth = this.scene.width - this.width();
    this.moveTo(Math.min(this.x + 10, maxWidth), this.y);
};


