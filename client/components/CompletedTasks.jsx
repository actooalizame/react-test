CompletedTasks = React.createClass({
	mixins: [ReactMeteorData],

	getMeteorData(){
		Meteor.subscribe('completedTasks');
		return {
			tasks: Tasks.find({completed:true},{sort:{createdAt:-1}}).fetch()
			
		}
	},

	renderTasks(){
		return this.data.tasks.map((task) => {
			return <Task key={task._id} task={task} />;
		});
	},

	render(){
		return(
			<div className="row">
				<div className="col-sm-8 col-sm-offset-2">
					<ul className="list-group">
						{this.renderTasks()}
					</ul>
				</div>
			</div>
		)
	}
});