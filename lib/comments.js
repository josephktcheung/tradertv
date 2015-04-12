Comments = new Mongo.Collection('comments');

Meteor.methods({
  createComment: function(comment) {
    check(comment, {
      recipeName: String,
      text: String
    });

    comment.userId = Meteor.userId();
    comment.userAvatar = Meteor.user().services.twitter.profile_image_url_https;
    comment.userName = Meteor.user().profile.name;
    comment.date = new Date;

    if (! this.isSimulation && loc)
      comment.place = getLocationPlace(loc);

    var id = Comments.insert(comment);

    return id;
  }
});

// Initialize a seed activity
Meteor.startup(function() {
  if (Meteor.isServer && Comments.find().count() === 0) {
    Comments.insert({
      recipeName: 'spring-fromage-fort',
      text: 'Awesome strategy, thank you!',
      userAvatar: 'https://avatars3.githubusercontent.com/u/204768?v=2&s=400',
      userName: 'Matt Debergalis'
    });
    Comments.insert({
      recipeName: 'spring-fromage-fort',
      text: 'Broaden my horizon!',
      userAvatar: 'https://avatars2.githubusercontent.com/u/1784995?v=3&s=400',
      userName: 'Matt Debergalis'
    });
    Comments.insert({
      recipeName: 'spring-fromage-fort',
      text: 'What is this trading platform?',
      userAvatar: 'https://avatars1.githubusercontent.com/u/224840?v=3&s=400',
      userName: 'Matt Debergalis'
    });
    Comments.insert({
      recipeName: 'spring-fromage-fort',
      text: 'It\'s TD Ameritrade thinkorswim',
      userAvatar: 'https://avatars3.githubusercontent.com/u/204768?v=2&s=400',
      userName: 'Matt Debergalis'
    });
  }
});

