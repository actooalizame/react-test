IncompleteTasks = React.createClass({
	mixins: [ReactMeteorData],

	getMeteorData(){
		Meteor.subscribe('undoneTasks');
		return {
			tasks: Tasks.find({completed:false},{sort:{createdAt:-1}}).fetch(),
			incompleteCount: Tasks.find({completed:false}).count()
		}
	},

	renderTasks(){
		return this.data.tasks.map((task) => {
			return <Task key={task._id} task={task} />;
		});
	},

	noTasksMsg(){
		return(
			<h5 className="text-center text-warning"><strong>There are no incompleted tasks</strong></h5>
			)
	},

	smartRender(){
		return this.data.incompleteCount === 0 ? this.noTasksMsg() : this.renderTasks()
	},

	render(){
		return(
			<div className="row">
				<div className="col-sm-8 col-sm-offset-2">
					<ul className="list-group">
						<h4 className="text-center task-count">{this.data.incompleteCount} restantes</h4>
						{this.smartRender()}
					</ul>
				</div>
			</div>
		)
	}
});