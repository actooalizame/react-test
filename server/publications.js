Meteor.publish('incompletedTasks', function(){
	return Tasks.find({completed:false});
});

Meteor.publish('completedTasks', function(){
	return Tasks.find({completed:true});
});

Meteor.publish('singleTask', function(taskId){
	return  Tasks.find({_id:taskId});

});