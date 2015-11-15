Meteor.publish('incompletedTasks', function(){
	return Tasks.find({completed:false});
});

Meteor.publish('completedTasks', function(){
	return Tasks.find({completed:true});
});

Meteor.publish('singleTask', function(taskId){
	return  Tasks.find({_id:taskId});
});

Meteor.publish('taskComments', function(taskId){
	return  Comments.find({taskId:taskId});
});