/// <reference path="_references.js" />
var $wrapper = $('#wrapper'),
    $menuSection = $('#main-menu-section'),
    $myAchievementsLink = $menuSection.find('#my-achievements-link'),
    $browseLink = $menuSection.find('#browse-link'),
    $createLink = $menuSection.find('#create-link');

$menuSection.on('click','li', onMenuItemClick);
function onMenuItemClick() {
    var listItemDataInfo = $(this).attr('data-link-info');
}