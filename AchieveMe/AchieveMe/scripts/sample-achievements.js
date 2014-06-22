/// <reference path="_references.js" />
var sampleAchievements = [{
    id: 1,
    title: 'Cherni vrah conqueror',
    description: 'Climb the Cherni vrah peak in Vitosha.',    
    reward: null,
    proof: 'Upload a picture',
    author: 'Ivan Petrov',
    category: 'travel',
    linkedAchievements: [],
    startDate: '15.03.2014',
    endDate: null
}, {
    id: 2,
    title: 'Kaliakra cape guest',
    description: 'Travel to the Kaliakra cape.',
    reward: null,
    proof: 'Upload a picture',
    author: 'Desi Milenkova',
    category: 'travel',
    linkedAchievements: [],
    startDate: '08.06.2014',
    endDate: null
}, {
    id: 3,
    title: 'Banana monster',
    description: 'Eat 10 bananas in 5 minutes',
    reward: 'Free banana shake',
    proof: 'Upload a picture',
    author: 'Coastal cafe Albena',
    category: 'extreme',
    linkedAchievements: [],
    startDate: '14.06.2014',
    endDate: '01.08.2014'
}, {
    id: 4,
    title: 'Golden donor',
    description: 'Donate blood three times in 2014',    
    reward: 'Free doctors appointment',
    proof: 'Provide official documents.',
    author: 'Ministry of Health',
    category: 'health',
    linkedAchievements: [],
    startDate: '01.01.2014',
    endDate: '31.12.2014'
}, {
    id: 5,
    title: 'Lord of beer',
    description: 'Drink ten litres of beer at the Stolichno pivo fest.',    
    reward: 'EVEN MORE BEER!',
    proof: 'Official document',
    author: 'Stolichno pivo Ltd',
    category: 'extreme',
    linkedAchievements: [],
    startDate: '16.07.2014',
    endDate: '23.07.2014'
}, {
    id: 6,
    title: 'Heroic mother',
    description: 'Bring up 5 children',    
    reward: 'Free yearly vacation',
    proof: 'Official document',
    author: 'Ministry of social policy',
    category: 'extreme',
    linkedAchievements: [],
    startDate: '04.06.2014',
    endDate: null
}, {
    id: 7,
    title: 'Semi-pro',
    description: 'Win an amateur competition in any kind of sport.',  
    reward: 'Eternal glory',
    proof: 'Official document or recommendation by three friends',
    author: 'Kolyo',
    category: 'sport',
    linkedAchievements: [],
    startDate: '05.03.2014',
    endDate: null
}, {
    id: 8,
    title: 'Devoted Zilla customer',
    description: 'By products worth 10 000 leva from the Zilla corporation.',    
    reward: '25% discount for the next calendar year',
    proof: 'Official document',
    author: 'Zilla Corp',
    category: 'health',
    linkedAchievements: [],
    startDate: '10.06.2014',
    endDate: null
}, {
    id: 9,
    title: 'Rookie rocker',
    description: 'Buy a chopper and attend a rocker fest',    
    reward: null,
    proof: 'Upload a picture and get endorsed by 3 rockers',
    author: 'Burning Wheels corp',
    category: 'extreme',
    linkedAchievements: [],
    startDate: '15.06.2014',
    endDate: null
}, {
    id: 10,
    title: 'Friend of the fruits',
    description: 'Plant five different fruit trees',    
    reward: '20% discount on fresh fruit juice.',
    proof: 'Upload a picture',
    author: 'Freshly Ltd.',
    category: 'health',
    linkedAchievements: [11],
    startDate: '27.04.2014',
    endDate: null
}, {
    id:11,
    title: 'Pear maniac',
    description: 'Plant a pear tree.',    
    reward: null,
    proof: 'Upload a picture/video',
    author: 'Iglika Petrova',
    category: 'health',
    linkedAchievements: [],
    startDate: '01.06.2014',
    endDate: null
}, {
    id: 12,
    title: 'Hackaninja',
    description: 'Attend a hackaton event',    
    reward: 'A sticker',
    proof: 'Official document',
    author: 'Ivalyo Minkov - Niki',
    category: 'sport',
    linkedAchievements: [],
    startDate: '15.06.2014',
    endDate: '22.06.2014'
}, ];

var achievment = new Achievement({});

var userAchievements = [
    new UserAchievement(sampleAchievements[1], 1),
    new UserAchievement(sampleAchievements[9], 2),
    new UserAchievement(sampleAchievements[8], 3),
    new UserAchievement(sampleAchievements[4], 4)
];

userAchievements[0].proofOfCompletion = "kaliakra.jpg";
userAchievements[0].isCompleted = true;
userAchievements[0].dateOfCompletion = '21.06.2014';
userAchievements[2].proofOfCompletion = "choper.jpg";
userAchievements[2].isCompleted = true;
userAchievements[2].dateOfCompletion = '17.06.2014';

var latestAchievements = getLatestAchievements();

function Achievement(item) {
    this.id = item.id;
    this.title = item.title;
    this.description = item.description;
    this.reward = item.reward;
    this.proof = item.proof;
    this.author = item.author;
    this.category = item.category;
    this.linkedAchievements = item.linkedAchievements;
    this.startDate = item.startDate;
    this.endDate = item.endDate;

    return this;
}

function UserAchievement(achievement, id) {
    this.id = id;
    this.achievement = achievement;
    this.proofOfCompletion = null;
    this.dateOfCompletion = null;
    this.isCompleted = false;
}

function findItemById(collection, id) {
    for (var i in collection) {
        if (collection[i].id === id) {
            return collection[i];
        }
    }
}

function getLatestAchievements() {
    var latestAchievements = sampleAchievements.slice(0);

    latestAchievements.sort(function (a, b) {
        var first = a.startDate.split('.');
        var second = b.startDate.split('.');
        return new Date(second[2], second[1] - 1, second[0]) - new Date(first[2], first[1] - 1, first[0]);
    });

    return latestAchievements;
}

function getSuggestions() {
    //TODO: some random sort, for example by name or author
}