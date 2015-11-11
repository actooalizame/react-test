FlowRouter.route('/', {
	name: 'home',
	action(){
		ReactLayout.render(MainLayout, {content: <Wall />});
	}
});

FlowRouter.route('/gracias', {
	name: 'thanks',
	action(){
		ReactLayout.render(MainLayout, {content: <Thanks />});
	}
});

