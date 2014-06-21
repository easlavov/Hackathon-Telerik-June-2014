/// <reference path="_references.js" />
var $wrapper = $('#wrapper'),
    $menuSection = $('#main-menu-section'),
    $browseSection = $('#browse-section');

$menuSection.on('click', 'li', onMenuItemClick);
$browseSection.on('click', 'span', onBrowserSectionClick);

function onMenuItemClick() {
    var listItemDataInfo = $(this).attr('data-link-info'),
        $selectedSection = $('[data-tab-info=' + listItemDataInfo + ']');

    $menuSection.removeClass('current-section');
    $selectedSection.addClass('current-section');
}
function onBrowserSectionClick() {
    $clickedListItem = $(this);
    $clickedBrowseTabContent = $clickedListItem.parent().find('.browse-tab-content');
    if ($clickedBrowseTabContent.hasClass('current-browse-tab-content')) {
        $clickedBrowseTabContent.removeClass('current-browse-tab-content');
    }
    else {
        $clickedListItem.parent().find('current-browse-tab-content').removeClass('current-browse-tab-content');
        $clickedBrowseTabContent.addClass('current-browse-tab-content');
    }
}



$(document).on('keydown', function (ev) {
    if(ev.keyCode === 27)
    {
        $('.current-section').removeClass('current-section');
        $menuSection.addClass('current-section')
    }
})

