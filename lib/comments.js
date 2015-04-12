Comments = new Mongo.Collection('comments');

Meteor.methods({
  createComment: function(comment) {
    check(comment, {
      recipeName: String,
      text: String
    });

    comment.userId = '12412331';
    comment.userAvatar = 'https://avatars2.githubusercontent.com/u/1784995?v=3&s=400';
    comment.userName = 'Harry';
    comment.date = new Date;

    var id = Comments.insert(comment);

    return id;
  }
});

// Initialize a seed activity
Meteor.startup(function() {
  if (Meteor.isServer && Comments.find().count() === 0) {
    Comments.insert({
      recipeName: 'david-wong',
      text: 'Awesome strategy, thank you!',
      userAvatar: 'https://avatars3.githubusercontent.com/u/204768?v=2&s=400',
      userName: 'Matt Debergalis'
    });
    Comments.insert({
      recipeName: 'david-wong',
      text: 'Broaden my horizon!',
      userAvatar: 'https://avatars2.githubusercontent.com/u/1784995?v=3&s=400',
      userName: 'Harry'
    });
    Comments.insert({
      recipeName: 'david-wong',
      text: 'What is this trading platform?',
      userAvatar: 'https://avatars1.githubusercontent.com/u/224840?v=3&s=400',
      userName: 'David'
    });
    Comments.insert({
      recipeName: 'david-wong',
      text: 'It\'s TD Ameritrade thinkorswim',
      userAvatar: 'https://avatars3.githubusercontent.com/u/204768?v=2&s=400',
      userName: 'Matt Debergalis'
    });

    Comments.insert({
      recipeName: 'susanne-right',
      text: 'Awesome strategy, thank you!',
      userAvatar: 'https://avatars3.githubusercontent.com/u/204768?v=2&s=400',
      userName: 'Matt Debergalis'
    });
    Comments.insert({
      recipeName: 'susanne-right',
      text: 'This is a new thing to me lol',
      userAvatar: 'https://avatars2.githubusercontent.com/u/1784995?v=3&s=400',
      userName: 'Harry'
    });

    Comments.insert({
      recipeName: 'steven-leung',
      text: 'Awesome strategy, thank you!',
      userAvatar: 'https://avatars3.githubusercontent.com/u/204768?v=2&s=400',
      userName: 'Matt Debergalis'
    });
    Comments.insert({
      recipeName: 'steven-leung',
      text: 'This is a new thing to me lol',
      userAvatar: 'https://avatars2.githubusercontent.com/u/1784995?v=3&s=400',
      userName: 'Harry'
    });

    Comments.insert({
      recipeName: 'cathy-li',
      text: 'Awesome strategy, thank you!',
      userAvatar: 'https://avatars3.githubusercontent.com/u/204768?v=2&s=400',
      userName: 'Matt Debergalis'
    });
    Comments.insert({
      recipeName: 'cathy-li',
      text: 'This is a new thing to me lol',
      userAvatar: 'https://avatars2.githubusercontent.com/u/1784995?v=3&s=400',
      userName: 'Harry'
    });

    Comments.insert({
      recipeName: 'terrence-spano',
      text: 'Awesome strategy, thank you!',
      userAvatar: 'https://avatars3.githubusercontent.com/u/204768?v=2&s=400',
      userName: 'Matt Debergalis'
    });
    Comments.insert({
      recipeName: 'terrence-spano',
      text: 'This is a new thing to me lol',
      userAvatar: 'https://avatars2.githubusercontent.com/u/1784995?v=3&s=400',
      userName: 'Harry'
    });

    Comments.insert({
      recipeName: 'brookes-xi',
      text: 'Awesome strategy, thank you!',
      userAvatar: 'https://avatars3.githubusercontent.com/u/204768?v=2&s=400',
      userName: 'Matt Debergalis'
    });
    Comments.insert({
      recipeName: 'brookes-xi',
      text: 'This is a new thing to me lol',
      userAvatar: 'https://avatars2.githubusercontent.com/u/1784995?v=3&s=400',
      userName: 'Harry'
    });

    Comments.insert({
      recipeName: 'stan-smith',
      text: 'Awesome strategy, thank you!',
      userAvatar: 'https://avatars3.githubusercontent.com/u/204768?v=2&s=400',
      userName: 'Matt Debergalis'
    });
    Comments.insert({
      recipeName: 'stan-smith',
      text: 'This is a new thing to me lol',
      userAvatar: 'https://avatars2.githubusercontent.com/u/1784995?v=3&s=400',
      userName: 'Harry'
    });
  }
});

