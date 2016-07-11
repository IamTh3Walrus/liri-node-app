var twitterKeys = require('./twitter.js');
var Twitter = require('twitter');

var params = {
  screen_name: 'MrStephenDoe'
};

client.get('statuses/user_timeline', params);

 function mytweets(error, tweets, response){
  if (!error) {
    console.log(tweets);
  }
};