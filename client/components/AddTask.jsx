AddTask = React.createClass({
	handleSubmit(e){
		e.preventDefault();
		var text = ReactDOM.findDOMNode(this.refs.addTask).value.trim();
		Meteor.call('insertTask', text);
		ReactDOM.findDOMNode(this.refs.addTask).value = '';
	},

	render(){
		return(
			<div className="row center-block">
				<div className="col-sm-6 col-sm-offset-3">
					<form className="new-task" onSubmit={this.handleSubmit}>
						<div className="form-group">
							<input className="form-control" type="text" ref="addTask" placeholder="Add Task"/>
						</div>
					</form>
				</div>
			</div>
			)
	}
});