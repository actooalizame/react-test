FlowRouter.route('/', {
	name: 'home',
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

