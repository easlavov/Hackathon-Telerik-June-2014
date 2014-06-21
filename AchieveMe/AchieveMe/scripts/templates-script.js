/// <reference path="_references.js" />
var BROWSE_ACHIEVEMENTS_TEMPLATE_ID = 'browse-achievements-grid-template';
var MY_ACHIEVEMENTS_TEMPLATE_ID = 'my-achievements-grid-template';
var string;
var browseAchTemplate;
var myAchTemplate;
var achievementProfileTemplate;

string = document.getElementById(BROWSE_ACHIEVEMENTS_TEMPLATE_ID).innerHTML;
browseAchTemplate = Handlebars.compile(string);

string = document.getElementById(MY_ACHIEVEMENTS_TEMPLATE_ID).innerHTML;
myAchTemplate = Handlebars.compile(string);

refreshBrowseAchContent();
refreshMyAchContent();

function refreshBrowseAchContent() {
    $('#browse-section').
        find('#popular-tab-content').
        html(getBrowseAchievementsTemplate());
}

function refreshMyAchContent() {
    $('#my-achievements-section').
        find('#grid').
        html(getMyAchievementsTemplate());
}

function getBrowseAchievementsTemplate() {
    var html = browseAchTemplate({
        achievements : sampleAchievements
    });
    return html;
}

function getMyAchievementsTemplate() {
    var html = myAchTemplate({
        userAchievements : userAchievements
    });
    return html;
}