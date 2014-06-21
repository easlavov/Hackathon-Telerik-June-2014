/// <reference path="_references.js" />
function Achievment(item) {
    this.title = item.title;
    this.description = item.description;
    this.status = item.status;
    this.reward = item.reward;
    this.proof = item.proof;
    this.author = item.author;
    this.linkedAchievements = item.linkedAchievements;
    this.date = new Date();

    return this;
}

var achievment = new Achievment({});

console.log(achievment);