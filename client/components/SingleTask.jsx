SingleTask = React.createClass({

	mixins: [ReactMeteorData],
	getMeteorData(){
		let data = {};
		let taskId = this.props.taskId;
		let handle = Meteor.subscribe('singleTask', taskId);
    if(handle.ready()) {
      data.task = Tasks.findOne({_id: taskId});
    }
    return data;
	},

	isCompleted(){
		let taskId = this.data.task._id
		let singleTask = Tasks.findOne({_id:taskId})
		let completed = singleTask.completed
		return completed ? 'Completed' : 'Incompleted'
	},

	getContent(){
		return(
			<div>
				<h1 className="text-center">{this.data.task.text}</h1>
				<h4>Status: {this.isCompleted()}</h4>
			</div>
			)
		
	
	},

	render(){
		return (
			<div>
      	{this.data.task? this.getContent() : <p>Loading...</p>}
    	</div>
    )
	},
});