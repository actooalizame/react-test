Meteor.publish('allTasks', function(){
	return Tasks.find({completed:false});
});