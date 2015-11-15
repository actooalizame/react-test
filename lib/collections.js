Tasks = new Mongo.Collection('tasks');

Comments = new Mongo.Collection('comments');



/*
Meteor.startup(function () {
  if (Tasks.find({}).count() === 0) {
    var data = JSON.parse(Assets.getText('insert-tasks.json'));
   
      data.forEach(function (item, index, array) {
            Tasks.insert(item);
        });
  }
});*/

/*
Meteor.startup(function () {
  if (Comments.find({taskId:'N9st8pomY3QrRPH7X'}).count() === 0) {
    var data = JSON.parse(Assets.getText('insert-comments.json'));
   
      data.forEach(function (item, index, array) {
            Comments.insert(item);
        });
  }
});

*/