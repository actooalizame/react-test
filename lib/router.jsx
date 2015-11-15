FlowRouter.route('/', {
	name: 'home',
	action(){
		ReactLayout.render(MainLayout, {content: <TasksList />});
	}
});

FlowRouter.route('/:taskId', {
	action(params){
		ReactLayout.render(SingleLayout, {content: <SingleTask {...params} />});
	}
});

FlowRouter.route('/gracias', {
	name: 'thanks',
	action(){
		ReactLayout.render(MainLayout, {content: <Thanks />});
	}
});

