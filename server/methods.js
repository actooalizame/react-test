Meteor.methods({
  'insertTask': function (text) {
    Tasks.insert({
      text: text,
      completed: false,
      createdAt: new Date()
    });
  }
});