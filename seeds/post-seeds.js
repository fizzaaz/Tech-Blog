const { Post } = require('../models');

const postData = [{
        title: '5 Steps to Making an Outfit under 5 Minutes',
        content: 'Fashion OMG FIZZA! YOU GOT SOME REALLY COOL OUTFIT ',
        user_id: 1

    }, 
    {
        title: '5 QUICK FOOD RECEIPES',
        content: 'Eric Kim’s critically acclaimed eggplant recipe — just look at that five-star average rating! — makes the most of pantry staples and just two ingredients from the produce aisle. Salty, spicy and sweet, these tender vegetables pack more flavor than the simple ingredients list would suggest. Just grab some tissues before you dig in: “I’m weeping, this is so good,” commented one reader.',
        user_id: 2
    },
    {
        title: 'Programming ',
        content: 'I love C++, C# and java programming languages',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;