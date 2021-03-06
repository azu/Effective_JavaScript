"use strict";
// Actor
function Actor(scene, x, y) {
    this.scene = scene;
    this.x = x;
    this.y = y;
    this.actorID = ++Actor.nextID;
    scene.register(this);
}
Actor.nextID = 0;

function Alien(scene, x, y, direction, speed, strength) {
    Actor.call(this, scene, x, y);
    this.direction = direction;
    this.speed = speed;
    this.strength = strength;
    this.damage = 0;
    this.id = ++Alien.nextID;
}
Alien.nextID = 0;
