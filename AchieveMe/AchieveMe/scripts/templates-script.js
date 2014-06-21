/// <reference path="_references.js" />
var BROWSE_ACHIEVEMENTS_TEMPLATE_ID = 'browse-achievements-grid-template';
var MY_ACHIEVEMENTS_TEMPLATE_ID = 'my-achievements-grid-template';
var string;
var browseAchTemplate;
var myAchTemplate;

string = document.getElementById(BROWSE_ACHIEVEMENTS_TEMPLATE_ID).innerHTML;
browseAchTemplate = Handlebars.compile(string);

string = document.getElementById(MY_ACHIEVEMENTS_TEMPLATE_ID).innerHTML;
myAchTemplate = Handlebars.compile(string);

$('#browse-section').
    find('.current-browse-tab-content').
    append(getBrowseAchievementsTemplate());

$('#my-achievements-section').
    find('#grid').
    append(getMyAchievementsTemplate());

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