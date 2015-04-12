Template.video.helpers({
  bookmarked: function() {
    return Meteor.user() && _.include(Meteor.user().bookmarkedRecipeNames, this.name);
  },
  comments: function() {
    return Comments.find();
  }
});

Template.video.onRendered(function() {
  iframe = $('iframe');
  iframe.css('width', window.innerWidth);
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
    event.preventDefault();

    var text = $(event.target).find('[name=text]').val();

    // Comments.insert({ text: text, date: new Date, recipeName: this.name });
    Meteor.call('createComment', {
      recipeName: this.name,
      text: text
    }, function (error, result) {
      if (error) {
        alert(error.reason);
      };
    })
  }
});
