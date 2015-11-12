Task = React.createClass({
	PropTypes: {
    // This component gets the task to display through a React prop.
    // We can use propTypes to indicate it is required
    task: React.PropTypes.object.isRequired
  },
	render(){
		return(
			<li>{this.props.task.text}</li>
		)
	}
});