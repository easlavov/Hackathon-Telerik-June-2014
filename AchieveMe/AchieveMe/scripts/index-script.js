/// <reference path="_references.js" />
var $wrapper = $('#wrapper'),
    $menuSection = $('#main-menu-section'),
    $myAchievementsLink = $menuSection.find('#my-achievements-link'),
    $browseLink = $menuSection.find('#browse-link'),
    $createLink = $menuSection.find('#create-link'),
    DEFAULT_BG_COLOR = 'pink',
    HOVERED_BG_COLOR = 'purple';

$menuSection.on('click', 'li', onMenuItemClick);
$menuSection.on('mouseover', 'li', onMenuItemMouseOver);
$menuSection.on('mouseout', 'li', onMenuItemMouseOut);
function onMenuItemClick() {
    var listItemDataInfo = $(this).attr('data-link-info'),
        $selectedSection = $('[data-tab-info=' + listItemDataInfo + ']');

    $menuSection.hide();
    $selectedSection.show();
}

function onMenuItemMouseOver() {
    $(this).css('background', HOVERED_BG_COLOR);
}
function onMenuItemMouseOut() {
    $(this).css('background', DEFAULT_BG_COLOR);
}