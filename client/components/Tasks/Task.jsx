Task = React.createClass({
	PropTypes: {
    // This component gets the task to display through a React prop.
    // We can use propTypes to indicate it is required
    task: React.PropTypes.object.isRequired
  },

  ToggleCompleted(){
  	let taskId = this.props.task._id;
  	this.props.task.completed ? Meteor.call('unDoneTask', taskId) : Meteor.call('doneTask', taskId)
 
  },

  RemoveTask(){
  	let taskId = this.props.task._id;
  	Meteor.call('removeTask', taskId)
  },

	render(){
		let taskProps = this.props.task.completed,
				taskId = this.props.task._id;
		let btnIcon = taskProps ? 'glyphicon glyphicon-plus' : 'glyphicon glyphicon-ok';
		const btnClassName = taskProps  ? 'btn btn-sm btn-danger' : 'btn btn-sm btn-success';
		let taskLink = '/'+taskId
		return(
			<li className="list-group-item">
				<div className="row">
					<div className="col-md-10 col-sm-9 col-xs-8">
						<h4><a href={taskLink}>{this.props.task.text}</a></h4>
					</div>
					<div className="col-xs-1">
						<button className={btnClassName} type="button" onClick={this.ToggleCompleted}><span className={btnIcon} aria-hidden="true"></span></button>
					</div>
					<div className="col-xs-1">
						<button className="btn btn-sm btn-default" type="button" onClick={this.RemoveTask}><span className="glyphicon glyphicon-trash" aria-hidden="true"></span></button>
					</div>
				</div>
			</li>

		)
	}
});