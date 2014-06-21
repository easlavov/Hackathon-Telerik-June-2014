/// <reference path="_references.js" />
//TODO: Add category to the elements
var sampleAchievements = [{
    id: 1,
    title: 'Cherni vrah conqueror',
    description: 'Climb the Cherni vrah peak in Vitosha.',    
    reward: null,
    proof: 'Upload a picture',
    author: 'Ivan Petrov',
    linkedAchievements: [],
    startDate: '15.06.2014',
    endDate: null
}, {
    id: 2,
    title: 'Kaliakra cape guest',
    description: 'Travel to the Kaliakra cape.',
    reward: null,
    proof: 'Upload a picture',
    author: 'Desi Milenkova',
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
    linkedAchievements: [],
    startDate: '15.06.2014',
    endDate: '01.08.2014'
}, {
    id: 4,
    title: 'Golden donor',
    description: 'Donate blood three times in 2014',    
    reward: 'Free doctors appointment',
    proof: 'Provide official documents.',
    author: 'Ministry of Health',
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
    linkedAchievements: [],
    startDate: '15.06.2014',
    endDate: null
}, {
    id: 7,
    title: 'Semi-pro',
    description: 'Win an amateur competition in any kind of sport.',  
    reward: 'Eternal glory',
    proof: 'Official document or recommendation by three friends',
    author: 'Kolyo',
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
    linkedAchievements: [],
    startDate: '15.06.2014',
    endDate: null
}, {
    id: 9,
    title: 'Rookie rocker',
    description: 'Buy a chopper and attend a rocker fest',    
    reward: null,
    proof: 'Upload a picture and get endorsed by 3 rockers',
    author: 'Burning Wheels corp',
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
    linkedAchievements: [11],
    startDate: '15.06.2014',
    endDate: null
}, {
    id:11,
    title: 'Pear maniac',
    description: 'Plant a pear tree.',    
    reward: null,
    proof: 'Upload a picture/video',
    author: 'Iglika Petrova',
    linkedAchievements: [],
    startDate: '15.06.2014',
    endDate: null
}, {
    id: 12,
    title: 'Hackaninja',
    description: 'Attend a hackaton event',    
    reward: 'A sticker',
    proof: 'Official document',
    author: 'Ivalyo Minkov - Niki',
    linkedAchievements: [],
    startDate: '15.06.2014',
    endDate: '22.06.2014'
}, ];

var achievment = new Achievement({});

var userAchievements = [
    new UserAchievement(sampleAchievements[1]),
    new UserAchievement(sampleAchievements[3]),
    new UserAchievement(sampleAchievements[4])
];

function Achievement(item) {
    this.id = item.id;
    this.title = item.title;
    this.description = item.description;
    this.reward = item.reward;
    this.proof = item.proof;
    this.author = item.author;
    this.linkedAchievements = item.linkedAchievements;
    this.startDate = item.startDate;
    this.endDate = item.endDate;

    return this;
}

function UserAchievement(achievement) {
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