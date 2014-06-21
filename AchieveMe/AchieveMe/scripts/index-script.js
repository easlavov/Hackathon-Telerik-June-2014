/// <reference path="_references.js" />
var $wrapper = $('#wrapper'),
    $menuSection = $('#main-menu-section'),
    $browseSection = $('#browse-section'),
    $categoriesListItem = $('#categories-tab');

$menuSection.on('click', 'li', onMenuItemClick);
$browseSection.on('click', 'span', onBrowserSectionClick);
$categoriesListItem.on('click', 'span',onCategoriesTabClick)

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


$(document).on('keydown', function (ev) {
    if(ev.keyCode === 27)
    {
        $('.current-section').removeClass('current-section');
        $menuSection.addClass('current-section')
    }
})

