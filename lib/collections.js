Tasks = new Mongo.Collection('tasks');



/*
Meteor.startup(function () {
  if (Tasks.find({}).count() === 0) {
    var data = JSON.parse(Assets.getText('insert-tasks.json'));
   
      data.forEach(function (item, index, array) {
            Tasks.insert(item);
        });
  }
});*/