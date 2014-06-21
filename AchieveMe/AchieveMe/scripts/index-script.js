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
    var $hoveredItem = $(this).css({
        'background': HOVERED_BG_COLOR,   

    });
    $hoveredItem.find('a').css({
        'font-size': '30px'
    })

}
function onMenuItemMouseOut() {
    var $hoveredItem = $(this).css({
        'background': DEFAULT_BG_COLOR,
        'font-size': '20px'
    });
    $hoveredItem.find('a').css({
        'font-size': '25px'
    })
}