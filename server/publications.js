Meteor.publish('undoneTasks', function(){
	return Tasks.find({completed:false});
});

Meteor.publish('doneTasks', function(){
	return Tasks.find({completed:true});
});