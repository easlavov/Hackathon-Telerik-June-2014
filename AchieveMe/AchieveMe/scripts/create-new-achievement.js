/// <reference path="_references.js" />
var $createForm = $('#create-section').find('#create-achievement-form');
$createForm.find('#submit').on('click', function () {
    var title = $createForm.find('#achievement-title').val();
    var description = $createForm.find('#achievement-description').val();
    var proof = $createForm.find('#achievement-proof').val();
    var reward = $createForm.find('#achievement-reward').val();
    var category = $createForm.find('#achievement-category').val();
    var startDate = $createForm.find('#achievement-start-time').val();
    var endDate = $createForm.find('#achievement-finish-time').val();
    var id = sampleAchievements.length + 1;

    var newAchievement = {
        id: id,
        title: title,
        description: description,
        reward: reward,
        proof: proof,
        author: 'currentUser',
        category: category,
        linkedAchievements: [],
        startDate: startDate,
        endDate: endDate
    };

    addNewAchievement(newAchievement);
    refreshBrowseAchContent();

    refreshLatestAchContent();
    refreshContainerWidth();

    alert('Achievement was added successfully!');
    clearFields();
})

function refreshContainerWidth() {
    $('section#browse-section div.browsed-achievements-container').css('width', sampleAchievements.length * 180 + 'px');
}

function addNewAchievement(newAch) {
    var n = new Achievement(newAch);
    sampleAchievements.push(n);

    console.dir(sampleAchievements);
}

function clearFields() {
    $createForm.find('#achievement-title').val('');
    $createForm.find('#achievement-description').val('');
    $createForm.find('#achievement-proof').val('');
    $createForm.find('#achievement-reward').val('');
    $createForm.find('#achievement-category').val('');
    $createForm.find('#achievement-start-time').val('');
    $createForm.find('#achievement-finish-time').val('');
}