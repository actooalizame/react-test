TasksList = React.createClass({
	
	render(){
		return(
			<div>
				<h3>Pending</h3>
				<IncompleteTasks />
				<hr/>
				<h3>Done</h3>
				<CompletedTasks />
			</div>
		)
	}
});