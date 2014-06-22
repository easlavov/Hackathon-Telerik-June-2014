/// <reference path="_references.js" />
var $wrapper = $('#wrapper'),
    $menuSection = $('#main-menu-section'),
    $browseSection = $('#browse-section'),
    $categoriesListItem = $('#categories-tab'),
    $achievementsItem = $('#browse-section #popular-tab-content'),
    $myAchievementsItem = $('#my-achievements-section #grid'),
    $latestAchievementsItem = $('#browse-section #latest-tab-content'),
    $itemInCategorySection = $('#categories-section'),
    $achievementProfile = $('achievement-profile-section');

$menuSection.on('click', 'li', onMenuItemClick);
$browseSection.on('click', 'span', onBrowserSectionClick);
$categoriesListItem.on('click', 'span', onCategoriesTabClick);
$achievementsItem.on('click', '.browsed-achievement', onAchievementItemClick);
$myAchievementsItem.on('click', '.my-achievement', onMyAchievementItemClick);
$latestAchievementsItem.on('click', '.browsed-achievement', onLatestAchievementItemClick);
$itemInCategorySection.on('click', 'span', onBrowserSectionClick);
$achievementProfile.on('click', 'button', addAchievementToFavourites);

function onMenuItemClick() {
    var listItemDataInfo = $(this).attr('data-link-info'),
        $selectedSection = $('[data-tab-info=' + listItemDataInfo + ']');

    $menuSection.removeClass('current-section');
    $selectedSection.addClass('current-section');
}

function onBrowserSectionClick() {
    $clickedSpanItem = $(this);
    $clickedBrowseTabContent = $clickedSpanItem.parent().find('.browse-tab-content');
    if ($clickedBrowseTabContent.hasClass('current-browse-tab-content')) {
        $clickedBrowseTabContent.removeClass('current-browse-tab-content');
    }
    else {
        $clickedSpanItem.parent().parent().find('.current-browse-tab-content').removeClass('current-browse-tab-content');
        $clickedBrowseTabContent.addClass('current-browse-tab-content');
    }
}

function onCategoriesTabClick() {
    $wrapper.find('.current-section').removeClass('current-section');
    $selectedSection = $('[data-tab-info=4]');
    $selectedSection.addClass('current-section');
}

function onAchievementItemClick() {
    var achId = $(this).data('id');
    refreshAchievementProfile(findItemById(sampleAchievements, achId))
    $wrapper.find('.current-section').removeClass('current-section');
    $selectedSection = $('[data-tab-info=5]');
    $selectedSection.addClass('current-section');
}

function onLatestAchievementItemClick() {
    var achId = $(this).data('id');
    refreshAchievementProfile(findItemById(latestAchievements, achId))
    $wrapper.find('.current-section').removeClass('current-section');
    $selectedSection = $('[data-tab-info=5]');
    $selectedSection.addClass('current-section');
}

function onMyAchievementItemClick() {
    var achId = $(this).data('id');
    refreshMyAchievementProfile(findItemById(userAchievements, achId))
    $wrapper.find('.current-section').removeClass('current-section');
    $selectedSection = $('[data-tab-info=6]');
    $selectedSection.addClass('current-section');
}

$(document).on('keydown', function (ev) {
    if (ev.keyCode === 27) {
        $('.current-section').removeClass('current-section');
        $menuSection.addClass('current-section')
    }
})

function addAchievementToFavourites() {
    var id = $(this).attr('date-typeid');
    var element = findItemById(id);
    console.log(id)
    userAchievements.push(element);
    refreshUserAchievementsContent(userAchievements);
    alert('Achievements add to favourites!');
}