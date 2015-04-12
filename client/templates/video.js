Template.video.helpers({
  bookmarked: function() {
    return Meteor.user() && _.include(Meteor.user().bookmarkedRecipeNames, this.name);
  },
  comments: function() {
    return Comments.find();
  }
});


Template.comment.helpers({
  firstName: function() {
    return this.userName.split(' ')[0];
  },
  text: function() {
    return this.text;
  }
});

Template.video.events({
  'submit form': function (event) {
    console.log('hi');
    event.preventDefault();

    var text = $(event.target).find('[name=text]').val();

    // Comments.insert({ text: text, date: new Date, recipeName: this.name });
    Meteor.call('createComment', {
      recipeName: self.name,
      text: text
    }, function (error, result) {
      if (error) {
        alert(error.reason);
      };
    })
  }
});
