Investments = new Mongo.Collection('investments');

Meteor.methods({
  createInvestment: function(investment) {
    check(investment, {
      recipeName: String,
      amount: Number
    });

    investment.userId = '12412331';

    var id = Investments.insert(investment);

    return id;
  }
});