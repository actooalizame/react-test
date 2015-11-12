Meteor.methods({
  'insertTask': function (text) {
    Tasks.insert({
      text: text,
      completed: false,
      createdAt: new Date()
    });
  },
  'doneTask': function(taskId){
    Tasks.update(
      { _id: taskId},
      {$set: {completed:true}}
    );
  },
  'unDoneTask': function(taskId){
    Tasks.update(
      { _id: taskId},
      {$set: {completed:false}}
    );
  },
});