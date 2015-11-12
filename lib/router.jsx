FlowRouter.route('/', {
	name: 'home',
	subscriptions: function(){
		this.register('tasks', Meteor.subscribe('allTasks'));
	},
	action(){
		ReactLayout.render(MainLayout, {content: <TasksList />});
	}
});

FlowRouter.route('/gracias', {
	name: 'thanks',
	action(){
		ReactLayout.render(MainLayout, {content: <Thanks />});
	}
});

