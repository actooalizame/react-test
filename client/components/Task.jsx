Task = React.createClass({
	PropTypes: {
    // This component gets the task to display through a React prop.
    // We can use propTypes to indicate it is required
    task: React.PropTypes.object.isRequired
  },
	render(){
		return(
			<li className="list-group-item"><h5>{this.props.task.text}</h5></li>
		)
	}
});