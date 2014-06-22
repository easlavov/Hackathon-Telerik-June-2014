/// <reference path="_references.js" />
var BROWSE_ACHIEVEMENTS_TEMPLATE_ID = 'browse-achievements-grid-template';
var MY_ACHIEVEMENTS_TEMPLATE_ID = 'my-achievements-grid-template';
var ACHIEVEMENTS_PROFILE_TEMPLATE_ID = 'achievement-profile-template';
var MY_ACHIEVEMENTS_PROFILE_TEMPLATE_ID = 'my-achievement-profile-template';
var string;
var browseAchTemplate;
var myAchTemplate;
var achievementProfileTemplate;
var myAchievementProfileTemplate;
var titleTemplate;
var healthTemplate;
var sportTemplate;

string = document.getElementById(BROWSE_ACHIEVEMENTS_TEMPLATE_ID).innerHTML;
browseAchTemplate = Handlebars.compile(string);

string = document.getElementById(MY_ACHIEVEMENTS_TEMPLATE_ID).innerHTML;
myAchTemplate = Handlebars.compile(string);

string = document.getElementById(ACHIEVEMENTS_PROFILE_TEMPLATE_ID).innerHTML;
achievementProfileTemplate = Handlebars.compile(string);

string = document.getElementById(MY_ACHIEVEMENTS_PROFILE_TEMPLATE_ID).innerHTML;
myAchievementProfileTemplate = Handlebars.compile(string);

refreshBrowseAchContent();
refreshMyAchContent();
refreshLatestAchContent();
refreshTravelContent();
refreshSportContent();
refreshHealthContent();

function refreshUserAchievementsContent() {
    latestAchievements = getLatestAchievements();
    $('#my-achievements-section').
        find('#grid').
        html(getMyAchievementProfile(userAchievements));
}

function refreshHealthContent() {
    latestAchievements = getLatestAchievements();
    $('#categories-section').
        find('#health-tab-content').
        html(getBrowseAchievementsTemplate(healths));
}

function refreshSportContent() {
    latestAchievements = getLatestAchievements();
    $('#categories-section').
        find('#sport-tab-content').
        html(getBrowseAchievementsTemplate(sports));
}

function refreshTravelContent() {
    latestAchievements = getLatestAchievements();
    $('#categories-section').
        find('#travel-tab-content').
        html(getBrowseAchievementsTemplate(travels));
}

function refreshLatestAchContent() {
    latestAchievements = getLatestAchievements();
    $('#browse-section').
        find('#latest-tab-content').
        html(getBrowseAchievementsTemplate(latestAchievements));
}

function refreshBrowseAchContent() {
    $('#browse-section').
        find('#popular-tab-content').
        html(getBrowseAchievementsTemplate(sampleAchievements));
}

function refreshMyAchContent() {
    $('#my-achievements-section').
        find('#grid').
        html(getMyAchievementsTemplate(userAchievements));
}

function refreshAchievementProfile(item) {
    $('#achievement-profile-section').
        html(getAchievementProfile(item));
}

function refreshMyAchievementProfile(item) {
    $('#my-achievement-profile-section').
        html(getMyAchievementProfile(item));
}

function getBrowseAchievementsTemplate(items) {
    var html = browseAchTemplate({
        achievements: items
    });
    return html;
}

function getMyAchievementsTemplate(items) {
    var html = myAchTemplate({
        userAchievements: items
    });
    return html;
}

function getAchievementProfile(achievement) {
    var html = achievementProfileTemplate(achievement);
    return html;
}

function getMyAchievementProfile(myAchievement) {
    var html = myAchievementProfileTemplate(myAchievement);
    return html;
}