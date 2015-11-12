TasksList = React.createClass({
	
	mixins: [ReactMeteorData],

	getMeteorData(){
		return {
			tasks: Tasks.find({}).fetch()
		}
	},

	renderTasks(){
		return this.data.tasks.map((task) => {
			return <Task key={task._id} task={task} />;
		});
	},

	render(){
		return(	
			<ul className="tasks">
				{this.renderTasks()}
			</ul>
		)
	}
});