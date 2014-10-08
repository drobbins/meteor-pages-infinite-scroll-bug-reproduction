Items = new Meteor.Collection("items");
Pages = new Meteor.Pagination(Items);

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault("counter", 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get("counter");
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set("counter", Session.get("counter") + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
      if (Items.find().count() == 0) {
          for (i=0; i<=100; i++) {
              Items.insert({
                  name: "Item "+i,
                  description: "Item "+i+" is the best Item?"
              });
          }
      }

  });
}
