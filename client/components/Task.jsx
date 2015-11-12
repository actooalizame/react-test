Task = React.createClass({
	PropTypes: {
    // This component gets the task to display through a React prop.
    // We can use propTypes to indicate it is required
    task: React.PropTypes.object.isRequired
  },

  ToggleCompleted(){
  	var taskId = this.props.task._id;
  	this.props.task.completed ? Meteor.call('unDoneTask', taskId) : Meteor.call('doneTask', taskId)
 
  },

	render(){
		const btnClassName = this.props.task.completed ? 'btn btn-sm btn-danger' : 'btn btn-sm btn-success';
		return(
			<li className="list-group-item">
					<div className="row">
						<div className="col-sm-10">
							<h4>{this.props.task.text}</h4>
						</div>
						<div className="col-sm-2">
							<button className={btnClassName} type="button" onClick={this.ToggleCompleted}>Ok</button>
						</div>
					</div>
				
			</li>

		)
	}
});