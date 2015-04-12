Videos = new Mongo.Collection('videos');


// Initialize a seed activity
Meteor.startup(function() {
  if (Meteor.isServer && Videos.find().count() === 0) {
    Videos.insert({
      recipeName: 'spring-fromage-fort',
      url: 'https://youtu.be/_B2KH9pHfEE'
    });
  }
});

