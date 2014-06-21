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


$('#browse-section').
    find('#popular-tab-content').
    on('click', '.browsed-achievement', onClickBrowseAchievements);

$('#my-achievements-section').
    find('#grid').
    on('click', '.my-achievement', onClickMyAchievements);


function onClickMyAchievements() {
    var achId = $(this).data('id');
    // TODO: show the page
    refreshMyAchievementProfile(findItemById(userAchievements, achId))
}

function onClickBrowseAchievements() {
    var achId = $(this).data('id');
    // TODO: show the page
    refreshAchievementProfile(findItemById(sampleAchievements, achId))
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