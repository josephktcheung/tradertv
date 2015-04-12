Template.investOverlay.events({
  'click .js-invest': function() {
    event.preventDefault();

    var amount = parseFloat($('.invest-amount').val());

    Meteor.call('createInvestment', {
      recipeName: Session.get('investName'),
      amount: amount
    }, function (error, result) {
      if (error) {
        alert(error.reason);
      };
    })

    Overlay.close();
  }
});
