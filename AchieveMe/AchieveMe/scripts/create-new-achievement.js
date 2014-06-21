/// <reference path="_references.js" />
var $createForm = $('#create-section').find('#create-achievement-form');
$createForm.find('#submit').on('click', function () {
    var title = $createForm.find('#achievement-title').val();
    var description = $createForm.find('#achievement-descriptions').val();
    var proof = $createForm.find('#achievement-proof').val();
    var reward = $createForm.find('#achievement-reward').val();
    var startDate = $createForm.find('#achievement-start-time').val();
    var startDate = $createForm.find('#achievement-finish-time').val();


})

function addNewAchievement() {

}