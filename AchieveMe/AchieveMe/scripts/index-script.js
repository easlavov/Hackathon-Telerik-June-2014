/// <reference path="_references.js" />
var $wrapper = $('#wrapper'),
    $menuSection = $('#main-menu-section'),
    $browseSection = $('#browse-section'),
    DEFAULT_BG_COLOR = 'pink',
    HOVERED_BG_COLOR = 'purple';

$menuSection.on('click', 'li', onMenuItemClick);
$browseSection.on('click', 'li', onBrowserSectionClick)
//$menuSection.on('mouseover', 'li', onMenuItemMouseOver);
//$menuSection.on('mouseout', 'li', onMenuItemMouseOut);

function onMenuItemClick() {
    var listItemDataInfo = $(this).attr('data-link-info'),
        $selectedSection = $('[data-tab-info=' + listItemDataInfo + ']');

    $menuSection.removeClass('current-section');
    $selectedSection.addClass('current-section');
}
function onBrowserSectionClick() {
    $(this).parent().find('.current-browse-tab-content').removeClass('current-browse-tab-content');
    $(this).find('.browse-tab-content').addClass('current-browse-tab-content');
}






//function onMenuItemMouseOver() {
//    //var $hoveredItem = $(this).css({
//    //    'background': HOVERED_BG_COLOR,   

//    //});
//    //$hoveredItem.find('a').css({
//    //    'font-size': '30px'
//    //})

//}
//function onMenuItemMouseOut() {
//    //var $hoveredItem = $(this).css({
//    //    'background': DEFAULT_BG_COLOR,
//    //    'font-size': '20px'
//    //});
//    //$hoveredItem.find('a').css({
//    //    'font-size': '25px'
//    //})
//}