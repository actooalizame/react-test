TasksList = React.createClass({
	
	render(){
		return(
			<div>
				<h2 className="text-center">Pending</h2>
				<IncompleteTasks />
				<hr/>
				<div className="completed">
					<h2 className="text-center">Done</h2>
					<CompletedTasks />
				</div>
			</div>
		)
	}
});