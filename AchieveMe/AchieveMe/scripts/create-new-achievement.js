/// <reference path="_references.js" />
var $createForm = $('#create-section').find('#create-achievement-form');
$createForm.find('#submit').on('click', function () {
    var title = $createForm.find('#achievement-title').val();
    var description = $createForm.find('#achievement-descriptions').val();
    var proof = $createForm.find('#achievement-proof').val();
    var reward = $createForm.find('#achievement-reward').val();
    var startDate = $createForm.find('#achievement-start-time').val();
    var endDate = $createForm.find('#achievement-finish-time').val();
    var id = sampleAchievements.length;

    var newAchievement = {
        id: id,
        title: title,
        description: description,
        reward: reward,
        proof: proof,
        author: 'currentUser',
        linkedAchievements:[],
        startDate: startDate,
        endDate: endDate
    };

    addNewAchievement(newAchievement);
})

function addNewAchievement(newAch) {
    var n = new Achievement(newAch);
    sampleAchievements.push(n);
}